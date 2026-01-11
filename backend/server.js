import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to Supabase
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

app.get("/", (req, res) => res.json({ ok: true }));

// Search: /search?make=Mazda&model=Mazda%203&state=NSW
app.get("/search", async (req, res) => {
  const { make, model, state } = req.query;

  if (!make || !model || !state) {
    return res.status(400).json({ error: "Please provide make, model, and state." });
  }

  const { data, error } = await supabase
    .from("inventory")
    .select("make, model, year, colour, state, suburb, wrecker_name, contact")
    .eq("make", make)
    .eq("model", model)
    .eq("state", state)
    .order("year", { ascending: false });

  if (error) return res.status(500).json({ error: error.message });

  const results = data.map(row => ({
    make: row.make,
    model: row.model,
    year: row.year,
    colour: row.colour || "",
    location: row.suburb ? `${row.state} - ${row.suburb}` : row.state,
    contact: `${row.wrecker_name} - ${row.contact}`
  }));

  res.json({ results });
});

// ✅ Add inventory row (used by wreckers form)
app.post("/inventory", async (req, res) => {
    try {
      const {
        make,
        model,
        year,
        colour,
        state,
        suburb,
        wrecker_name,
        contact
      } = req.body;
  
      // Basic validation (keep it simple)
      if (!make || !model || !year || !state || !wrecker_name || !contact) {
        return res.status(400).json({
          error: "Missing required fields: make, model, year, state, wrecker_name, contact"
        });
      }
  
      const yearInt = parseInt(year, 10);
      if (Number.isNaN(yearInt) || yearInt < 1950 || yearInt > 2035) {
        return res.status(400).json({ error: "Year must be a valid number (e.g., 2015)" });
      }
  
      const { data, error } = await supabase
        .from("inventory")
        .insert([{
          make,
          model,
          year: yearInt,
          colour: colour || null,
          state,
          suburb: suburb || null,
          wrecker_name,
          contact
        }])
        .select("id, make, model, year, colour, state, suburb, wrecker_name, contact")
        .single();
  
      if (error) return res.status(500).json({ error: error.message });
  
      res.status(201).json({ ok: true, created: data });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  

app.listen(3000, () => console.log("API running on http://localhost:3000"));
