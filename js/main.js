/**
 * AIS INDUSTRIAL TRAINING INSTITUTE - CORE INTERACTION CONTROLLER
 * Controls mobile navigation, animated counter metrics, accessible accordions,
 * tab switchers, scroll effects, and home showcases.
 */

document.addEventListener("DOMContentLoaded", () => {
  initMobileNavigation();
  initAnimatedCounters();
  initFaqAccordions();
  initTabSwitchers();
  initAosAndSwiper();
  populateHomepageWidgets();
});

// 1. Mobile Navigation Toggle
function initMobileNavigation() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const menuDrawer = document.getElementById("mobile-menu-drawer");
  const iconOpen = document.getElementById("menu-icon-open");
  const iconClose = document.getElementById("menu-icon-close");

  if (!menuBtn || !menuDrawer) return;

  menuBtn.addEventListener("click", () => {
    const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", !isExpanded);
    menuDrawer.classList.toggle("hidden");

    if (iconOpen && iconClose) {
      iconOpen.classList.toggle("hidden");
      iconClose.classList.toggle("hidden");
    }
  });

  // Close drawer if clicking outside
  document.addEventListener("click", (e) => {
    if (!menuBtn.contains(e.target) && !menuDrawer.contains(e.target)) {
      menuDrawer.classList.add("hidden");
      menuBtn.setAttribute("aria-expanded", "false");
      iconOpen?.classList.remove("hidden");
      iconClose?.classList.add("hidden");
    }
  });
}

// 2. Animated Counter Numbers
function initAnimatedCounters() {
  const counters = document.querySelectorAll(".counter-value");
  if (counters.length === 0) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-target") || "0", 10);
        const duration = 1800; // ms
        const startTime = performance.now();

        const updateCount = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(easeOut * target);

          el.textContent = current.toLocaleString();

          if (progress < 1) {
            requestAnimationFrame(updateCount);
          } else {
            el.textContent = target.toLocaleString();
          }
        };

        requestAnimationFrame(updateCount);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(counter => observer.observe(counter));
}

// 3. Accessible FAQ Accordions
function initFaqAccordions() {
  const accordionButtons = document.querySelectorAll(".faq-toggle");
  accordionButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const isExpanded = btn.getAttribute("aria-expanded") === "true";
      const targetId = btn.getAttribute("aria-controls");
      const targetContent = document.getElementById(targetId);

      // Close sibling accordions if within same group
      const parentGroup = btn.closest(".accordion-group");
      if (parentGroup) {
        parentGroup.querySelectorAll(".faq-toggle").forEach(otherBtn => {
          if (otherBtn !== btn) {
            otherBtn.setAttribute("aria-expanded", "false");
            const otherContent = document.getElementById(otherBtn.getAttribute("aria-controls"));
            otherContent?.classList.add("hidden");
          }
        });
      }

      btn.setAttribute("aria-expanded", !isExpanded);
      targetContent?.classList.toggle("hidden");
    });
  });
}

// 4. Tab Switchers (for Eligibility, Documents, etc.)
function initTabSwitchers() {
  const tabContainers = document.querySelectorAll("[data-tabs-container]");
  tabContainers.forEach(container => {
    const tabButtons = container.querySelectorAll("[data-tab-target]");
    const tabPanels = container.querySelectorAll("[data-tab-panel]");

    tabButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-tab-target");

        tabButtons.forEach(b => {
          b.classList.remove("bg-sky-500", "text-slate-950", "border-sky-500");
          b.classList.add("bg-slate-900", "text-slate-400", "border-slate-800");
        });

        btn.classList.add("bg-sky-500", "text-slate-950", "border-sky-500");
        btn.classList.remove("bg-slate-900", "text-slate-400", "border-slate-800");

        tabPanels.forEach(panel => {
          if (panel.getAttribute("data-tab-panel") === targetId) {
            panel.classList.remove("hidden");
          } else {
            panel.classList.add("hidden");
          }
        });
      });
    });
  });
}

// 5. Swiper & AOS Initializer
function initAosAndSwiper() {
  if (window.AOS) {
    window.AOS.init({
      once: true,
      offset: 50,
      duration: 600,
      easing: "ease-out-cubic"
    });
  }

  if (window.Swiper && document.querySelector(".testimonials-swiper")) {
    new window.Swiper(".testimonials-swiper", {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        }
      }
    });
  }
}

