# AIS Industrial Training Institute (AIS ITI) — Premium Website Template

> **"Learn Skills. Build Your Career."**
> A complete, production-ready, commercial-grade frontend website engineered specifically for Indian Industrial Training Institutes (ITIs), Skill Centers, and Vocational Technical Academies.

---

## 1. Project Overview

This website is a modern, high-conversion, public-facing portal designed to take prospective trainees, parents, and industrial employers through an authentic trust journey:

$$\text{DISCOVER} \longrightarrow \text{UNDERSTAND} \longrightarrow \text{TRUST} \longrightarrow \text{APPLY / ENQUIRE}$$

### What this website is for:
- **Prospective Candidates (8th / 10th / 12th pass):** Discover available trades, explore required qualifications, and understand daily practical workshop learning.
- **Parents & Guardians:** Understand career pathways (Apprenticeship NAPS, Lateral Entry to Polytechnic Diploma, and Self-Employment) without false or misleading promises.
- **Industrial Employers:** Inspect workshop machine bays, tool cribs, and student engineering prototypes.
- **Institutions:** Showcase disciplined training culture, certified craft instructors (CITS), and session admission processes.

> **IMPORTANT SCOPE NOTE:**  
> This is strictly a **PUBLIC FRONTEND WEBSITE**. It does **NOT** include an ERP, student/teacher login, attendance system, fee gateway, or database. Forms run client-side validation with pre-configured hooks for instant WhatsApp API, email, or backend CRM connection.

---

## 2. Key Features

- **Interactive Homepage Trade Finder:** Filter trades in real-time by interest (Electrical, Mechanical, Computer, Electronics, Construction), qualification (8th, 10th, 12th), and learning preference.
- **Dynamic Trade Details Engine (`trade.html`):** Loads complete trade curriculum, practical tools, syllabus, subjects, and FAQs dynamically from URL parameters (e.g. `trade.html?id=electrician`).
- **Complete Trade Directory (`trades.html`):** Instant search bar with multi-tag filtering by discipline, duration (1 vs 2 years), and eligibility.
- **Dedicated Workshops Showcase (`workshops.html`):** Machine bays for Electrical, Lathe Fitting, TIG/MIG Welding, Computer Lab, Motor Mechanics, and Electronics.
- **70/30 Training Model (`training.html`):** Explaining the pedagogy of 70% workshop execution + 30% technical theory, industrial safety (5S), and workplace communication.
- **Responsible Career Pathways (`career.html`):** Detailed breakdown of National Apprenticeship (NAPS), industry employment, polytechnic lateral entry, and government technician exams without unethical "job guarantee" claims.
- **Accessible Lightbox Gallery (`gallery.html`):** Category-filtered photo grid with full-screen keyboard-navigable modal lightbox.
- **Interactive FAQ Accordions (`faq.html`):** Clean, accessible accordion answers to all common parent and student questions.
- **Universal Admission Modal & Inline Forms:** Validated inputs with demo confirmation toasts and direct WhatsApp query generation.
- **Floating Contact Stack:** Fast 1-click WhatsApp chat, phone dialer, and scroll-to-top button.
- **Centralized Brand System (`js/config.js` & `js/data.js`):** Change institution name, contact details, trades, or faculty in **one single file** and have it update everywhere automatically.

---

## 3. Technology Stack

- **HTML5:** Semantic, accessible markup with Open Graph & SEO meta tags.
- **Tailwind CSS (CDN):** Responsive utility-first design customized with industrial blueprint palettes.
- **Vanilla JavaScript (ES6+):** Lightweight, modular scripts with zero complex build steps.
- **Google Fonts:** Space Grotesk (technical headings) & Inter (legible body).
- **Lucide Icons:** Modern vector iconography.
- **Swiper.js:** Lightweight carousel for testimonials.
- **No Heavy Frameworks:** Pure, fast, beginner-friendly frontend code.

---

## 4. Folder Structure

