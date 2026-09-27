/**
 * AIS INDUSTRIAL TRAINING INSTITUTE - FILTERING & TRADE FINDER SYSTEM
 * Handles homepage Trade Finder, trade directory filtering (search/category/duration/eligibility),
 * and news/notice filtering with pure client-side vanilla JavaScript.
 */

document.addEventListener("DOMContentLoaded", () => {
  initHomepageTradeFinder();
  initTradesDirectoryFilter();
  initNoticesFilter();
});

/* ==========================================================================
   1. HOMEPAGE INTERACTIVE TRADE FINDER
   ========================================================================== */
function initHomepageTradeFinder() {
  const form = document.getElementById("trade-finder-form");
  const resultsContainer = document.getElementById("trade-finder-results");
  if (!form || !resultsContainer || !window.instituteData?.trades) return;

  const runFinder = () => {
    const interest = form.querySelector('[name="interest"]')?.value || "all";
    const education = form.querySelector('[name="education"]')?.value || "all";
    const learning = form.querySelector('[name="learning"]')?.value || "all";

    const allTrades = window.instituteData.trades;

    const matches = allTrades.filter(trade => {
      // Interest match
      let interestMatch = true;
      if (interest !== "all") {
        interestMatch = trade.category.toLowerCase() === interest.toLowerCase();
      }

      // Education match
      let educationMatch = true;
      if (education === "8th") {
        educationMatch = trade.eligibility.includes("8th");
      } else if (education === "10th") {
        educationMatch = trade.eligibility.includes("10th") || trade.eligibility.includes("8th");
      } else if (education === "12th") {
        educationMatch = true; // 12th is eligible for all ITI trades
      }

      // Learning style match
      let learningMatch = true;
      if (learning === "computer-based") {
        learningMatch = trade.category === "Computer" || trade.id === "draughtsman-civil";
      } else if (learning === "workshop") {
        learningMatch = ["Mechanical", "Electrical"].includes(trade.category);
      } else if (learning === "hands-on") {
        learningMatch = true; // All ITIs are hands-on
      }

      return interestMatch && educationMatch && learningMatch;
    });

    renderFinderResults(matches, resultsContainer);
  };

  form.addEventListener("change", runFinder);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    runFinder();
  });

  // Initial trigger
  runFinder();
}