// 6. Populate Dynamic Homepage Widgets from Data Store
function populateHomepageWidgets() {
  const data = window.instituteData;
  if (!data) return;

  // Populate Trades Grid on Index
  const homeTradesContainer = document.getElementById("home-trades-preview-grid");
  if (homeTradesContainer && data.trades) {
    homeTradesContainer.innerHTML = data.trades.slice(0, 6).map(trade => `
      <div class="industrial-card bg-slate-900 border border-slate-800 hover:border-sky-500/60 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between group">
        <div>
          <div class="relative h-48 overflow-hidden bg-slate-950">
            <img src="${trade.image}" alt="${trade.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent"></div>
            <span class="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded bg-sky-500 text-slate-950 uppercase tracking-wide">
              ${trade.badge || trade.category}
            </span>
            <span class="absolute bottom-3 right-3 text-xs font-semibold px-2 py-0.5 rounded bg-slate-950/90 text-slate-200 border border-slate-700">
              ${trade.duration}
            </span>
          </div>
          <div class="p-5">
            <span class="text-xs font-semibold text-sky-400 uppercase tracking-wider">${trade.type}</span>
            <h3 class="font-heading text-lg font-bold text-white mt-1 group-hover:text-sky-400 transition-colors">
              ${trade.name}
            </h3>
            <p class="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
              ${trade.overview}
            </p>
            <div class="mt-3 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
              <span><strong>Eligibility:</strong> ${trade.eligibility.split(' ')[0]} Pass</span>
              <span class="text-slate-500">${trade.code}</span>
            </div>
          </div>
        </div>
        <div class="p-5 pt-0 flex items-center gap-2">
          <a href="trade.html?id=${trade.id}" class="flex-1 py-2 px-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs text-center transition-all">
            View Trade
          </a>
          <button type="button" data-modal-target="enquiry-modal" class="py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-colors">
            Enquire
          </button>
        </div>
      </div>
    `).join("");
  }

  // Populate Workshops Cards on Index
  const homeWorkshopsContainer = document.getElementById("home-workshops-preview-grid");
  if (homeWorkshopsContainer && data.workshops) {
    homeWorkshopsContainer.innerHTML = data.workshops.slice(0, 4).map(ws => `
      <div class="industrial-card bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden group">
        <div class="relative h-48 overflow-hidden bg-slate-950">
          <img src="${ws.image}" alt="${ws.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
          <span class="absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded bg-sky-500 text-slate-950 uppercase">
            ${ws.trade}
          </span>
        </div>
        <div class="p-5 space-y-2">
          <h4 class="font-heading text-base font-bold text-white group-hover:text-sky-400 transition-colors">
            ${ws.name}
          </h4>
          <p class="text-xs text-slate-400 line-clamp-2 leading-relaxed">
            ${ws.description}
          </p>
          <div class="pt-2 text-[11px] text-slate-500">
            <strong>Key Tools:</strong> ${ws.equipment.slice(0, 3).join(", ")}
          </div>
        </div>
      </div>
    `).join("");
  }

  // Populate Student Projects on Index
  const homeProjectsContainer = document.getElementById("home-projects-preview-grid");
  if (homeProjectsContainer && data.projects) {
    homeProjectsContainer.innerHTML = data.projects.slice(0, 3).map(p => `
      <div class="industrial-card bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden group flex flex-col justify-between">
        <div>
          <div class="relative h-44 overflow-hidden bg-slate-950">
            <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            <span class="absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500 text-slate-950 uppercase">
              ${p.badge}
            </span>
          </div>
          <div class="p-5 space-y-2">
            <span class="text-[11px] font-bold text-sky-400 uppercase tracking-wider">${p.trade} Trade Project</span>
            <h4 class="font-heading text-base font-bold text-white group-hover:text-sky-400 transition-colors">
              ${p.title}
            </h4>
            <div class="text-xs text-slate-300 space-y-1 pt-1">
              <p><strong class="text-slate-400">Problem:</strong> ${p.problem}</p>
              <p><strong class="text-emerald-400">Solution:</strong> ${p.solution}</p>
            </div>
          </div>
        </div>
        <div class="p-5 pt-0">
          <div class="pt-3 border-t border-slate-800 flex flex-wrap gap-1.5">
            ${p.skills.slice(0, 3).map(s => `
              <span class="px-2 py-0.5 rounded text-[10px] bg-slate-950 text-slate-400 border border-slate-800">${s}</span>
            `).join("")}
          </div>
        </div>
      </div>
    `).join("");
  }

  // Populate Testimonials Swiper / Cards
  const testimonialsContainer = document.getElementById("testimonials-cards-wrapper");
  if (testimonialsContainer && data.testimonials) {
    testimonialsContainer.innerHTML = data.testimonials.map(t => `
      <div class="swiper-slide h-auto">
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-full flex flex-col justify-between shadow-lg relative">
          <div class="space-y-4">
            <div class="flex items-center gap-1 text-amber-400 text-sm">
              <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
            </div>
            <p class="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
              "${t.quote}"
            </p>
          </div>
          <div class="pt-5 mt-5 border-t border-slate-800 flex items-center gap-3">
            <img src="${t.avatar}" alt="${t.name}" class="w-10 h-10 rounded-full object-cover border border-slate-700" />
            <div>
              <h5 class="text-xs font-bold text-white">${t.name}</h5>
              <p class="text-[11px] text-sky-400">${t.role}</p>
            </div>
          </div>
        </div>
      </div>
    `).join("");
  }

  if (window.lucide) window.lucide.createIcons();
}
