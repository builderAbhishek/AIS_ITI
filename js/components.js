/**
 * AIS INDUSTRIAL TRAINING INSTITUTE - SHARED COMPONENTS & LAYOUT SYSTEM
 * Dynamically binds header, navbar, footer, enquiry modal, floating actions,
 * and data-bind variables across all pages without requiring a complex framework.
 */

document.addEventListener("DOMContentLoaded", () => {
  renderSharedComponents();
  bindConfigData();
  setupGlobalModal();
  setupFloatingActions();
});

// Render global header, navbar, footer if component placeholders exist
function renderSharedComponents() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  // 1. TOP ANNOUNCEMENT BAR
  const topBar = document.getElementById("top-announcement-bar");
  if (topBar) {
    topBar.innerHTML = `
      <div class="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div class="flex items-center gap-2 text-center sm:text-left">
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-sky-500/20 text-sky-400 border border-sky-500/30">
              <span class="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse mr-1.5"></span>
              ADMISSIONS OPEN
            </span>
            <span class="font-medium text-slate-200">Session 2026–27 Enquiries Open</span>
            <span class="hidden md:inline text-slate-500">|</span>
            <span class="hidden md:inline text-slate-400">Practical & Skill-Based Industrial Training</span>
          </div>
          <div class="flex items-center gap-4 text-slate-400">
            <a href="tel:${window.instituteConfig?.phoneRaw || '+919876543210'}" class="hover:text-white flex items-center gap-1 transition-colors">
              <i data-lucide="phone" class="w-3.5 h-3.5 text-sky-400"></i>
              <span>${window.instituteConfig?.phone || '+91 98765 43210'}</span>
            </a>
            <span class="text-slate-700">|</span>
            <a href="mailto:${window.instituteConfig?.email || 'admissions@example.com'}" class="hover:text-white flex items-center gap-1 transition-colors hidden sm:flex">
              <i data-lucide="mail" class="w-3.5 h-3.5 text-sky-400"></i>
              <span>${window.instituteConfig?.email || 'admissions@example.com'}</span>
            </a>
            <a href="trades.html" class="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-2 flex items-center gap-1 ml-2">
              View Trades
              <i data-lucide="chevron-right" class="w-3 h-3"></i>
            </a>
          </div>
        </div>
      </div>
    `;
  }

  // 2. MAIN NAVBAR
  const navContainer = document.getElementById("main-navbar");
  if (navContainer) {
    const navLinks = [
      { name: "Home", href: "index.html" },
      { name: "About", href: "about.html" },
      { name: "Trades", href: "trades.html" },
      { name: "Training", href: "training.html" },
      { name: "Workshops", href: "workshops.html" },
      { name: "Facilities", href: "facilities.html" },
      { name: "Career", href: "career.html" },
      { name: "Admissions", href: "admissions.html" },
      { name: "Gallery", href: "gallery.html" },
      { name: "Contact", href: "contact.html" }
    ];

    const navItemsHtml = navLinks.map(link => {
      const isActive = currentPath === link.href || (link.href === 'index.html' && currentPath === '');
      const activeClass = isActive 
        ? "text-sky-400 font-semibold border-b-2 border-sky-400 py-1" 
        : "text-slate-300 hover:text-white font-medium py-1 transition-colors";
      return `<a href="${link.href}" class="${activeClass} text-sm">${link.name}</a>`;
    }).join("");

    const mobileNavItemsHtml = navLinks.map(link => {
      const isActive = currentPath === link.href || (link.href === 'index.html' && currentPath === '');
      const activeClass = isActive 
        ? "bg-sky-500/10 text-sky-400 font-semibold border-l-4 border-sky-400 pl-3" 
        : "text-slate-300 hover:bg-slate-800 hover:text-white pl-4";
      return `<a href="${link.href}" class="${activeClass} block py-2.5 text-base rounded-r transition-all">${link.name}</a>`;
    }).join("");

    navContainer.innerHTML = `
      <nav class="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 transition-all duration-300" id="site-header">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-20">
            <!-- Brand Logo -->
            <a href="index.html" class="flex items-center gap-3 group focus:outline-none">
              <div class="w-11 h-11 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center p-1.5 shadow-md shadow-sky-950/40 group-hover:border-sky-500 transition-colors">
                <img src="assets/favicon/favicon.svg" alt="AIS ITI Logo" class="w-full h-full object-contain" />
              </div>
              <div class="flex flex-col">
                <span class="font-heading font-bold text-xl sm:text-2xl text-white tracking-tight leading-none group-hover:text-sky-400 transition-colors">
                  AIS <span class="text-sky-400">ITI</span>
                </span>
                <span class="text-[10px] text-slate-400 tracking-wider uppercase font-medium mt-1">
                  Industrial Training Institute
                </span>
              </div>
            </a>

            <!-- Desktop Navigation Links -->
            <div class="hidden lg:flex items-center gap-6 xl:gap-8">
              ${navItemsHtml}
            </div>

            <!-- Header Action Button -->
            <div class="hidden sm:flex items-center gap-3">
              <button type="button" data-modal-target="enquiry-modal" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
                <i data-lucide="edit-3" class="w-4 h-4"></i>
                <span>Apply / Enquire</span>
              </button>
            </div>

            <!-- Mobile Menu Toggle Button -->
            <div class="flex lg:hidden items-center gap-2">
              <button type="button" data-modal-target="enquiry-modal" class="sm:hidden px-3 py-1.5 text-xs font-semibold bg-sky-500 text-slate-950 rounded-md">
                Enquire
              </button>
              <button id="mobile-menu-btn" type="button" aria-label="Toggle mobile menu" aria-expanded="false" class="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500">
                <i data-lucide="menu" id="menu-icon-open" class="w-6 h-6"></i>
                <i data-lucide="x" id="menu-icon-close" class="w-6 h-6 hidden"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile Drawer Menu -->
        <div id="mobile-menu-drawer" class="lg:hidden hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 max-h-[80vh] overflow-y-auto shadow-2xl">
          <div class="space-y-1 py-2">
            ${mobileNavItemsHtml}
          </div>
          <div class="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <button type="button" data-modal-target="enquiry-modal" class="w-full text-center py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm shadow-md transition-all">
              Apply / Admission Enquiry
            </button>
            <div class="grid grid-cols-2 gap-2 text-center text-xs text-slate-400 pt-2">
              <a href="tel:${window.instituteConfig?.phoneRaw || '+919876543210'}" class="p-2.5 rounded bg-slate-800/80 hover:bg-slate-800 flex items-center justify-center gap-1.5">
                <i data-lucide="phone" class="w-3.5 h-3.5 text-sky-400"></i> Call Us
              </a>
              <a href="https://wa.me/${window.instituteConfig?.whatsappRaw || '919876543210'}?text=${encodeURIComponent(window.instituteConfig?.whatsappMessage || 'Hello')}" target="_blank" rel="noopener noreferrer" class="p-2.5 rounded bg-slate-800/80 hover:bg-slate-800 flex items-center justify-center gap-1.5 text-emerald-400">
                <i data-lucide="message-circle" class="w-3.5 h-3.5"></i> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </nav>
    `;
  }

  // 3. GLOBAL FOOTER
  const footerContainer = document.getElementById("main-footer");
  if (footerContainer) {
    footerContainer.innerHTML = `
      <footer class="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-8 relative overflow-hidden bg-tech-grid-dark">
        <!-- Blueprint subtle decorative accents -->
        <div class="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
            <!-- Col 1: Institute Info & Brand -->
            <div class="lg:col-span-2 space-y-4">
              <a href="index.html" class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center p-1.5">
                  <img src="assets/favicon/favicon.svg" alt="AIS ITI Logo" class="w-full h-full object-contain" />
                </div>
                <div>
                  <span class="font-heading font-bold text-xl text-white tracking-tight">AIS <span class="text-sky-400">ITI</span></span>
                  <p class="text-[11px] text-slate-400 uppercase tracking-wider">Industrial Training Institute</p>
                </div>
              </a>
              <p class="text-sm text-slate-400 leading-relaxed max-w-sm">
                Dedicated to empowering youth with hands-on technical skills, workshop mastery, and disciplined industrial education. From classroom fundamentals to modern career pathways.
              </p>
              <div class="pt-2 text-xs space-y-2 text-slate-400">
                <p class="flex items-start gap-2">
                  <i data-lucide="map-pin" class="w-4 h-4 text-sky-400 shrink-0 mt-0.5"></i>
                  <span>${window.instituteConfig?.address || 'Plot No. 42, Industrial Training Zone, India'}</span>
                </p>
                <p class="flex items-center gap-2">
                  <i data-lucide="phone" class="w-4 h-4 text-sky-400 shrink-0"></i>
                  <a href="tel:${window.instituteConfig?.phoneRaw || '+919876543210'}" class="hover:text-white">${window.instituteConfig?.phone || '+91 98765 43210'}</a>
                </p>
                <p class="flex items-center gap-2">
                  <i data-lucide="mail" class="w-4 h-4 text-sky-400 shrink-0"></i>
                  <a href="mailto:${window.instituteConfig?.email || 'admissions@example.com'}" class="hover:text-white">${window.instituteConfig?.email || 'admissions@example.com'}</a>
                </p>
              </div>
              <!-- Social Links -->
              <div class="flex items-center gap-3 pt-3">
                <a href="${window.instituteConfig?.social?.facebook || '#'}" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-500 hover:text-white flex items-center justify-center transition-colors">
                  <i data-lucide="facebook" class="w-4 h-4"></i>
                </a>
                <a href="${window.instituteConfig?.social?.instagram || '#'}" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-500 hover:text-white flex items-center justify-center transition-colors">
                  <i data-lucide="instagram" class="w-4 h-4"></i>
                </a>
                <a href="${window.instituteConfig?.social?.youtube || '#'}" target="_blank" rel="noopener noreferrer" aria-label="YouTube" class="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-500 hover:text-white flex items-center justify-center transition-colors">
                  <i data-lucide="youtube" class="w-4 h-4"></i>
                </a>
                <a href="${window.instituteConfig?.social?.linkedin || '#'}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-500 hover:text-white flex items-center justify-center transition-colors">
                  <i data-lucide="linkedin" class="w-4 h-4"></i>
                </a>
              </div>
            </div>

            <!-- Col 2: Popular Trades -->
            <div>
              <h4 class="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">Training Trades</h4>
              <ul class="space-y-2 text-sm">
                <li><a href="trade.html?id=electrician" class="hover:text-sky-400 transition-colors flex items-center gap-1.5"><i data-lucide="chevron-right" class="w-3 h-3 text-slate-600"></i> Electrician (2 Yrs)</a></li>
                <li><a href="trade.html?id=fitter" class="hover:text-sky-400 transition-colors flex items-center gap-1.5"><i data-lucide="chevron-right" class="w-3 h-3 text-slate-600"></i> Fitter (2 Yrs)</a></li>
                <li><a href="trade.html?id=welder" class="hover:text-sky-400 transition-colors flex items-center gap-1.5"><i data-lucide="chevron-right" class="w-3 h-3 text-slate-600"></i> Welder (1 Yr)</a></li>
                <li><a href="trade.html?id=copa" class="hover:text-sky-400 transition-colors flex items-center gap-1.5"><i data-lucide="chevron-right" class="w-3 h-3 text-slate-600"></i> COPA (1 Yr)</a></li>
                <li><a href="trade.html?id=mechanic-motor-vehicle" class="hover:text-sky-400 transition-colors flex items-center gap-1.5"><i data-lucide="chevron-right" class="w-3 h-3 text-slate-600"></i> Motor Mechanic (2 Yrs)</a></li>
                <li><a href="trade.html?id=electronics-mechanic" class="hover:text-sky-400 transition-colors flex items-center gap-1.5"><i data-lucide="chevron-right" class="w-3 h-3 text-slate-600"></i> Electronics Mechanic</a></li>
                <li><a href="trades.html" class="text-sky-400 hover:underline font-medium pt-1 inline-block">View All 8 Trades →</a></li>
              </ul>
            </div>

            <!-- Col 3: Quick Navigation -->
            <div>
              <h4 class="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">Quick Navigation</h4>
              <ul class="space-y-2 text-sm">
                <li><a href="about.html" class="hover:text-sky-400 transition-colors">About Institute</a></li>
                <li><a href="training.html" class="hover:text-sky-400 transition-colors">Training Model</a></li>
                <li><a href="workshops.html" class="hover:text-sky-400 transition-colors">Workshops & Equipment</a></li>
                <li><a href="facilities.html" class="hover:text-sky-400 transition-colors">Campus Facilities</a></li>
                <li><a href="faculty.html" class="hover:text-sky-400 transition-colors">Faculty & Instructors</a></li>
                <li><a href="student-life.html" class="hover:text-sky-400 transition-colors">Student Life & Projects</a></li>
                <li><a href="achievements.html" class="hover:text-sky-400 transition-colors">Achievements</a></li>
                <li><a href="gallery.html" class="hover:text-sky-400 transition-colors">Campus Photo Gallery</a></li>
              </ul>
            </div>

            <!-- Col 4: Admissions & Policy -->
            <div>
              <h4 class="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">Admissions & Info</h4>
              <ul class="space-y-2 text-sm">
                <li><a href="admissions.html" class="hover:text-sky-400 transition-colors font-medium text-slate-300">Admission Process 2026–27</a></li>
                <li><a href="eligibility.html" class="hover:text-sky-400 transition-colors">Eligibility & Documents</a></li>
                <li><a href="career.html" class="hover:text-sky-400 transition-colors">Career & Apprenticeship</a></li>
                <li><a href="notices.html" class="hover:text-sky-400 transition-colors">Notice Board & Circulars</a></li>
                <li><a href="faq.html" class="hover:text-sky-400 transition-colors">Frequently Asked Questions</a></li>
                <li><a href="careers.html" class="hover:text-sky-400 transition-colors">Join as Instructor / Staff</a></li>
                <li><a href="contact.html" class="hover:text-sky-400 transition-colors">Campus Visit & Map</a></li>
                <li><a href="privacy.html" class="hover:text-slate-500 text-xs text-slate-500 transition-colors">Privacy Policy</a></li>
                <li><a href="terms.html" class="hover:text-slate-500 text-xs text-slate-500 transition-colors">Terms of Website</a></li>
              </ul>
            </div>
          </div>

          <!-- Ethical Disclaimer Bar -->
          <div class="py-6 border-b border-slate-800/80 text-xs text-slate-400 leading-relaxed">
            <p>
              <strong class="text-slate-300">Transparency Note:</strong> ${window.instituteConfig?.disclaimer || 'AIS ITI is a demonstration institute brand. All trade details, curriculum, tools and career pathways adhere to standard vocational education norms in India. Real institutes must replace all demo variables with authorized affiliation details, state council codes, and verified admission statistics.'}
            </p>
          </div>

          <!-- Bottom Copyright -->
          <div class="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
            <div>
              &copy; ${new Date().getFullYear()} ${window.instituteConfig?.name || 'AIS Industrial Training Institute'}. All rights reserved.
            </div>
            <div class="flex items-center gap-6">
              <a href="privacy.html" class="hover:text-slate-400">Privacy Policy</a>
              <span>•</span>
              <a href="terms.html" class="hover:text-slate-400">Terms & Conditions</a>
              <span>•</span>
              <a href="sitemap.xml" class="hover:text-slate-400">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  // Refresh lucide icons after rendering
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Bind config variables to all elements with [data-bind] attributes
function bindConfigData() {
  const config = window.instituteConfig;
  if (!config) return;

  document.querySelectorAll("[data-bind]").forEach(el => {
    const key = el.getAttribute("data-bind");
    if (config[key]) {
      el.textContent = config[key];
    }
  });

  // Dynamic session text
  document.querySelectorAll(".bind-session").forEach(el => {
    el.textContent = config.session || "2026–27";
  });

  // Dynamic institute name
  document.querySelectorAll(".bind-name").forEach(el => {
    el.textContent = config.name || "AIS Industrial Training Institute";
  });
}

// Setup floating action stack (WhatsApp, Call, Scroll to Top)
function setupFloatingActions() {
  const existing = document.getElementById("global-floating-actions");
  if (existing) return;

  const config = window.instituteConfig || {};
  const div = document.createElement("div");
  div.id = "global-floating-actions";
  div.className = "fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end";

  div.innerHTML = `
    <!-- Back to top button -->
    <button id="btn-back-to-top" aria-label="Back to top" class="w-10 h-10 rounded-full bg-slate-900/90 text-slate-300 hover:text-white border border-slate-700 shadow-lg flex items-center justify-center transition-all opacity-0 pointer-events-none hover:bg-slate-800">
      <i data-lucide="chevron-up" class="w-5 h-5"></i>
    </button>

    <!-- Direct WhatsApp Float -->
    <a href="https://wa.me/${config.whatsappRaw || '919876543210'}?text=${encodeURIComponent(config.whatsappMessage || 'Hello AIS ITI Admission Cell')}" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" class="group flex items-center gap-2 px-3 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/40 transition-all transform hover:scale-105 active:scale-95">
      <span class="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-semibold px-0 group-hover:px-1">Chat on WhatsApp</span>
      <i data-lucide="message-circle" class="w-5 h-5"></i>
    </a>

    <!-- Quick Enquiry Float Button -->
    <button type="button" data-modal-target="enquiry-modal" aria-label="Open admission enquiry form" class="flex items-center gap-2 px-4 py-2.5 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs shadow-xl shadow-sky-950/50 transition-all transform hover:scale-105 active:scale-95">
      <i data-lucide="send" class="w-4 h-4"></i>
      <span>Admission Enquiry</span>
    </button>
  `;

  document.body.appendChild(div);

  const backToTop = document.getElementById("btn-back-to-top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTop?.classList.remove("opacity-0", "pointer-events-none");
    } else {
      backToTop?.classList.add("opacity-0", "pointer-events-none");
    }
  });

  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Setup universal admission enquiry modal accessible from anywhere
function setupGlobalModal() {
  if (document.getElementById("enquiry-modal")) return;

  const modalHtml = `
    <div id="enquiry-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300" role="dialog" aria-modal="true" aria-labelledby="enquiry-modal-title">
      <div class="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 transform scale-95 transition-transform duration-300" id="enquiry-modal-card">
        <!-- Close button -->
        <button type="button" data-modal-close="enquiry-modal" aria-label="Close modal" class="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors">
          <i data-lucide="x" class="w-6 h-6"></i>
        </button>

        <div class="mb-6">
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-2">
            <span class="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
            Session 2026–27 Admission Enquiry
          </div>
          <h3 id="enquiry-modal-title" class="font-heading text-2xl font-bold text-white tracking-tight">
            Take Your First Step in Technical Training
          </h3>
          <p class="text-sm text-slate-400 mt-1">
            Fill in your details below. Our admission counseling team will get in touch with eligibility criteria, fee schedule, and workshop tour timings.
          </p>
        </div>

        <form id="global-enquiry-form" class="space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label for="student-name" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Candidate Full Name *</label>
              <input type="text" id="student-name" name="studentName" required placeholder="e.g. Rahul Sharma" class="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
            </div>
            <div>
              <label for="parent-name" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Father / Guardian Name</label>
              <input type="text" id="parent-name" name="parentName" placeholder="e.g. Ramesh Sharma" class="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label for="mobile-number" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Mobile Number (WhatsApp Preferred) *</label>
              <input type="tel" id="mobile-number" name="mobile" pattern="[0-9]{10}" required placeholder="10-digit mobile number" class="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
            </div>
            <div>
              <label for="email-address" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Email Address</label>
              <input type="email" id="email-address" name="email" placeholder="student@example.com" class="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label for="education-qual" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Highest Qualification *</label>
              <select id="education-qual" name="qualification" required class="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500">
                <option value="">Select your qualification</option>
                <option value="10th Pass">10th Standard Pass</option>
                <option value="10th Appearing">10th Appearing / Result Awaited</option>
                <option value="12th Pass">12th Standard Pass</option>
                <option value="8th Pass">8th Standard Pass (For Welder/Plumber)</option>
                <option value="Graduate">Graduate / Other</option>
              </select>
            </div>
            <div>
              <label for="trade-interest" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Trade Interested In *</label>
              <select id="trade-interest" name="trade" required class="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500">
                <option value="">Select a trade</option>
                <option value="Electrician">Electrician (2 Years)</option>
                <option value="Fitter">Fitter (2 Years)</option>
                <option value="Welder">Welder (Gas & Electric - 1 Year)</option>
                <option value="COPA">COPA (Computer Operator - 1 Year)</option>
                <option value="Mechanic Motor Vehicle">Mechanic Motor Vehicle (2 Years)</option>
                <option value="Electronics Mechanic">Electronics Mechanic (2 Years)</option>
                <option value="Draughtsman Civil">Draughtsman Civil (2 Years)</option>
                <option value="Plumber">Plumber (1 Year)</option>
                <option value="General Guidance">Need Guidance / Not Sure</option>
              </select>
            </div>
          </div>

          <div>
            <label for="enquiry-notes" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Questions / Message</label>
            <textarea id="enquiry-notes" name="notes" rows="3" placeholder="Tell us if you want hostel info, fee installment details, or campus visit timings..." class="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500"></textarea>
          </div>

          <div class="p-3 bg-slate-950/60 rounded-lg border border-slate-800 text-[11px] text-slate-400">
            <strong>Demonstration Notice:</strong> Submitting this demo form will simulate a validated submission and show a confirmation toast. In a live client deployment, this handler connects directly to your WhatsApp API or backend admission CRM.
          </div>

          <div class="flex items-center justify-end gap-3 pt-2">
            <button type="button" data-modal-close="enquiry-modal" class="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-sm transition-colors">
              Cancel
            </button>
            <button type="submit" class="px-6 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 transition-all flex items-center gap-2">
              <i data-lucide="check-circle" class="w-4 h-4"></i>
              <span>Submit Admission Enquiry</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", modalHtml);

  // Setup click triggers for all [data-modal-target] buttons
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-modal-target]");
    if (trigger) {
      const modalId = trigger.getAttribute("data-modal-target");
      openModal(modalId);
    }

    const closeTrigger = e.target.closest("[data-modal-close]");
    if (closeTrigger) {
      const modalId = closeTrigger.getAttribute("data-modal-close");
      closeModal(modalId);
    }
  });

  // Modal backdrop click
  const modal = document.getElementById("enquiry-modal");
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal("enquiry-modal");
    }
  });

  // ESC key listener
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal("enquiry-modal");
    }
  });
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove("opacity-0", "pointer-events-none");
  const card = modal.querySelector("#enquiry-modal-card");
  card?.classList.remove("scale-95");
  card?.classList.add("scale-100");
  document.body.style.overflow = "hidden";
  if (window.lucide) window.lucide.createIcons();
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add("opacity-0", "pointer-events-none");
  const card = modal.querySelector("#enquiry-modal-card");
  card?.classList.add("scale-95");
  card?.classList.remove("scale-100");
  document.body.style.overflow = "";
}

// Make functions accessible globally
window.openModal = openModal;
window.closeModal = closeModal;
