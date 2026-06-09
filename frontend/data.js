const MAKES_MODELS = {
  Toyota:          ["86","Aurion","C-HR","Camry","Corolla","FJ Cruiser","Fortuner","HiAce","Hilux","Kluger","LandCruiser 200","LandCruiser 70 Series","LandCruiser Prado","RAV4","Tarago","Yaris"],
  Mazda:           ["BT-50","CX-3","CX-5","CX-8","CX-9","Mazda 2","Mazda 3","Mazda 6","MX-5"],
  Ford:            ["Escape","Everest","Falcon","Fiesta","Focus","Mustang","Ranger","Territory","Transit"],
  Holden:          ["Astra","Barina","Captiva","Colorado","Commodore","Cruze","Spark","Trailblazer","Trax"],
  Hyundai:         ["Accent","Elantra","i20","i30","i40","Kona","Santa Fe","Sonata","Staria","Tucson","Veloster"],
  Kia:             ["Carnival","Cerato","EV6","Niro","Picanto","Rio","Seltos","Sorento","Sportage","Stinger"],
  Nissan:          ["Juke","Leaf","Micra","Murano","Navara","Patrol","Pathfinder","Pulsar","Qashqai","X-Trail"],
  Mitsubishi:      ["ASX","Eclipse Cross","Galant","Lancer","Mirage","Outlander","Pajero","Pajero Sport","Triton"],
  Subaru:          ["BRZ","Forester","Impreza","Liberty","Outback","Tribeca","WRX","XV"],
  Honda:           ["Accord","City","Civic","CR-V","HR-V","Jazz","Odyssey","Stream"],
  Volkswagen:      ["Amarok","Golf","Passat","Polo","T-Roc","Tiguan","Touareg","Transporter"],
  BMW:             ["1 Series","2 Series","3 Series","4 Series","5 Series","7 Series","X1","X3","X5","X7"],
  "Mercedes-Benz": ["A-Class","B-Class","C-Class","E-Class","GLA","GLC","GLE","Sprinter","Vito"],
  Audi:            ["A1","A3","A4","A6","Q2","Q3","Q5","Q7","TT"],
  Suzuki:          ["Baleno","Grand Vitara","Ignis","Jimny","S-Cross","Swift","Vitara"],
  Lexus:           ["ES","GX","IS","LX","NX","RX","UX"],
  Isuzu:           ["D-Max","MU-X"],
  "Land Rover":    ["Defender","Discovery","Discovery Sport","Freelander","Range Rover","Range Rover Sport"],
  Jeep:            ["Cherokee","Compass","Grand Cherokee","Renegade","Wrangler"],
  Skoda:           ["Fabia","Kamiq","Kodiaq","Octavia","Scala","Superb"],
  Volvo:           ["S60","V60","XC40","XC60","XC90"],
  Renault:         ["Clio","Kadjar","Koleos","Master","Megane","Trafic"],
  LDV:             ["Deliver 9","G10","T60"],
  MG:              ["HS","MG3","ZS"],
  "Great Wall":    ["Cannon","Steed","Ute"],
};

const PARTS_BY_CATEGORY = {
  "Body Panels": [
    "Bonnet",
    "Boot Lid / Tailgate",
    "Door – Front Left",
    "Door – Front Right",
    "Door – Rear Left",
    "Door – Rear Right",
    "Fender – Front Left",
    "Fender – Front Right",
    "Quarter Panel – Left",
    "Quarter Panel – Right",
    "Roof Panel",
    "Sill / Rocker Panel",
  ],
  "Bumpers & Grilles": [
    "Bumper Bar – Front",
    "Bumper Bar – Rear",
    "Front Bar Reinforcement",
    "Grille",
    "Tow Bar",
  ],
  "Lights": [
    "DRL / Daytime Running Light",
    "Fog Light – Front Left",
    "Fog Light – Front Right",
    "Headlight – Left",
    "Headlight – Right",
    "Indicator – Front",
    "Number Plate Light",
    "Taillight – Left",
    "Taillight – Right",
  ],
  "Glass": [
    "Door Glass – Front Left",
    "Door Glass – Front Right",
    "Door Glass – Rear Left",
    "Door Glass – Rear Right",
    "Quarter Window",
    "Rear Windscreen",
    "Sunroof Glass",
    "Windscreen",
  ],
  "Mirrors": [
    "Mirror – Left",
    "Mirror – Right",
  ],
  "Engine & Drivetrain": [
    "A/C Compressor",
    "Alternator",
    "Catalytic Converter",
    "Cylinder Head",
    "Differential – Front",
    "Differential – Rear",
    "Drive Shaft",
    "Engine (Complete)",
    "Exhaust System",
    "Fuel Injectors",
    "Fuel Pump",
    "Gearbox – Automatic",
    "Gearbox – Manual",
    "Intercooler",
    "Power Steering Pump",
    "Prop Shaft",
    "Radiator",
    "Starter Motor",
    "Transfer Case",
    "Turbocharger",
  ],
  "Suspension & Steering": [
    "Control Arm – Front Left",
    "Control Arm – Front Right",
    "Control Arm – Rear",
    "Hub / Bearing Assembly",
    "Knuckle / Spindle",
    "Steering Column",
    "Steering Rack",
    "Strut – Front Left",
    "Strut – Front Right",
    "Strut – Rear Left",
    "Strut – Rear Right",
    "Sway Bar – Front",
    "Sway Bar – Rear",
  ],
  "Brakes": [
    "ABS Module",
    "Brake Master Cylinder",
    "Calliper – Front Left",
    "Calliper – Front Right",
    "Calliper – Rear Left",
    "Calliper – Rear Right",
    "Disc Rotor",
  ],
  "Interior": [
    "Airbag – Curtain",
    "Airbag – Driver",
    "Airbag – Passenger",
    "Carpet / Floor Lining",
    "Centre Console",
    "Dashboard",
    "Door Trim – Front Left",
    "Door Trim – Front Right",
    "Door Trim – Rear Left",
    "Door Trim – Rear Right",
    "Instrument Cluster",
    "Seat – Front Left",
    "Seat – Front Right",
    "Seat – Rear",
    "Steering Wheel",
    "Sun Visor",
  ],
  "Electrical": [
    "Battery",
    "ECU / Engine Control Module",
    "Fuse Box",
    "Ignition Barrel",
    "Window Regulator – Front Left",
    "Window Regulator – Front Right",
    "Window Regulator – Rear Left",
    "Window Regulator – Rear Right",
    "Wiring Loom",
  ],
  "Wheels & Tyres": [
    "Alloy Wheel",
    "Centre Cap",
    "Spare Wheel",
    "Steel Wheel",
    "Tyre",
  ],
};