```
ais-iti/
│
├── index.html              # Conversion-focused homepage
├── about.html              # Institute heritage, vision, mission & timeline
├── trades.html             # Full trades directory with search & filters
├── trade.html              # Reusable dynamic trade detail template
├── training.html           # 70/30 practical training model & safety
├── workshops.html          # Workshops, machine bays & equipment
├── facilities.html         # Campus infrastructure, power, water & library
├── faculty.html            # CITS-certified craft instructors & leadership
├── student-life.html       # Projects, sports, industrial visits & celebrations
├── career.html             # NAPS, lateral polytechnic entry & opportunities
├── achievements.html       # Regional skill awards & academic records
├── admissions.html         # 5-step admission process & seat intake table
├── eligibility.html        # Documents checklist & age guidelines
├── notices.html            # Circulars, exam dates & academic calendar
├── gallery.html            # Responsive photo gallery with modal lightbox
├── faq.html                # Comprehensive categorized accordion FAQs
├── careers.html            # Public-facing staff & instructor job openings
├── contact.html            # Campus map, phone, WhatsApp & enquiry form
├── privacy.html            # Privacy policy & student data protection
├── terms.html              # Terms of website & ethical disclaimers
│
├── assets/
│   ├── favicon/
│   │   └── favicon.svg     # SVG vector favicon
│   ├── icons/
│   │   └── logo.svg        # Scalable brand vector logo
│   └── images/             # Local images folder (optional)
│
├── css/
│   └── custom.css          # Blueprint grids, scrollbar, toast & animations
│
├── js/
│   ├── config.js           # Central brand identity, phone, email & session
│   ├── data.js             # Central data: trades, faculty, workshops, FAQs
│   ├── components.js       # Shared header, navbar, footer & modal builder
│   ├── filters.js          # Trade finder, search, and category filter logic
│   ├── trade.js            # Dynamic trade.html query renderer
│   ├── gallery.js          # Photo filtering & accessible lightbox modal
│   ├── forms.js            # Form validation, demo submissions & toasts
│   └── main.js             # Mobile drawer, counters, accordions & swiper
│
├── robots.txt              # Search engine crawler instructions
├── sitemap.xml             # XML sitemap indexing all 20 pages
└── README.md               # Reseller & customization guide
```

---

## 5. How to Run Locally

You do not need Node.js, npm, or any build tools to run this website!

### Option A: Direct Browser Opening
Simply double-click `index.html` or drag it into any modern web browser (Google Chrome, Microsoft Edge, Firefox, Safari).

### Option B: Local Development Server (Recommended)
If using VS Code or Python for local preview:
- **VS Code:** Install the **Live Server** extension, right-click `index.html` and select **"Open with Live Server"**.
- **Python:** Run the following command in terminal inside the project directory:
  ```bash
  python -m http.server 8000
  ```
  Then visit `http://localhost:8000` in your browser.

---

## 6. How to Customize for a New Client

This template is engineered so that **95% of client customization happens inside just 2 files** without touching HTML page code:

### 6.1 Change Institute Name & Contact Details
Open `js/config.js` and edit the values:
```javascript
const instituteConfig = {
  name: "Apex Industrial Training Institute",
  shortName: "Apex ITI",
  tagline: "Skills That Build Nations.",
  phone: "+91 98765 43210",
  whatsapp: "+91 98765 43210",
  whatsappRaw: "919876543210",
  email: "admissions@apex-iti.com",
  address: "NH-24, Industrial Area, Sector 5, City, State",
  session: "2026–27",
  ...
};
```
*All headers, footers, phone dialers, and WhatsApp buttons will automatically update across all 20 pages.*

### 6.2 Change Logo
- Replace `assets/icons/logo.svg` or `assets/favicon/favicon.svg` with the client's SVG/PNG logo.
- If using a PNG, update the logo image path in `js/components.js`.

### 6.3 Change Colors & Theme
In `css/custom.css`, edit the CSS root color variables:
```css
:root {
  --navy-dark: #0B132B;       /* Background header & dark cards */
  --blue-electric: #0EA5E9;   /* Primary accent & buttons */
  --amber-warm: #F59E0B;      /* Secondary highlights */
}
```

### 6.4 Add, Edit, or Remove Trades
Open `js/data.js` and locate the `trades` array. You can add, edit, or remove any trade object:
```javascript
{
  id: "solar-technician",
  name: "Solar Technician (Electrical)",
  code: "SOL-09",
  category: "Electrical",
  duration: "1 Year",
  eligibility: "10th Pass with Science & Math",
  overview: "...",
  skillsLearned: ["..."],
  toolsEquipment: ["..."],
  careerOpportunities: ["..."]
}
```
*The homepage, trade finder, trade directory, and `trade.html?id=solar-technician` will automatically support the new trade.*

### 6.5 Edit Faculty & Instructors
Open `js/data.js` and update the `faculty` array with the real instructors' names, photos, CITS certifications, and departments.

### 6.6 Edit Workshops & Labs
In `js/data.js`, update the `workshops` array to list the actual equipment and bay capacities available on the client's campus.

### 6.7 Edit Admissions & Session Dates
Update `js/config.js` (`session: "2026–27"`) and edit milestone dates on `admissions.html`.

---

## 7. How to Connect Backend / WhatsApp Later

