/**
 * AIS INDUSTRIAL TRAINING INSTITUTE - DYNAMIC TRADE DETAILS ENGINE
 * Reads '?id=trade_id' from URL parameters and dynamically renders the full
 * vocational curriculum, workshop tools, subjects, career pathways, and FAQs.
 */

document.addEventListener("DOMContentLoaded", () => {
  renderTradeDetailsPage();
});

function renderTradeDetailsPage() {
  const container = document.getElementById("trade-details-container");
  if (!container || !window.instituteData?.trades) return;

  const urlParams = new URLSearchParams(window.location.search);
  const tradeId = urlParams.get("id") || "electrician";

  const allTrades = window.instituteData.trades;
  const trade = allTrades.find(t => t.id === tradeId) || allTrades[0];

  // Update page title & meta
  document.title = `${trade.name} Trade — Curriculum, Duration & Career | AIS ITI`;

  // Render comprehensive trade detail view
  container.innerHTML = `
    <!-- Top Breadcrumb & Switcher -->
    <div class="bg-slate-950 border-b border-slate-800 py-3">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <nav class="flex items-center gap-2 text-slate-400">
          <a href="index.html" class="hover:text-white">Home</a>
          <span>/</span>
          <a href="trades.html" class="hover:text-white">Trades</a>
          <span>/</span>
          <span class="text-sky-400 font-semibold">${trade.name}</span>
        </nav>

        <div class="flex items-center gap-2">
          <span class="text-slate-400">Switch Trade:</span>
          <select id="trade-quick-switcher" class="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-white text-xs focus:border-sky-500">
            ${allTrades.map(t => `
              <option value="${t.id}" ${t.id === trade.id ? "selected" : ""}>${t.name} (${t.duration})</option>
            `).join("")}
          </select>
        </div>
      </div>
    </div>

    <!-- Trade Hero Section -->
    <section class="relative bg-slate-950 text-white py-16 lg:py-20 overflow-hidden bg-tech-grid-dark">
      <div class="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-sky-950/30"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div class="lg:col-span-7 space-y-5">
            <div class="flex flex-wrap items-center gap-2">
              <span class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-500 text-slate-950">
                ${trade.badge || trade.category}
              </span>
              <span class="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-sky-300 border border-slate-700">
                Trade Code: ${trade.code}
              </span>
              <span class="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                ${trade.level}
              </span>
            </div>

            <h1 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              ${trade.name}
            </h1>

            <p class="text-base sm:text-lg text-slate-300 leading-relaxed">
              ${trade.overview}
            </p>

            <!-- Quick Specs Row -->
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-xs">
              <div class="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                <span class="text-slate-400 block mb-1">Duration</span>
                <span class="text-sm font-bold text-white flex items-center gap-1.5">
                  <i data-lucide="clock" class="w-4 h-4 text-sky-400"></i> ${trade.duration}
                </span>
              </div>
              <div class="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                <span class="text-slate-400 block mb-1">Eligibility</span>
                <span class="text-sm font-bold text-white flex items-center gap-1.5">
                  <i data-lucide="graduation-cap" class="w-4 h-4 text-emerald-400"></i> ${trade.eligibility}
                </span>
              </div>
              <div class="p-3 bg-slate-900/80 rounded-xl border border-slate-800 col-span-2 sm:col-span-1">
                <span class="text-slate-400 block mb-1">Curriculum Type</span>
                <span class="text-sm font-bold text-white flex items-center gap-1.5">
                  <i data-lucide="layers" class="w-4 h-4 text-amber-400"></i> ${trade.type}
                </span>
              </div>
            </div>

            <div class="flex flex-wrap items-center gap-4 pt-2">
              <button type="button" data-modal-target="enquiry-modal" class="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm shadow-xl shadow-sky-500/25 transition-all transform hover:-translate-y-0.5">
                Apply / Enquire for ${trade.name}
              </button>
              <a href="#practical-section" class="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all flex items-center gap-2">
                <span>View Practical Workshop</span>
                <i data-lucide="arrow-down" class="w-4 h-4 text-sky-400"></i>
              </a>
            </div>
          </div>

          <!-- Hero Image with blueprint styling -->
          <div class="lg:col-span-5 relative">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-800 blueprint-corner group">
              <img src="${trade.image}" alt="${trade.name} practical workshop training" class="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              <div class="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md p-3.5 rounded-xl border border-slate-800 text-xs">
                <span class="text-sky-400 font-semibold flex items-center gap-1.5 mb-1">
                  <i data-lucide="check-circle-2" class="w-4 h-4"></i> Hands-on Practical Focus
                </span>
                <p class="text-slate-300 leading-snug">${trade.practicalFocus}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Detail Content Grid -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <!-- Left 8 Columns: Curriculum & Deep Details -->
        <div class="lg:col-span-8 space-y-12">
          
          <!-- 1. What You Will Learn -->
          <section class="space-y-4">
            <div class="flex items-center gap-3">
              <span class="w-2.5 h-6 bg-sky-500 rounded-full"></span>
              <h2 class="font-heading text-2xl font-bold text-white tracking-tight">
                Practical Skills & Competencies You Master
              </h2>
            </div>
            <p class="text-slate-400 text-sm leading-relaxed">
              Our training program emphasizes 70% hands-on practical workshop execution and 30% technical theory, following national vocational standards.
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              ${trade.skillsLearned.map((skill, index) => `
                <div class="p-4 bg-slate-900 border border-slate-800 rounded-xl flex items-start gap-3 hover:border-slate-700 transition-colors">
                  <span class="w-6 h-6 rounded-full bg-sky-500/10 text-sky-400 font-bold text-xs flex items-center justify-center shrink-0 border border-sky-500/20">
                    ${index + 1}
                  </span>
                  <span class="text-xs text-slate-300 font-medium leading-relaxed">${skill}</span>
                </div>
              `).join("")}
            </div>
          </section>

          <!-- 2. Practical Workshop & Machinery (id="practical-section") -->
          <section id="practical-section" class="space-y-4 pt-6 border-t border-slate-800">
            <div class="flex items-center gap-3">
              <span class="w-2.5 h-6 bg-amber-400 rounded-full"></span>
              <h2 class="font-heading text-2xl font-bold text-white tracking-tight">
                Workshop Tools, Machines & Test Equipment
              </h2>
            </div>
            <p class="text-slate-400 text-sm leading-relaxed">
              Trainees train on industry-standard equipment under the continuous supervision of certified craft instructors.
            </p>
            <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 class="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
                <i data-lucide="wrench" class="w-4 h-4"></i> Primary Workshop Equipment Used in Training:
              </h3>
              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                ${trade.toolsEquipment.map(tool => `
                  <li class="flex items-center gap-2 bg-slate-950/60 p-2.5 rounded-lg border border-slate-850">
                    <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-400 shrink-0"></i>
                    <span>${tool}</span>
                  </li>
                `).join("")}
              </ul>
              <div class="pt-3 text-[11px] text-slate-500 flex items-center gap-1.5">
                <i data-lucide="shield-alert" class="w-4 h-4 text-amber-400"></i>
                All workshop sessions operate under strict Personal Protective Equipment (PPE) compliance.
              </div>
            </div>
          </section>

          <!-- 3. Syllabus & Examination Subjects -->
          <section class="space-y-4 pt-6 border-t border-slate-800">
            <div class="flex items-center gap-3">
              <span class="w-2.5 h-6 bg-emerald-400 rounded-full"></span>
              <h2 class="font-heading text-2xl font-bold text-white tracking-tight">
                Curriculum Subjects & Assessment Structure
              </h2>
            </div>
            <p class="text-slate-400 text-sm leading-relaxed">
              Standardized syllabus combining core engineering theory, intensive practical work, technical blueprint calculations, and digital workplace readiness.
            </p>
            <div class="space-y-2.5">
              ${trade.subjects.map(subject => `
                <div class="p-3.5 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-between text-xs">
                  <div class="flex items-center gap-2.5 text-slate-200 font-medium">
                    <i data-lucide="book-open" class="w-4 h-4 text-sky-400"></i>
                    <span>${subject}</span>
                  </div>
                  <span class="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Continuous Assessment</span>
                </div>
              `).join("")}
            </div>
          </section>

          <!-- 4. Career Opportunities & Industry Pathways -->
          <section class="space-y-4 pt-6 border-t border-slate-800">
            <div class="flex items-center gap-3">
              <span class="w-2.5 h-6 bg-purple-400 rounded-full"></span>
              <h2 class="font-heading text-2xl font-bold text-white tracking-tight">
                Potential Career Pathways & Industries
              </h2>
            </div>
            <p class="text-slate-400 text-sm leading-relaxed">
              Graduating trainees are prepared for multiple progression avenues based on aptitude, merit, and competitive selections:
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${trade.careerOpportunities.map(career => `
                <div class="p-3.5 bg-slate-900 border border-slate-800 rounded-xl flex items-start gap-2.5 text-xs text-slate-300">
                  <i data-lucide="briefcase" class="w-4 h-4 text-sky-400 shrink-0 mt-0.5"></i>
                  <span>${career}</span>
                </div>
              `).join("")}
            </div>
            <div class="p-4 bg-sky-950/30 border border-sky-800/40 rounded-xl text-xs text-sky-300 flex items-start gap-3">
              <i data-lucide="info" class="w-4 h-4 text-sky-400 shrink-0 mt-0.5"></i>
              <div>
                <strong>Ethical Disclosure:</strong> Opportunities depend on candidate performance, individual skill demonstration, employer selection criteria, and applicable government entrance examination notifications.
              </div>
            </div>
          </section>

          <!-- 5. Higher Education & Lateral Entry -->
          <section class="space-y-3 pt-6 border-t border-slate-800">
            <div class="flex items-center gap-3">
              <span class="w-2.5 h-6 bg-teal-400 rounded-full"></span>
              <h2 class="font-heading text-xl font-bold text-white tracking-tight">
                Further Higher Education Pathways
              </h2>
            </div>
            <div class="p-5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-300 leading-relaxed">
              <p class="font-semibold text-white mb-1.5 flex items-center gap-2">
                <i data-lucide="graduation-cap" class="w-4 h-4 text-teal-400"></i>
                Polytechnic Diploma Lateral Entry & CITS
              </p>
              ${trade.furtherEducation}
            </div>
          </section>

          <!-- 6. Trade Specific FAQs -->
          <section class="space-y-4 pt-6 border-t border-slate-800">
            <h2 class="font-heading text-xl font-bold text-white tracking-tight">
              Frequently Asked Questions About ${trade.name}
            </h2>
            <div class="space-y-3">
              ${trade.faqs.map(faq => `
                <div class="p-4 bg-slate-900 border border-slate-800 rounded-xl text-xs">
                  <h4 class="font-bold text-white mb-1.5 flex items-start gap-2">
                    <span class="text-sky-400">Q:</span> ${faq.q}
                  </h4>
                  <p class="text-slate-400 pl-4 leading-relaxed">${faq.a}</p>
                </div>
              `).join("")}
            </div>
          </section>

        </div>

        <!-- Right 4 Columns: Sticky Quick Action Card & Admission Info -->
        <div class="lg:col-span-4">
          <div class="sticky top-28 space-y-6">
            <!-- Admission Card -->
            <div class="bg-slate-900 border border-slate-700/80 rounded-2xl p-6 shadow-xl space-y-5 industrial-card-dark">
              <div class="space-y-1">
                <span class="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Session 2026–27
                </span>
                <h3 class="font-heading text-xl font-bold text-white pt-1">
                  Enquire for ${trade.name}
                </h3>
                <p class="text-xs text-slate-400">
                  Seats are allocated as per state merit and counseling guidelines. Reserve your counseling slot today.
                </p>
              </div>

              <div class="space-y-2.5 text-xs text-slate-300 border-y border-slate-800 py-4">
                <div class="flex justify-between">
                  <span class="text-slate-400">Trade Code</span>
                  <span class="font-bold text-white">${trade.code}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400">Training Duration</span>
                  <span class="font-bold text-white">${trade.duration}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400">Min. Qualification</span>
                  <span class="font-bold text-white">${trade.eligibility.split(' ')[0]} Pass</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400">Assessment Standard</span>
                  <span class="font-bold text-white">${trade.level}</span>
                </div>
              </div>

              <button type="button" data-modal-target="enquiry-modal" class="w-full py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm shadow-lg shadow-sky-500/20 transition-all text-center">
                Submit Admission Enquiry
              </button>

              <div class="text-center">
                <a href="https://wa.me/${window.instituteConfig?.whatsappRaw || '919876543210'}?text=${encodeURIComponent('Hello, I want to enquire about ' + trade.name + ' admission at AIS ITI')}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300">
                  <i data-lucide="message-circle" class="w-3.5 h-3.5"></i>
                  Ask Quick Question on WhatsApp
                </a>
              </div>
            </div>

            <!-- Counseling Support Box -->
            <div class="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 text-xs space-y-2 text-slate-400">
              <h4 class="font-semibold text-white flex items-center gap-1.5">
                <i data-lucide="phone-call" class="w-4 h-4 text-sky-400"></i> Need Trade Guidance?
              </h4>
              <p>Not sure if ${trade.name} is the right fit for your career goals? Talk to our trade instructors.</p>
              <p class="text-slate-200 font-bold pt-1">
                Call: <a href="tel:${window.instituteConfig?.phoneRaw || '+919876543210'}" class="text-sky-400 hover:underline">${window.instituteConfig?.phone || '+91 98765 43210'}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Attach quick switcher listener
  const switcher = document.getElementById("trade-quick-switcher");
  switcher?.addEventListener("change", (e) => {
    window.location.search = `?id=${e.target.value}`;
  });

  if (window.lucide) window.lucide.createIcons();
}