const QUICK_PARTS = {
  "Body": [
    "Bonnet",
    "Boot Lid / Tailgate",
    "Bumper Bar – Front",
    "Bumper Bar – Rear",
    "Door – Front Left",
    "Door – Front Right",
    "Door – Rear Left",
    "Door – Rear Right",
    "Fender – Front Left",
    "Fender – Front Right",
    "Grille",
    "Roof Panel",
  ],
  "Glass": [
    "Windscreen",
    "Rear Windscreen",
  ],
  "Mirrors": [
    "Mirror – Left",
    "Mirror – Right",
  ],
  "Lights": [
    "Headlight – Left",
    "Headlight – Right",
    "Taillight – Left",
    "Taillight – Right",
  ],
  "Mechanical": [
    "Engine (Complete)",
    "Gearbox – Automatic",
    "Gearbox – Manual",
    "Radiator",
    "Alternator",
    "Turbocharger",
  ],
  "Interior": [
    "Dashboard",
    "Seat – Front Left",
    "Seat – Front Right",
    "Seat – Rear",
    "Steering Wheel",
    "Centre Console",
  ],
  "Wheels": [
    "Alloy Wheel",
    "Steel Wheel",
    "Spare Wheel",
  ],
};

function populateMakeSelect(el, placeholder) {
  el.innerHTML = `<option value="">${placeholder || "— Car Make —"}</option>`;
  Object.keys(MAKES_MODELS).sort().forEach(make => {
    const opt = document.createElement("option");
    opt.value = make;
    opt.textContent = make;
    el.appendChild(opt);
  });
}

function populateModelSelect(el, make, placeholder) {
  el.innerHTML = `<option value="">${placeholder || "— Car Model —"}</option>`;
  if (!make || !MAKES_MODELS[make]) return;
  MAKES_MODELS[make].forEach(model => {
    const opt = document.createElement("option");
    opt.value = model;
    opt.textContent = model;
    el.appendChild(opt);
  });
}

function populatePartSelect(el, placeholder) {
  el.innerHTML = `<option value="">${placeholder || "— Part Type —"}</option>`;
  Object.entries(PARTS_BY_CATEGORY).forEach(([cat, parts]) => {
    const group = document.createElement("optgroup");
    group.label = cat;
    parts.forEach(part => {
      const opt = document.createElement("option");
      opt.value = part;
      opt.textContent = part;
      group.appendChild(opt);
    });
    el.appendChild(group);
  });
}

function populateQuickPartSelect(el, placeholder) {
  el.innerHTML = `<option value="">${placeholder || "— Part Type —"}</option>`;
  Object.entries(QUICK_PARTS).forEach(([cat, parts]) => {
    const group = document.createElement("optgroup");
    group.label = cat;
    parts.forEach(part => {
      const opt = document.createElement("option");
      opt.value = part;
      opt.textContent = part;
      group.appendChild(opt);
    });
    el.appendChild(group);
  });
}

function populateYearSelect(el, placeholder, ascending) {
  el.innerHTML = `<option value="">${placeholder || "— Year —"}</option>`;
  const years = [];
  for (let y = 2025; y >= 1985; y--) years.push(y);
  if (ascending) years.reverse();
  years.forEach(y => {
    const opt = document.createElement("option");
    opt.value = y;
    opt.textContent = y;
    el.appendChild(opt);
  });
}