Currently, forms trigger client-side validation and display informative feedback toasts. To connect real submissions:

### Option 1: Direct WhatsApp Lead Generator (Zero Backend)
In `js/forms.js`, update `handleAdmissionSubmission` to redirect to WhatsApp:
```javascript
const text = `New Admission Enquiry:%0AName: ${studentName}%0AMobile: ${mobile}%0ATrade: ${trade}`;
window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
```

### Option 2: Free Serverless Forms (Formspree / Web3Forms)
Set the form action attribute in `index.html`, `admissions.html`, and `contact.html`:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 3: Node / PHP / Python Backend
Add a `fetch('/api/enquiry', { method: 'POST', body: formData })` call inside `js/forms.js`.

---

## 8. How to Deploy

### Method A: Netlify / Vercel (Fastest & Free)
1. Drag and drop the `ais-iti` folder into the [Netlify Drop](https://app.netlify.com/drop) dashboard.
2. The website will be live in 10 seconds with free SSL.

### Method B: GitHub Pages
1. Push this directory to a GitHub repository.
2. Go to **Settings > Pages** and select the `main` branch.

### Method C: Standard cPanel / Shared Hosting
1. Compress the project folder into a `.zip` file.
2. Upload and extract into your hosting `public_html` directory.

### Method D: Connecting a Custom Domain
1. In your domain registrar (GoDaddy, Namecheap, Cloudflare), point an `A Record` to your server IP or a `CNAME` to your Netlify/Vercel URL.
2. Update the domain URLs in `robots.txt` and `sitemap.xml`.

---

# HOW TO RESELL THIS TEMPLATE

This codebase is specifically architected as a commercial turn-key solution to sell to:
- Private ITIs
- Skill Development Centers
- PMKVY Training Institutes
- Vocational Polytechnic Colleges

### Step-by-Step Reseller Workflow:
1. **Duplicate Project:** Make a copy of the project folder named after the new client (e.g. `apex-iti/`).
2. **Edit `js/config.js`:** Replace the institute name, contact phone, WhatsApp, email, address, and session year.
3. **Replace Images:** Collect real photos of the client's campus, workshops, and instructors. Place them in `assets/images/` or use high-resolution Unsplash URLs in `js/data.js`.
4. **Update Trades Data:** Open `js/data.js` and keep only the trades that the client actually offers.
5. **Adjust Accreditation & Affiliation:** Enter their actual NCVT/SCVT registration code in `js/config.js`.
6. **Set Colors:** Update `--blue-electric` and `--amber-warm` in `css/custom.css` to match the client's logo branding.
7. **Test Every Page:** Click through all 20 pages, test the Trade Finder, test the Lightbox, and submit the enquiry form.
8. **Deploy & Handover:** Deploy on Netlify/cPanel, attach the client's domain name, and deliver.

---

## 9. Client Customization Checklist

Use this checklist before delivering a customized website to a client:

- [ ] **Institute Name:** Configured in `js/config.js`
- [ ] **Brand Logo & Favicon:** Replaced in `assets/icons/` and `assets/favicon/`
- [ ] **Tagline:** Updated in `js/config.js`
- [ ] **Contact Phone Number:** Updated in `js/config.js`
- [ ] **WhatsApp Number:** Configured in `js/config.js` with raw country code format
- [ ] **Email Address:** Set for admissions in `js/config.js`
- [ ] **Physical Address & Landmark:** Set in `js/config.js`
- [ ] **Google Maps Embed:** Iframe URL updated in `contact.html` and `index.html`
- [ ] **Academic Session:** Updated (e.g. 2026–27)
- [ ] **Offered Trades:** Verified against client's state approval in `js/data.js`
- [ ] **Eligibility Criteria:** Verified against state admission guidelines
- [ ] **Faculty List & Photos:** Replaced in `js/data.js`
- [ ] **Workshop Equipment:** Verified with client's actual machines in `js/data.js`
- [ ] **Facilities:** Verified in `js/data.js`
- [ ] **Student Projects:** Updated with client's student prototypes
- [ ] **Achievements & Trophies:** Replaced with verified records
- [ ] **Photo Gallery:** Populated with real workshop pictures in `js/gallery.js`
- [ ] **Testimonials:** Replaced with verified student/parent feedback
- [ ] **Social Media Links:** Instagram, Facebook, YouTube updated in `js/config.js`
- [ ] **SEO Meta Tags & Sitemap:** Domain URL updated in `sitemap.xml` and `robots.txt`

---

## 10. License & Commercial Rights

This template is built with standard web technologies. You have full rights to customize, brand, modify, and resell this website template to multiple educational and vocational clients.