function renderFinderResults(trades, container) {
  if (trades.length === 0) {
    container.innerHTML = `
      <div class="col-span-full p-8 text-center bg-slate-900/60 rounded-xl border border-slate-800 text-slate-400">
        <i data-lucide="search-x" class="w-10 h-10 text-slate-600 mx-auto mb-3"></i>
        <h4 class="text-base font-semibold text-white">No exact matching trade found</h4>
        <p class="text-sm mt-1">Try relaxing your filter criteria or consult our admission counselor for personalized career guidance.</p>
        <button type="button" data-modal-target="enquiry-modal" class="mt-4 px-4 py-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs rounded-lg transition-all">
          Talk to Career Counselor
        </button>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  container.innerHTML = trades.map(trade => `
    <div class="group bg-slate-900/90 border border-slate-800 hover:border-sky-500/60 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-md flex flex-col justify-between industrial-card">
      <div class="relative h-44 overflow-hidden bg-slate-950">
        <img src="${trade.image}" alt="${trade.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
        <span class="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded bg-sky-500 text-slate-950 uppercase tracking-wide">
          ${trade.badge || trade.category}
        </span>
        <span class="absolute bottom-3 right-3 text-xs font-semibold px-2 py-0.5 rounded bg-slate-900/90 text-slate-200 border border-slate-700">
          ${trade.duration}
        </span>
      </div>
      
      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <span class="text-xs font-medium text-sky-400 uppercase tracking-wider">${trade.type}</span>
          <h4 class="font-heading text-lg font-bold text-white mt-1 group-hover:text-sky-400 transition-colors">
            ${trade.name}
          </h4>
          <p class="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
            ${trade.overview}
          </p>
          <div class="mt-3 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
            <span class="flex items-center gap-1"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-400"></i> ${trade.eligibility}</span>
            <span class="text-slate-500">${trade.level}</span>
          </div>
        </div>

        <div class="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
          <a href="trade.html?id=${trade.id}" class="text-xs font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1 group/btn">
            View Trade Details
            <i data-lucide="arrow-right" class="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform"></i>
          </a>
          <button type="button" data-modal-target="enquiry-modal" class="text-xs font-semibold px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors">
            Enquire
          </button>
        </div>
      </div>
    </div>
  `).join("");

  if (window.lucide) window.lucide.createIcons();
}

/* ==========================================================================
   2. TRADES DIRECTORY PAGE FILTER
   ========================================================================== */
function initTradesDirectoryFilter() {
  const container = document.getElementById("trades-directory-grid");
  const searchInput = document.getElementById("trades-search-input");
  const categoryFilters = document.querySelectorAll("[data-filter-category]");
  const durationSelect = document.getElementById("trades-duration-filter");
  const eligibilitySelect = document.getElementById("trades-eligibility-filter");
  const countDisplay = document.getElementById("trades-count-display");

  if (!container || !window.instituteData?.trades) return;

  let activeCategory = "all";

  const renderTrades = () => {
    const query = (searchInput?.value || "").trim().toLowerCase();
    const duration = durationSelect?.value || "all";
    const eligibility = eligibilitySelect?.value || "all";

    const allTrades = window.instituteData.trades;

    const filtered = allTrades.filter(t => {
      // Category match
      const matchCat = activeCategory === "all" || t.category.toLowerCase() === activeCategory.toLowerCase();

      // Duration match
      const matchDur = duration === "all" || 
        (duration === "1" && t.duration.includes("1 Year")) ||
        (duration === "2" && t.duration.includes("2 Year"));

      // Eligibility match
      const matchElig = eligibility === "all" ||
        (eligibility === "8th" && t.eligibility.includes("8th")) ||
        (eligibility === "10th" && (t.eligibility.includes("10th") || t.eligibility.includes("8th")));

      // Search query match across name, description, category, and career
      const matchQuery = !query || 
        t.name.toLowerCase().includes(query) ||
        t.overview.toLowerCase().includes(query) ||
        t.category.toLowerCase().includes(query) ||
        t.careerOpportunities.some(c => c.toLowerCase().includes(query));

      return matchCat && matchDur && matchElig && matchQuery;
    });

    if (countDisplay) {
      countDisplay.textContent = `Showing ${filtered.length} of ${allTrades.length} Trades`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-16 text-center bg-slate-900/50 rounded-2xl border border-slate-800 text-slate-400">
          <i data-lucide="layers" class="w-12 h-12 text-slate-600 mx-auto mb-3"></i>
          <h3 class="text-lg font-bold text-white">No trades match your search filters</h3>
          <p class="text-sm mt-1 max-w-md mx-auto text-slate-400">Clear filters or try searching for keywords like "Electrician", "Lathe", "Welding", or "Computer".</p>
          <button id="reset-trades-btn" class="mt-4 px-4 py-2 bg-sky-500 text-slate-950 font-bold text-xs rounded-lg hover:bg-sky-400 transition-colors">
            Reset All Filters
          </button>
        </div>
      `;
      document.getElementById("reset-trades-btn")?.addEventListener("click", () => {
        if (searchInput) searchInput.value = "";
        if (durationSelect) durationSelect.value = "all";
        if (eligibilitySelect) eligibilitySelect.value = "all";
        activeCategory = "all";
        categoryFilters.forEach(b => {
          b.classList.remove("bg-sky-500", "text-slate-950");
          b.classList.add("bg-slate-800", "text-slate-300");
          if (b.getAttribute("data-filter-category") === "all") {
            b.classList.add("bg-sky-500", "text-slate-950");
            b.classList.remove("bg-slate-800", "text-slate-300");
          }
        });
        renderTrades();
      });
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    container.innerHTML = filtered.map(trade => `
      <div class="industrial-card bg-slate-900 border border-slate-800 hover:border-sky-500/70 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between group">
        <div>
          <!-- Thumbnail with badge -->
          <div class="relative h-48 overflow-hidden bg-slate-950">
            <img src="${trade.image}" alt="${trade.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent"></div>
            
            <div class="absolute top-3 left-3 flex gap-2">
              <span class="px-2.5 py-1 text-[11px] font-bold rounded bg-sky-500 text-slate-950 uppercase tracking-wide">
                ${trade.badge || trade.category}
              </span>
              <span class="px-2.5 py-1 text-[11px] font-semibold rounded bg-slate-950/80 text-sky-300 border border-sky-500/30">
                ${trade.code}
              </span>
            </div>

            <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-200">
              <span class="font-medium flex items-center gap-1 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-700">
                <i data-lucide="clock" class="w-3.5 h-3.5 text-sky-400"></i> ${trade.duration}
              </span>
              <span class="font-medium bg-slate-900/90 px-2 py-0.5 rounded border border-slate-700">
                ${trade.level}
              </span>
            </div>
          </div>

          <!-- Body -->
          <div class="p-6">
            <span class="text-xs font-semibold text-sky-400 uppercase tracking-wider">${trade.type}</span>
            <h3 class="font-heading text-xl font-bold text-white mt-1 group-hover:text-sky-400 transition-colors">
              ${trade.name}
            </h3>
            <p class="text-xs text-slate-400 mt-2.5 line-clamp-3 leading-relaxed">
              ${trade.overview}
            </p>

            <div class="mt-4 pt-4 border-t border-slate-800 space-y-2 text-xs">
              <div class="flex items-start gap-2 text-slate-300">
                <i data-lucide="graduation-cap" class="w-4 h-4 text-sky-400 shrink-0 mt-0.5"></i>
                <span><strong>Eligibility:</strong> ${trade.eligibility}</span>
              </div>
              <div class="flex items-start gap-2 text-slate-400">
                <i data-lucide="wrench" class="w-4 h-4 text-amber-400 shrink-0 mt-0.5"></i>
                <span class="line-clamp-1"><strong>Focus:</strong> ${trade.practicalFocus}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer Actions -->
        <div class="px-6 pb-6 pt-2 flex items-center gap-3">
          <a href="trade.html?id=${trade.id}" class="flex-1 text-center py-2.5 px-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs shadow-md transition-all">
            View Full Curriculum
          </a>
          <button type="button" data-modal-target="enquiry-modal" class="py-2.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors">
            Enquire
          </button>
        </div>
      </div>
    `).join("");

    if (window.lucide) window.lucide.createIcons();
  };

  // Category buttons
  categoryFilters.forEach(btn => {
    btn.addEventListener("click", () => {
      categoryFilters.forEach(b => {
        b.classList.remove("bg-sky-500", "text-slate-950");
        b.classList.add("bg-slate-800", "text-slate-300");
      });
      btn.classList.add("bg-sky-500", "text-slate-950");
      btn.classList.remove("bg-slate-800", "text-slate-300");
      activeCategory = btn.getAttribute("data-filter-category") || "all";
      renderTrades();
    });
  });

  searchInput?.addEventListener("input", renderTrades);
  durationSelect?.addEventListener("change", renderTrades);
  eligibilitySelect?.addEventListener("change", renderTrades);

  renderTrades();
}

