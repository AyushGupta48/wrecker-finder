# 🔧 Wrecker Finder

A web app that helps Australians find second-hand car parts from local wreckers. Users search by make, model, year, and part — the app queries wrecker listings and surfaces relevant results in one place, eliminating the need to manually ring or browse multiple yards.

---

## Why I Built It

Finding second-hand car parts in Australia is surprisingly painful (I found out the hard way) — it usually means Googling individual wreckers, calling around, or hoping you get lucky on Gumtree. I built this tool to centralise that search and give users a faster way to locate what they need from local wrecking yards.

---

## Features

- Search for parts by car make, model, year, and part name
- Aggregates results from multiple wrecker sources
- Clean, minimal UI — built to be fast and easy to use on desktop or mobile
- Deployed live on Netlify — no install required

---

## Tech Stack

| Layer      | Technology          |
|------------|---------------------|
| Frontend   | HTML, CSS, JavaScript (Vanilla) |
| Deployment | Netlify             |
| Config     | `config.js` (API keys, source URLs — not committed) |

---

## Usage

**Live app:** https://partsfinderaus.netlify.app

To run locally:

1. Clone the repo
   ```bash
   git clone https://github.com/AyushGupta48/wrecker-finder.git
   cd wrecker-finder
   ```

2. Set up your config file
   ```bash
   cp config.example.js config.js
   # Edit config.js and fill in your API keys/settings
   ```

3. Open `frontend/index.html` in your browser — no build step required.

---

## Project Structure

```
wrecker-finder/
├── frontend/          # All UI files (HTML, CSS, JS)
├── config.example.js  # Config template (copy to config.js and populate)
├── netlify.toml       # Netlify deployment settings
└── .gitignore
```

---

## Notes

- `config.js` is excluded from version control — use `config.example.js` as the template.
- This project is a work in progress; additional wrecker sources and filtering options are planned.
