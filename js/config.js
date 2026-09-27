/**
 * AIS INDUSTRIAL TRAINING INSTITUTE - BRAND CONFIGURATION SYSTEM
 * Central configuration file for institution identity, contact details, sessions, and statistics.
 * 
 * TO CUSTOMIZE FOR A REAL INSTITUTE CLIENT:
 * Simply edit the values in this object. All pages read and dynamically bind this information.
 */

const instituteConfig = {
  // Brand Identity
  name: "AIS Industrial Training Institute",
  shortName: "AIS ITI",
  tagline: "Learn Skills. Build Your Career.",
  established: "2012",
  affiliation: "Affiliation / Regulatory Registration (Configurable Demo)",
  instituteCode: "AIS-ITI-IND-2026",
  
  // Admission Status
  admissionStatus: "Admissions Open",
  session: "2026–27",
  admissionBadge: "Enquiries Open for 2026–27 Session",
  
  // Contact Channels
  phone: "+91 98765 43210",
  phoneRaw: "+919876543210",
  whatsapp: "+91 98765 43210",
  whatsappRaw: "919876543210",
  whatsappMessage: "Hello AIS ITI Admission Cell, I would like to enquire about trade admissions for 2026–27.",
  email: "admissions@example.com",
  officeEmail: "info@example.com",
  
  // Location & Office Hours
  address: "Plot No. 42, Industrial Training Zone, Phase-1, Knowledge & Technical Hub, India",
  landmark: "Near Industrial Development Area, Main Highway",
  officeHours: "Monday – Saturday: 08:30 AM – 04:30 PM (Sunday Closed)",
  googleMapsUrl: "https://maps.google.com/?q=Industrial+Training+Institute",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112061.09262729994!2d77.2089851!3d28.6324294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b0451733%3A0x6b8764032d847c23!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",

  // Social Links
  social: {
    instagram: "https://instagram.com/example",
    facebook: "https://facebook.com/example",
    youtube: "https://youtube.com/example",
    linkedin: "https://linkedin.com/example"
  },

  // Key Statistics (Animated Counters)
  // NOTE: Demo values. Real institutions replace with exact audited figures.
  stats: [
    { id: "stat-years", label: "Years of Training", value: 14, suffix: "+", detail: "Serving vocational education since 2012" },
    { id: "stat-students", label: "Students Trained", value: 4500, suffix: "+", detail: "Practical vocational learners graduated" },
    { id: "stat-trades", label: "Training Trades", value: 8, suffix: "", detail: "Core industrial & computer trades" },
    { id: "stat-workshops", label: "Workshops & Labs", value: 12, suffix: "+", detail: "Fully equipped technical training bays" }
  ],

  // Ethical Transparency Statement
  disclaimer: "AIS ITI is a demonstration institute brand for this website template. Trade details, curricula, faculty, and workshops follow standard Indian vocational frameworks. Real institutes should replace demo content with statutory certifications, actual affiliation numbers, and verified placement pathways."
};

// Make available globally
window.instituteConfig = instituteConfig;