/* ==========================================================================
   3. NOTICES & ANNOUNCEMENTS FILTER
   ========================================================================== */
function initNoticesFilter() {
  const container = document.getElementById("notices-list-container");
  const filterButtons = document.querySelectorAll("[data-filter-notice]");
  if (!container || !window.instituteData?.notices) return;

  let activeCategory = "all";

  const renderNotices = () => {
    const all = window.instituteData.notices;
    const filtered = all.filter(n => activeCategory === "all" || n.category.toLowerCase() === activeCategory.toLowerCase());

    container.innerHTML = filtered.map(notice => `
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div class="space-y-1.5 flex-1">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/20">
              ${notice.category}
            </span>
            ${notice.isNew ? '<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-slate-950 animate-pulse">NEW</span>' : ''}
            <span class="text-xs text-slate-500 flex items-center gap-1">
              <i data-lucide="calendar" class="w-3.5 h-3.5"></i> ${notice.date}
            </span>
          </div>
          <h4 class="font-heading text-base font-bold text-white hover:text-sky-400 transition-colors">
            <a href="${notice.link}">${notice.title}</a>
          </h4>
          <p class="text-xs text-slate-400 line-clamp-2">
            ${notice.summary}
          </p>
        </div>
        <div class="shrink-0 flex items-center gap-2 w-full sm:w-auto justify-end">
          <a href="${notice.link}" class="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1 transition-colors">
            <span>Read Details</span>
            <i data-lucide="arrow-right" class="w-3 h-3"></i>
          </a>
        </div>
      </div>
    `).join("");

    if (window.lucide) window.lucide.createIcons();
  };

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => {
        b.classList.remove("bg-sky-500", "text-slate-950");
        b.classList.add("bg-slate-800", "text-slate-300");
      });
      btn.classList.add("bg-sky-500", "text-slate-950");
      btn.classList.remove("bg-slate-800", "text-slate-300");
      activeCategory = btn.getAttribute("data-filter-notice") || "all";
      renderNotices();
    });
  });

  renderNotices();
}
