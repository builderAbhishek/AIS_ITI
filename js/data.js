/**
 * AIS INDUSTRIAL TRAINING INSTITUTE - CENTRAL DEMO DATA STORE
 * Contains all structured data for trades, faculty, workshops, facilities,
 * student projects, achievements, news/notices, testimonials, FAQs, and career pathways.
 * 
 * NOTE: All data is demo/sample content designed for instant replacement by the institute client.
 */

const instituteData = {
  // 1. TRADES DIRECTORY
  trades: [
    {
      id: "electrician",
      name: "Electrician",
      code: "ELE-01",
      category: "Electrical",
      type: "Engineering Trade",
      duration: "2 Years (4 Semesters)",
      eligibility: "10th Pass with Science & Mathematics",
      level: "NSQF Level 4/5",
      badge: "High Demand",
      icon: "zap",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80",
      overview: "Comprehensive technical training in residential, commercial, and industrial electrical installations, motor controls, transformer servicing, domestic appliance maintenance, and industrial wiring compliant with Indian Electricity Rules.",
      practicalFocus: "House & industrial wiring, panel building, single & 3-phase motor rewindings, alternator testing, solar inverter setup, and electrical troubleshooting.",
      skillsLearned: [
        "Single-phase and three-phase wiring installations",
        "DC and AC motors maintenance, windings and speed control",
        "Panel board wiring, relays, contactors and circuit breakers",
        "Earthing techniques (pipe, plate, chemical earthing)",
        "Transformer testing and power distribution maintenance",
        "Solar PV panel installation and inverter synchronization"
      ],
      toolsEquipment: [
        "Multimeters, Clamp Meters & Insulation Resistance Meggers",
        "Motor-Generator (MG) sets & Transformer test benches",
        "Conduit bending machines & wire stripping jigs",
        "Oscilloscopes and power factor meters",
        "Soldering stations & crimping tools"
      ],
      subjects: [
        "Trade Theory (Electrical Principles & Circuits)",
        "Trade Practical (Workshop Installations)",
        "Engineering Drawing",
        "Workshop Calculation & Science",
        "Employability Skills (Digital literacy, English communication, safety)"
      ],
      careerOpportunities: [
        "Industrial Electrician & Maintenance Technician",
        "Substation & Power Plant Operator",
        "Panel Wiring & Control Assembly Technician",
        "Electrical Contractor (Licensed Wireman)",
        "Railway / Metro Rail Assistant Technician (Subject to exam)"
      ],
      furtherEducation: "Eligible for 2nd Year Lateral Entry to Diploma in Electrical Engineering (Polytechnic) or Craft Instructor Training Scheme (CITS).",
      faqs: [
        { q: "Can I get an Electrical Contractor license after this course?", a: "Yes, ITI Electrician graduates can apply for a Wireman / Electrical Supervisor license through State Electrical Inspectorate Boards subject to statutory apprenticeship and field experience requirements." },
        { q: "Is mathematics compulsory in 10th?", a: "Yes, candidates must have passed 10th standard with Science and Mathematics from a recognized board." }
      ]
    },
    {
      id: "fitter",
      name: "Fitter",
      code: "FIT-02",
      category: "Mechanical",
      type: "Engineering Trade",
      duration: "2 Years (4 Semesters)",
      eligibility: "10th Pass with Science & Mathematics",
      level: "NSQF Level 4/5",
      badge: "Core Engineering",
      icon: "wrench",
      image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=900&q=80",
      overview: "Foundational mechanical trade focusing on precision assembly, bench work, fitting, machine installation, lathe operation, drilling, pipe fitting, and preventative maintenance in manufacturing plants.",
      practicalFocus: "Bench work, precision filing, scraping, drilling, reaming, screw thread cutting, lathe work, hydraulic/pneumatic circuit assembly, and precision measurement.",
      skillsLearned: [
        "Precision measurement using vernier calipers, micrometers and dial indicators",
        "Bench fitting, filing, chipping, scraping and saw cutting",
        "Center lathe machine turning, knurling and threading",
        "Assembly and alignment of mechanical drive units and bearings",
        "Pneumatic and hydraulic valve servicing and hose fitting",
        "Preventive maintenance of industrial production machinery"
      ],
      toolsEquipment: [
        "Precision Bench Vices & Surface Plates",
        "Center Lathes & Geared Drilling Machines",
        "Vernier Height Gauges, Outside/Inside Micrometers",
        "Pneumatic & Hydraulic Training Test Rigs",
        "Power Hacksaw & Off-hand Grinders"
      ],
      subjects: [
        "Trade Theory (Mechanical Systems & Metallurgy)",
        "Trade Practical (Bench Work & Precision Machining)",
        "Engineering Drawing (Blueprints & Orthographic Projections)",
        "Workshop Calculation & Science (Tolerances, Speeds, Feeds)",
        "Employability Skills"
      ],
      careerOpportunities: [
        "Machine Assembly & Alignment Fitter",
        "Plant Maintenance & Overhauling Technician",
        "CNC / Lathe Machine Operator",
        "Tool Room Assistant & Quality Inspector",
        "Automotive & Heavy Machinery Assembly Worker"
      ],
      furtherEducation: "Eligible for Lateral Entry into 2nd year Diploma in Mechanical Engineering or specialized CNC machining certifications.",
      faqs: [
        { q: "What is the difference between Fitter and Machinist?", a: "A Fitter specializes in precision hand assembly, bench work, and maintenance of complete machines, while a Machinist focuses primarily on running cutting machines like milling, shaper, and lathes." }
      ]
    },
    {
      id: "welder",
      name: "Welder (Gas & Electric)",
      code: "WLD-03",
      category: "Mechanical",
      type: "Engineering Trade",
      duration: "1 Year (2 Semesters)",
      eligibility: "8th or 10th Pass (Trade Specific)",
      level: "NSQF Level 3/4",
      badge: "Fast Track",
      icon: "flame",
      image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80",
      overview: "Intensive 1-year trade covering Shielded Metal Arc Welding (SMAW), Gas Metal Arc Welding (MIG/MAG), Gas Tungsten Arc Welding (TIG), and Oxy-Acetylene gas cutting and brazing.",
      practicalFocus: "Arc welding in flat, horizontal, vertical and overhead positions, TIG welding on stainless steel/aluminum, pipe joint welding, and non-destructive testing checks.",
      skillsLearned: [
        "Manual Metal Arc Welding (MMAW / SMAW)",
        "TIG (GTAW) welding for stainless steel and thin gauge sheets",
        "MIG/MAG (GMAW) semi-automatic welding",
        "Oxy-Acetylene gas cutting, edge preparation and beveling",
        "Weld defect identification and visual inspection criteria",
        "Workshop industrial safety protocols and PPE compliance"
      ],
      toolsEquipment: [
        "Inverter-based DC Arc & TIG Welding Units",
        "MIG/MAG Welding Sets with CO2/Argon shielding regulators",
        "Oxy-Acetylene Gas Cylinders & High-pressure Cutting Torches",
        "Weld Testing Benches & Dye Penetrant Test Kits",
        "Auto-darkening Helmets & Air Extraction Ventilation"
      ],
      subjects: [
        "Welder Trade Theory & Metallurgy",
        "Welder Trade Practical (All Positions & Processes)",
        "Engineering Drawing Basics",
        "Workshop Calculation & Science",
        "Employability Skills & Industrial Safety"
      ],
      careerOpportunities: [
        "Certified Structural & Pipeline Welder",
        "Fabrication Workshop Specialist",
        "Shipbuilding & Rail Coach Fabrication Technician",
        "Oil & Gas Pipeline Maintenance Welder (with IBR/qualification)",
        "Self-Employed Welding & Fabrication Business Owner"
      ],
      furtherEducation: "Eligible for CITS, specialized IBR High-Pressure Boiler Welding certifications, and underwater or robotic welding training.",
      faqs: [
        { q: "Is 8th pass eligible for Welder?", a: "Under standard guidelines, Welder is often available to candidates who have passed 8th or 10th standard depending on the state intake notification." }
      ]
    },
    {
      id: "copa",
      name: "Computer Operator & Programming Assistant (COPA)",
      code: "COP-04",
      category: "Computer",
      type: "Non-Engineering Trade",
      duration: "1 Year (2 Semesters)",
      eligibility: "10th Pass (Any Stream)",
      level: "NSQF Level 3/4",
      badge: "Digital Skills",
      icon: "laptop",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80",
      overview: "Modern digital workforce trade covering computer hardware basics, operating systems (Windows & Linux), office productivity suites, database management with MySQL, HTML/CSS/JavaScript web fundamentals, and cybersecurity safety.",
      practicalFocus: "Hands-on PC assembly/troubleshooting, advanced spreadsheet data management, database SQL queries, accounting software (Tally / ERP basics), and web page authoring.",
      skillsLearned: [
        "Computer hardware components, BIOS setup, OS installation",
        "Office productivity (spreadsheets, macros, documentation, presentations)",
        "Database concepts, SQL queries and data management",
        "Web development essentials (HTML5, CSS3, JavaScript basics)",
        "Computer networking, IP configuration, router setup",
        "Accounting software fundamentals (Tally / Financial accounting)"
      ],
      toolsEquipment: [
        "High-Speed Networked Core-i5 Computer Lab",
        "Gigabit Switches & Structured Cat6 Cabling Benches",
        "Linux & Windows Dual-Boot Workstations",
        "Printers, Scanners & Network Storage NAS",
        "Modern IDEs, LibreOffice/MS Office, MySQL Server"
      ],
      subjects: [
        "COPA Trade Theory (Computer Systems, Networking, Coding)",
        "COPA Trade Practical (Lab Exercises & Live Projects)",
        "Employability Skills (Professional Communication & Ethics)",
        "Digital Security & Cyber Law Basics"
      ],
      careerOpportunities: [
        "Computer Operator & Data Entry Executive",
        "Junior Technical Support & IT Helpdesk Assistant",
        "Office Automation & MIS Executive",
        "Front-Office Digital Coordinator",
        "Freelance Web Support / Digital Service Center (CSC) Operator"
      ],
      furtherEducation: "Eligible for BCA, Diploma in Computer Science / IT (Lateral), and specialized cloud / cybersecurity credentials.",
      faqs: [
        { q: "Do I need prior coding knowledge?", a: "No prior programming experience is required. The curriculum starts from basic computer operation and progresses step-by-step." }
      ]
    },
    {
      id: "mechanic-motor-vehicle",
      name: "Mechanic (Motor Vehicle)",
      code: "MMV-05",
      category: "Mechanical",
      type: "Engineering Trade",
      duration: "2 Years (4 Semesters)",
      eligibility: "10th Pass with Science & Mathematics",
      level: "NSQF Level 4/5",
      badge: "Automotive",
      icon: "car",
      image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=900&q=80",
      overview: "Comprehensive automotive engineering trade covering internal combustion engines, multi-cylinder petrol and diesel engine overhaul, transmission systems, automotive electricals, OBD-II vehicle diagnostics, and introductory EV / Hybrid vehicle systems.",
      practicalFocus: "Engine disassembly/assembly, brake and steering system servicing, clutch overhaul, fuel injection calibration, OBD scanner diagnostics, and battery management.",
      skillsLearned: [
        "Four-stroke petrol and diesel engine dismantling and tuning",
        "Transmission, gearbox, differential, and propeller shaft servicing",
        "Hydraulic and ABS brake system diagnosis and bleeding",
        "Automotive electrical wiring, starter motors, alternators, sensors",
        "Electronic Fuel Injection (CRDi) and ECU diagnostic scanning",
        "Vehicle wheel alignment, balancing, and tyre servicing"
      ],
      toolsEquipment: [
        "Cut-section 4-Cylinder Petrol & Diesel Engine Models",
        "Working Light Commercial Vehicle Chassis & Test Car",
        "OBD-II Multi-Brand Diagnostic Computer Scanner",
        "Hydraulic Vehicle Two-Post Hoist & Jacks",
        "Fuel Injector Testing & Calibration Bench"
      ],
      subjects: [
        "Trade Theory (Automobile Engineering Systems)",
        "Trade Practical (Vehicle Workshop Maintenance)",
        "Engineering Drawing",
        "Workshop Calculation & Science",
        "Employability Skills"
      ],
      careerOpportunities: [
        "Automotive Service Technician / Service Advisor",
        "Authorized Dealership Diagnostic Technician",
        "Fleet Maintenance Supervisor",
        "Engine Overhaul Specialist",
        "Independent Multi-Brand Auto Workshop Entrepreneur"
      ],
      furtherEducation: "Eligible for Lateral Entry to Diploma in Automobile / Mechanical Engineering.",
      faqs: [
        { q: "Do we learn about Electric Vehicles (EV)?", a: "Modern updated syllabi include introductory modules on Electric Vehicle safety, battery packs, and electric motor drive principles." }
      ]
    },
    {
      id: "electronics-mechanic",
      name: "Electronics Mechanic",
      code: "ELM-06",
      category: "Electronics",
      type: "Engineering Trade",
      duration: "2 Years (4 Semesters)",
      eligibility: "10th Pass with Science & Mathematics",
      level: "NSQF Level 4/5",
      badge: "Emerging Tech",
      icon: "cpu",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
      overview: "Advanced vocational training in active and passive electronic components, SMD soldering, analog & digital circuits, microcontrollers, LED TV and display repairs, SMPS power supplies, and communication electronics.",
      practicalFocus: "SMD rework, PCB testing, waveform analysis on digital storage oscilloscopes (DSO), Arduino/microcontroller programming, and electronic consumer goods troubleshooting.",
      skillsLearned: [
        "Passive and active component testing (semiconductors, ICs, sensors)",
        "Soldering, desoldering, and Surface Mount Device (SMD) rework",
        "Microcontroller interfacing and sensor circuit design",
        "Switched-Mode Power Supply (SMPS) and inverter repair",
        "Audio/video systems, CCTV surveillance, and optic fiber testing",
        "Digital logic gates, timers, and operational amplifiers"
      ],
      toolsEquipment: [
        "Digital Storage Oscilloscopes (DSO) & Function Generators",
        "SMD Hot-Air Rework Stations & Temperature Controlled Irons",
        "Dual Power Supplies, LCR Meters & Logic Analyzers",
        "Microcontroller Development Boards (8051, AVR, Arduino)",
        "CCTV & Fiber-Optic Splicing Demonstration Kits"
      ],
      subjects: [
        "Trade Theory (Electronic Devices, Digital Circuits, Telecom)",
        "Trade Practical (PCB Work, Testing & Repair)",
        "Engineering Drawing",
        "Workshop Calculation & Science",
        "Employability Skills"
      ],
      careerOpportunities: [
        "Consumer Electronics Repair Technician",
        "Telecom & CCTV Installation Technician",
        "Hardware Test & Assembly Operator in Electronics Manufacturing",
        "Medical Equipment Maintenance Assistant",
        "Solar Inverter & UPS Service Engineer"
      ],
      furtherEducation: "Direct eligibility for Lateral Entry into 2nd year Diploma in Electronics & Communication Engineering (ECE).",
      faqs: [
        { q: "Is PCB repair included?", a: "Yes, students spend significant workshop hours practicing SMD soldering, desoldering, and tracing schematic diagrams on real PCBs." }
      ]
    },
    {
      id: "draughtsman-civil",
      name: "Draughtsman (Civil)",
      code: "DMC-07",
      category: "Construction",
      type: "Engineering Trade",
      duration: "2 Years (4 Semesters)",
      eligibility: "10th Pass with Science & Mathematics",
      level: "NSQF Level 4/5",
      badge: "Architecture & CAD",
      icon: "compass",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
      overview: "Engineering drafting trade combining traditional building drawing principles with 2D & 3D computer-aided design (AutoCAD, Revit basics), total station surveying, structural details, and municipal building plan preparation.",
      practicalFocus: "Architectural blueprints, reinforcement detailing, topographical surveying with Total Station and digital levels, 3D elevation models, and project estimation.",
      skillsLearned: [
        "Building drawing standards, plans, elevations, and sections",
        "2D drafting and 3D modeling using industry-standard CAD software",
        "Land surveying with Chain, Compass, Theodolite, and Total Station",
        "RCC structural detailing and steel fabrication drawings",
        "Road, bridge, and drainage infrastructure drafting",
        "Quantity surveying, rate analysis, and material estimation"
      ],
      toolsEquipment: [
        "CAD Workstation Lab with High-Res Displays",
        "Digital Total Station & Electronic Distance Meters (EDM)",
        "Auto Levels, Theodolites, Prisms and Leveling Staffs",
        "Large Format Architectural Plotter & Scanner",
        "Standard Drawing Boards & Drafting Instruments"
      ],
      subjects: [
        "Trade Theory (Civil Construction & Surveying)",
        "Trade Practical (CAD Drafting & Field Surveying)",
        "Engineering Drawing",
        "Workshop Calculation & Science",
        "Employability Skills"
      ],
      careerOpportunities: [
        "Civil CAD Draughtsman in Architectural / Engineering Firms",
        "Site Surveyor & Levelling Technician",
        "Municipal Approval Drawing Assistant",
        "Structural Detailing Draftsman",
        "Independent Estimation & Freelance CAD Specialist"
      ],
      furtherEducation: "Lateral Entry to Diploma in Civil Engineering (Polytechnic) or B.Voc in Construction Technology.",
      faqs: [
        { q: "Do we learn computer drafting or only paper drawing?", a: "Both! Students master manual engineering drawing fundamentals first, then spend the majority of the program working on industry CAD software." }
      ]
    },
    {
      id: "plumber",
      name: "Plumber",
      code: "PLM-08",
      category: "Construction",
      type: "Engineering Trade",
      duration: "1 Year (2 Semesters)",
      eligibility: "8th or 10th Pass",
      level: "NSQF Level 3/4",
      badge: "Essential Service",
      icon: "droplet",
      image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=900&q=80",
      overview: "Practical plumbing trade covering water supply networks, drainage and sanitary piping, solar water heater connections, pump installations, rainwater harvesting systems, and pipe thread jointing.",
      practicalFocus: "CPVC, UPVC, PPR and GI pipe fitting, sanitary fixture installations, booster pump alignment, drainage testing, leak detection, and plumbing system maintenance.",
      skillsLearned: [
        "Pipe threading, cutting, solvent welding, and fusion welding",
        "Domestic and commercial sanitary fixture installation",
        "Hot and cold water pipeline layout design and pressure testing",
        "Submersible and monoblock pump installation and servicing",
        "Drainage traps, manholes, and septic tank connection standards",
        "Fire-fighting wet riser pipeline layout basics"
      ],
      toolsEquipment: [
        "Pipe Threading Machines & Manual Die Sets",
        "PPR Hot-Melt Fusion Welding Machines",
        "Hydraulic Pressure Testing Hand Pumps",
        "Pipe Cutters, Bending Springs & Chain Vices",
        "Drain Inspection Cameras & Ultrasonic Leak Detectors"
      ],
      subjects: [
        "Plumbing Trade Theory & Hydraulics Basics",
        "Plumbing Trade Practical (Pipe Bay Installations)",
        "Engineering Drawing Basics",
        "Workshop Calculation & Science",
        "Employability Skills"
      ],
      careerOpportunities: [
        "Plumbing Technician in Construction & High-Rise Projects",
        "Maintenance Plumber in Hospitals, Hotels, and Commercial Complexes",
        "Public Health Engineering (PHE) Contractor Assistant",
        "Sanitary Ware & Pump Installation Technician",
        "Independent Plumbing Contractor / Service Business"
      ],
      furtherEducation: "Eligible for specialized Building Services piping, Advanced Fire Fighting Piping certifications, and CITS training.",
      faqs: [
        { q: "Is plumbing high earning?", a: "With modern multi-story residential and commercial towers, trained plumbers with knowledge of modern PPR/CPVC systems and pump setups are in high demand and frequently start self-employment." }
      ]
    }
  ],

  // 2. WORKSHOPS & LABS
  workshops: [
    {
      id: "ws-electrician",
      name: "Electrical Machine & Wiring Workshop",
      trade: "Electrician",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      description: "Dedicated practical bay equipped with industrial wiring test booths, AC/DC machine test benches, transformer testing sets, and earth electrode installation simulators.",
      equipment: ["Motor-Generator Set", "3-Phase Induction Motors", "Megger & Earth Testers", "Distribution Panel Simulator"],
      capacity: "24 Students per batch",
      safetyFeatures: "Isolated safety circuit breakers, rubber insulation mats, CO2 fire extinguishers, emergency stop switches."
    },
    {
      id: "ws-fitting",
      name: "Mechanical Fitting & Machine Bay",
      trade: "Fitter",
      image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
      description: "Precision workshop with 30 heavy-duty bench vices, granite surface plates, precision height gauges, geared drilling machines, and center lathes for metal fabrication.",
      equipment: ["Precision Bench Vices", "Center Lathe Machines", "Radial Drill Press", "Surface Roughness Gauge"],
      capacity: "24 Students per batch",
      safetyFeatures: "Safety goggles mandatory, protective leather aprons, chip guards on rotating machines."
    },
    {
      id: "ws-welding",
      name: "Welding & Fabrication Workshop",
      trade: "Welder",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      description: "Dedicated welding booths featuring inverter-based ARC, TIG, and MIG/MAG welding setups, motorized oxy-acetylene cutting tables, and ventilation hoods.",
      equipment: ["Inverter MMAW & TIG Sets", "MIG/MAG Welding Stations", "Gas Cutting Torches", "Dye Penetrant Testing Rig"],
      capacity: "20 Students per batch",
      safetyFeatures: "Fume exhaust blowers, leather welding aprons, auto-darkening hoods, flashback arrestors on gas lines."
    },
    {
      id: "ws-copa",
      name: "Computer & Programming Lab",
      trade: "COPA",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      description: "Air-conditioned 30-workstation digital lab with Gigabit local area network, high-speed fiber internet, multi-OS development systems, and network rack simulators.",
      equipment: ["Intel Core-i5 Desktop PCs", "Gigabit Managed Switches", "Network Patch Panels", "Laser Jet & Scanner Benches"],
      capacity: "30 Students per batch",
      safetyFeatures: "Online UPS backup, surge suppression, fire alarm sensors."
    },
    {
      id: "ws-automotive",
      name: "Automotive Engine & Chassis Bay",
      trade: "Mechanic Motor Vehicle",
      image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
      description: "Spacious automotive facility with light motor vehicle lifts, live multi-cylinder cut engines, computerized OBD-II scan tools, and brake testing stations.",
      equipment: ["2-Post Hydraulic Vehicle Hoist", "CRDi Diesel Engine Test Rig", "OBD-II Multi-Brand Scanner", "Wheel Balancer"],
      capacity: "20 Students per batch",
      safetyFeatures: "Exhaust gas evacuation hoses, oil spill containment trays, non-slip epoxy flooring."
    },
    {
      id: "ws-electronics",
      name: "Electronics & Microcontroller Lab",
      trade: "Electronics Mechanic",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      description: "Static-safe electronics workshop equipped with dual-channel DSOs, function generators, temperature-controlled SMD soldering stations, and TV/display test benches.",
      equipment: ["Digital Storage Oscilloscopes (DSO)", "SMD Rework Stations", "Arduino & 8051 Kits", "Variable DC Power Supplies"],
      capacity: "20 Students per batch",
      safetyFeatures: "Anti-static ESD wrist straps, ESD dissipative workbenches, low-voltage isolation transformers."
    }
  ],

  // 3. CAMPUS FACILITIES
  facilities: [
    {
      id: "fac-workshops",
      title: "Industry-Standard Practical Workshops",
      icon: "wrench",
      image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
      description: "Individual, purpose-built workshop spaces for every trade with full power backup, tool cribs, and dedicated practical instructor bays."
    },
    {
      id: "fac-computer-lab",
      title: "Hi-Tech Computer & Digital Lab",
      icon: "monitor",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      description: "High-speed networked computer terminals for CAD training, COPA practicals, online trade examinations, and digital employability skills."
    },
    {
      id: "fac-library",
      title: "Technical Library & Reading Room",
      icon: "book-open",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
      description: "Collection of Bharat Skills books, NIMI curriculum modules, engineering handbooks, journals, and quiet reading desks for students."
    },
    {
      id: "fac-classrooms",
      title: "Smart AV-Equipped Classrooms",
      icon: "users",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
      description: "Spacious, well-ventilated lecture rooms equipped with digital projection systems for visual technical demonstrations and engineering drawing."
    },
    {
      id: "fac-safety",
      title: "Industrial Safety & First Aid Center",
      icon: "shield-check",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      description: "Comprehensive safety protocols with trained first-aid officers, mandatory PPE enforcement, eyewash stations, and fire-fighting equipment."
    },
    {
      id: "fac-power",
      title: "Dedicated Generator & Solar Power",
      icon: "battery-charging",
      image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80",
      description: "Uninterrupted 3-phase industrial power supply supported by on-site diesel generators and solar rooftop installation for workshop machinery."
    },
    {
      id: "fac-water",
      title: "RO Drinking Water & Sanitation",
      icon: "droplets",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      description: "Multiple chilled RO drinking water dispensers and clean, hygienic washroom facilities separately maintained for boys and girls."
    },
    {
      id: "fac-sports",
      title: "Sports Ground & Recreation Area",
      icon: "activity",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
      description: "Outdoor sports grounds for volleyball, badminton, cricket practice, and recreational space for annual sports and youth events."
    }
  ],

  // 4. FACULTY & INSTRUCTORS (Demo Data)
  faculty: [
    {
      id: "fac-1",
      name: "Er. Rajesh Verma",
      designation: "Principal / Head of Training",
      qualification: "B.Tech (Mechanical Engineering), CITS Certified",
      department: "Administration & Technical Leadership",
      experience: "16+ Years in Vocational & Engineering Training",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      bio: "Leads academic governance, workshop quality standards, and industry alignment initiatives across all trade curricula."
    },
    {
      id: "fac-2",
      name: "Mr. Suresh Sharma",
      designation: "Senior Instructor — Electrical",
      qualification: "Diploma in Electrical Engg., CITS (NSTI Mumbai)",
      department: "Electrician Trade",
      experience: "12 Years in Industrial Wiring & Transformer Substation Training",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      bio: "Expert in motor rewinding, industrial control panels, and electrical safety compliance."
    },
    {
      id: "fac-3",
      name: "Mr. Manoj Kumar",
      designation: "Workshop Instructor — Fitter",
      qualification: "Diploma in Mechanical Engineering, CITS Certified",
      department: "Fitter Trade",
      experience: "10 Years in Precision Machining & Assembly",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      bio: "Specializes in bench fitting, precision lathe operations, and hydraulic systems maintenance."
    },
    {
      id: "fac-4",
      name: "Mr. Arvind Singh",
      designation: "Instructor — Welding Technology",
      qualification: "ITI Welder, Certified TIG/MIG Welder, CITS (NSTI Kanpur)",
      department: "Welder Trade",
      experience: "9 Years in Structural & Pipe Welding",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
      bio: "Hands-on specialist training students in multi-position SMAW, TIG, and MIG welding."
    },
    {
      id: "fac-5",
      name: "Ms. Priya Sharma",
      designation: "Instructor — COPA & Digital Skills",
      qualification: "MCA, B.Sc (Computer Science), CITS Certified",
      department: "Computer Operator & Programming Assistant",
      experience: "7 Years in Software Development & IT Training",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      bio: "Trains students in modern web fundamentals, SQL databases, office automation, and cyber security hygiene."
    },
    {
      id: "fac-6",
      name: "Mr. Deepak Yadav",
      designation: "Instructor — Automotive Mechanics",
      qualification: "Diploma in Automobile Engineering, CITS Certified",
      department: "Mechanic Motor Vehicle",
      experience: "11 Years in Dealership Service Management & Diagnostics",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
      bio: "Passionate about ECU diagnostics, CRDi fuel systems, and modern automotive mechanics."
    }
  ],

  // 5. STUDENT PROJECTS (Sample / Demo showcase)
  projects: [
    {
      id: "proj-1",
      title: "Automatic Solar Street Light & Battery Management",
      trade: "Electrician",
      badge: "Renewable Energy",
      problem: "Inefficient rural lighting with high electricity consumption and manual switching delays.",
      solution: "Built a fully functional prototype using LDR sensors, solar charge controllers, 12V LiFePO4 batteries, and automated dusk-to-dawn switching circuitry.",
      skills: ["Circuit design", "Sensor integration", "Battery testing", "Solar PV synchronization"],
      image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "proj-2",
      title: "Pedal-Operated Sheet Metal Shear & Punch Machine",
      trade: "Fitter",
      badge: "Workshop Tooling",
      problem: "Small workshops often struggle with high electricity costs for basic sheet cutting.",
      solution: "Designed and fabricated a mechanical pedal linkage system with high-carbon tool steel blades capable of cutting up to 1.5mm mild steel sheets with zero power consumption.",
      skills: ["Bench fitting", "Lathe turning", "Mechanical linkage design", "Heat treatment testing"],
      image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "proj-3",
      title: "Ergonomic Multi-Position Welding Worktable",
      trade: "Welder",
      badge: "Workshop Utility",
      problem: "Welding irregular pipe joints in restricted postures causes fatigue and poor weld bead quality.",
      solution: "Fabricated a 360-degree rotating and height-adjustable welding positioner jig using reclaimed industrial pipe and worm-gear reduction.",
      skills: ["TIG/MIG welding", "Gas cutting", "Weld bead inspection", "Structural fabrication"],
      image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "proj-4",
      title: "Offline Local Examination & Quiz Portal Prototype",
      trade: "COPA",
      badge: "Software Prototype",
      problem: "Computer lab mock tests need a lightweight intranet test interface that works without active internet.",
      solution: "Developed an intranet HTML/JavaScript/PHP database application to run mock Bharat Skills trade tests across lab workstations.",
      skills: ["HTML5 / CSS3", "JavaScript UI", "MySQL database queries", "Local Apache hosting"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
    }
  ],

  // 6. ACHIEVEMENTS & RECOGNITION (Demo Data)
  achievements: [
    {
      id: "ach-1",
      category: "Technical",
      year: "2025",
      title: "1st Place — Regional Skill Exhibition",
      description: "Institute students bagged 1st prize in the Regional Vocational Skills Exhibition for their Automatic Solar Street Light innovation prototype.",
      badge: "Regional Honor"
    },
    {
      id: "ach-2",
      category: "Academic",
      year: "2025",
      title: "Exemplary All-India Trade Test (AITT) Results",
      description: "Over 94% of our enrolled trainees successfully cleared their All India Trade Tests with first-class practical workshop ratings.",
      badge: "Academic Excellence"
    },
    {
      id: "ach-3",
      category: "Apprenticeship",
      year: "2024",
      title: "High National Apprenticeship Engagement",
      description: "Over 180+ graduating trainees successfully registered and secured apprenticeship contracts through the National Apprenticeship Promotion Scheme (NAPS) portal.",
      badge: "Industry Transition"
    },
    {
      id: "ach-4",
      category: "Sports",
      year: "2024",
      title: "Inter-Institute Volleyball Championship Trophy",
      description: "AIS ITI sports team secured the winning trophy at the District Inter-Vocational Youth Sports Meet.",
      badge: "Sports & Fitness"
    }
  ],

  // 7. NEWS & NOTICES
  notices: [
    {
      id: "not-1",
      category: "Admission",
      date: "May 15, 2026",
      title: "Admission Open for Session 2026–27 (Phase 1 Enquiries)",
      summary: "Online enquiries and walk-in counseling are now open for Electrician, Fitter, Welder, COPA, and Motor Mechanic trades.",
      isNew: true,
      link: "admissions.html"
    },
    {
      id: "not-2",
      category: "Academic",
      date: "May 02, 2026",
      title: "AITT Annual Practical Examination Schedule Announced",
      summary: "Trainees are instructed to verify hall tickets and review tool crib inspection guidelines for upcoming trade practical assessments.",
      isNew: true,
      link: "notices.html"
    },
    {
      id: "not-3",
      category: "Industry",
      date: "April 20, 2026",
      title: "Industrial Visit Conducted to Heavy Manufacturing Plant",
      summary: "Fitter and Electrician final-year trainees completed a 1-day guided technical exposure visit to an automated auto-components unit.",
      isNew: false,
      link: "student-life.html"
    },
    {
      id: "not-4",
      category: "Apprenticeship",
      date: "April 10, 2026",
      title: "NAPS Apprenticeship Awareness & Registration Workshop",
      summary: "Special counseling session held on completing National Apprenticeship Portal e-KYC and applying for designated apprenticeships.",
      isNew: false,
      link: "career.html"
    }
  ],

  // 8. TESTIMONIALS (Clearly Marked Demo / Sample Testimonials)
  testimonials: [
    {
      id: "test-1",
      name: "Rahul Sharma (Sample Trainee Profile)",
      role: "Electrician Trade Alumnus",
      quote: "The practical workshops gave me real confidence. Instead of just reading diagrams, we actually wired distribution panels and tested motors. It helped me clear my apprenticeship interview effortlessly.",
      type: "Student",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "test-2",
      name: "Sunil Kumar (Sample Parent)",
      role: "Parent of 2024 Graduate",
      quote: "We were looking for skill-oriented education after my son finished 10th. The structured trade curriculum and disciplined workshop environment provided clear career direction.",
      type: "Parent",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "test-3",
      name: "Amit Patel (Sample Alumnus Profile)",
      role: "Fitter Alumnus (Now Maintenance Tech)",
      quote: "Understanding vernier calipers, lathe operations, and machine alignment at AIS ITI created a solid base. I am now pursuing an evening polytechnic diploma while working.",
      type: "Alumni",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    }
  ],

  // 9. FAQS
  faqs: [
    {
      category: "General",
      q: "What is an ITI (Industrial Training Institute)?",
      a: "An Industrial Training Institute (ITI) is a post-secondary vocational training institute under the Directorate General of Training (DGT), Ministry of Skill Development and Entrepreneurship. ITIs focus on teaching hands-on engineering and non-engineering trade skills to prepare students for technical careers, industry apprenticeship, and entrepreneurship."
    },
    {
      category: "Admissions",
      q: "Who is eligible to apply for ITI courses?",
      a: "Eligibility depends on the specific trade. Most engineering trades like Electrician, Fitter, and Motor Mechanic require passing 10th standard with Science and Mathematics. Trades like Welder and Plumber may be open to 8th or 10th pass candidates. COPA is open to 10th pass candidates from any stream."
    },
    {
      category: "Duration",
      q: "How long is the training duration?",
      a: "Training duration ranges from 1 Year (e.g., Welder, Plumber, COPA) to 2 Years (e.g., Electrician, Fitter, Mechanic Motor Vehicle, Electronics Mechanic). Courses follow standard semester or annual assessment structures."
    },
    {
      category: "Admissions",
      q: "What documents are required during admission?",
      a: "Standard requirements include 10th/8th Marksheet & Certificate, Aadhaar Card, Passport-size photographs, School Leaving / Transfer Certificate (TC), Caste/Category Certificate (if applicable), and Domicile Certificate. Verify current state counseling requirements."
    },
    {
      category: "Career",
      q: "Does ITI guarantee a job?",
      a: "No ethical educational institution should promise 'guaranteed' jobs. ITI equips trainees with practical, industry-aligned technical skills. Career outcomes include National Apprenticeship (NAPS) placements, industrial technician roles, government technical exams, lateral polytechnic admission, and self-employment."
    },
    {
      category: "Career",
      q: "Can students pursue higher education after completing ITI?",
      a: "Yes! 2-Year ITI pass-outs can apply for Lateral Entry directly into the 2nd Year of a 3-Year Diploma in Engineering (Polytechnic) in relevant branches under AICTE / State Technical Board guidelines. They can also pursue CITS (Craft Instructor Training Scheme) to become certified ITI instructors."
    },
    {
      category: "Career",
      q: "What is an Apprenticeship (NAPS)?",
      a: "The National Apprenticeship Promotion Scheme (NAPS) enables ITI graduates to work as paid technical apprentices in public sector undertakings (PSUs), railways, automotive manufacturers, and private industries, earning a monthly stipend while obtaining a National Apprenticeship Certificate (NAC)."
    },
    {
      category: "General",
      q: "Can I visit the institute campus and workshops before applying?",
      a: "Yes! Prospective students and parents are encouraged to visit during working hours (Monday to Saturday, 08:30 AM to 04:30 PM) to inspect the workshops, tool cribs, and talk to trade instructors."
    }
  ],

  // 10. CAREER PATHWAYS
  careerPaths: [
    {
      id: "path-apprentice",
      title: "Apprenticeship (NAPS)",
      badge: "High Recommended Step",
      icon: "award",
      description: "Join registered public or private industrial units under the National Apprenticeship Promotion Scheme (NAPS) for 1–2 years of practical training with a monthly government/industry stipend.",
      outcomes: ["National Apprenticeship Certificate (NAC)", "On-the-job industrial experience", "Priority eligibility for various PSU/Railway technical recruitments"]
    },
    {
      id: "path-industry",
      title: "Industry Employment",
      badge: "Direct Entry",
      icon: "briefcase",
      description: "Direct entry into private sector manufacturing plants, automotive service centers, electrical maintenance contractors, fabrication yards, and construction projects as a junior technician.",
      outcomes: ["Technician / Machine Operator", "Maintenance Specialist", "Field Service Assistant", "Assembly Line Operator"]
    },
    {
      id: "path-polytechnic",
      title: "Polytechnic Diploma Lateral Entry",
      badge: "Higher Education",
      icon: "graduation-cap",
      description: "2-year ITI certificate holders can qualify for direct admission into the 2nd Year (3rd Semester) of a 3-year Diploma in Engineering in related branches across state technical boards.",
      outcomes: ["Junior Engineer (JE) qualification", "Pathway to B.Tech degree", "Supervisory & design roles"]
    },
    {
      id: "path-government",
      title: "Public Sector & Defense Technical Roles",
      badge: "Competitive Exams",
      icon: "shield",
      description: "Eligible to appear for designated technician Grade-III and apprentice exams in Indian Railways (RRB ALP / Technician), Metro Rail, DRDO, ISRO, Electricity Boards, and Ordinance Factories.",
      outcomes: ["Railway Assistant Loco Pilot / Technician", "Electricity Board Lineman / Substation Operator", "PSU Plant Operator"]
    },
    {
      id: "path-entrepreneur",
      title: "Self-Employment & Enterprise",
      badge: "Independence",
      icon: "trending-up",
      description: "Leverage trade competence to launch your own specialized workshop, electrical contracting firm, auto-care center, fabrication unit, or common service digital center (CSC).",
      outcomes: ["Licensed Electrical Contractor", "Welding & Fabrication Workshop Owner", "Automobile Service Station Owner", "Digital & CAD Service Center"]
    }
  ]
};

// Bind to window for vanilla JS accessibility across pages
window.instituteData = instituteData;
