/**
 * AIS INDUSTRIAL TRAINING INSTITUTE - GALLERY & LIGHTBOX SYSTEM
 * Category filtering, responsive grid showcase, and interactive accessible lightbox modal.
 */

const galleryItems = [
  {
    id: 1,
    title: "Electrical Workshop Practical Wiring Bay",
    category: "workshops",
    categoryLabel: "Workshops",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85",
    caption: "Trainees assembling industrial panel wiring with circuit protection breakers and test indicators."
  },
  {
    id: 2,
    title: "Precision Lathe Turning & Bench Work",
    category: "workshops",
    categoryLabel: "Workshops",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=85",
    caption: "Fitter trainees practicing precise tolerance facing and turning on geared center lathe machines."
  },
  {
    id: 3,
    title: "TIG & MIG Welding Practical Booth",
    category: "workshops",
    categoryLabel: "Workshops",
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85",
    caption: "Multi-position arc and gas metal arc welding session with full protective leather safety suits."
  },
  {
    id: 4,
    title: "Modern Networked COPA Computer Lab",
    category: "campus",
    categoryLabel: "Campus",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=85",
    caption: "High-speed workstation lab used for CAD drafting, software fundamentals, and online trade tests."
  },
  {
    id: 5,
    title: "Automotive Engine Diagnostics & OBD Scan",
    category: "students",
    categoryLabel: "Students",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=85",
    caption: "Mechanic Motor Vehicle students connecting digital diagnostic scanners to vehicle test chassis."
  },
  {
    id: 6,
    title: "Electronics SMD Soldering & Waveform Analysis",
    category: "students",
    categoryLabel: "Students",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
    caption: "Students debugging circuit waveforms using digital storage oscilloscopes and SMD hot air rework."
  },
  {
    id: 7,
    title: "Solar Street Light Innovation Prototype",
    category: "projects",
    categoryLabel: "Projects",
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=85",
    caption: "Student-built renewable energy model showcased at the regional vocational skill competition."
  },
  {
    id: 8,
    title: "Civil CAD Drafting & Blueprint Reading",
    category: "projects",
    categoryLabel: "Projects",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85",
    caption: "Draughtsman trainees examining civil construction layouts and structural reinforcement plans."
  },
  {
    id: 9,
    title: "Annual Vocational Skill Exhibition & Demo",
    category: "events",
    categoryLabel: "Events",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85",
    caption: "Industry visitors, alumni, and parents observing working engineering prototypes created by trainees."
  },
  {
    id: 10,
    title: "Guided Industrial Technical Exposure Visit",
    category: "activities",
    categoryLabel: "Activities",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85",
    caption: "Final semester trainees observing automated production lines and industrial safety procedures."
  },
  {
    id: 11,
    title: "Institute Technical Library & Study Center",
    category: "campus",
    categoryLabel: "Campus",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=85",
    caption: "Quiet study hall with NIMI books, Bharat Skills modules, and technical reference manuals."
  },
  {
    id: 12,
    title: "Youth Day Sports & Tug-of-War Competition",
    category: "activities",
    categoryLabel: "Activities",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85",
    caption: "Annual campus athletics and youth festival celebrating teamwork, fitness, and student camaraderie."
  }
];

document.addEventListener("DOMContentLoaded", () => {
  initGallery();
});

function initGallery() {
  const grid = document.getElementById("gallery-grid");
  const filterButtons = document.querySelectorAll("[data-filter-gallery]");
  if (!grid) return;

  let activeCategory = "all";
  let currentIndex = 0;
  let currentFilteredList = [...galleryItems];

  const render = () => {
    currentFilteredList = galleryItems.filter(item => 
      activeCategory === "all" || item.category === activeCategory
    );

    grid.innerHTML = currentFilteredList.map((item, index) => `
      <div class="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-sky-500/70 shadow-lg cursor-pointer industrial-card" data-gallery-index="${index}">
        <div class="h-64 sm:h-72 overflow-hidden bg-slate-950">
          <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
        <div class="absolute bottom-0 inset-x-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
          <span class="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-sky-500 text-slate-950 mb-2">
            ${item.categoryLabel}
          </span>
          <h4 class="font-heading text-base font-bold text-white leading-snug group-hover:text-sky-300 transition-colors">
            ${item.title}
          </h4>
          <p class="text-xs text-slate-300 mt-1 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            ${item.caption}
          </p>
        </div>
        <div class="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur-sm flex items-center justify-center text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity border border-slate-700">
          <i data-lucide="maximize-2" class="w-4 h-4"></i>
        </div>
      </div>
    `).join("");

    if (window.lucide) window.lucide.createIcons();

    // Attach click listeners to open lightbox
    grid.querySelectorAll("[data-gallery-index]").forEach(card => {
      card.addEventListener("click", () => {
        const idx = parseInt(card.getAttribute("data-gallery-index"), 10);
        openLightbox(idx);
      });
    });
  };

  // Filter tab buttons
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => {
        b.classList.remove("bg-sky-500", "text-slate-950");
        b.classList.add("bg-slate-800", "text-slate-300");
      });
      btn.classList.add("bg-sky-500", "text-slate-950");
      btn.classList.remove("bg-slate-800", "text-slate-300");
      activeCategory = btn.getAttribute("data-filter-gallery") || "all";
      render();
    });
  });

  // Lightbox element setup
  setupLightboxModal();

  function openLightbox(index) {
    currentIndex = index;
    updateLightboxContent();
    const lightbox = document.getElementById("gallery-lightbox");
    lightbox?.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function updateLightboxContent() {
    const item = currentFilteredList[currentIndex];
    if (!item) return;

    const img = document.getElementById("lightbox-img");
    const title = document.getElementById("lightbox-title");
    const caption = document.getElementById("lightbox-caption");
    const counter = document.getElementById("lightbox-counter");

    if (img) img.src = item.image;
    if (title) title.textContent = item.title;
    if (caption) caption.textContent = item.caption;
    if (counter) counter.textContent = `${currentIndex + 1} / ${currentFilteredList.length}`;
  }

  function setupLightboxModal() {
    if (document.getElementById("gallery-lightbox")) return;

    const modalHtml = `
      <div id="gallery-lightbox" class="lightbox-overlay" role="dialog" aria-modal="true" aria-label="Image Lightbox">
        <button id="lightbox-close" aria-label="Close Lightbox" class="absolute top-5 right-5 text-slate-400 hover:text-white p-2.5 rounded-full bg-slate-900/80 border border-slate-700 z-50 transition-colors">
          <i data-lucide="x" class="w-6 h-6"></i>
        </button>

        <button id="lightbox-prev" aria-label="Previous image" class="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-slate-300 hover:text-white p-3 rounded-full bg-slate-900/80 border border-slate-700 z-50 transition-all hover:scale-110">
          <i data-lucide="chevron-left" class="w-6 h-6"></i>
        </button>

        <button id="lightbox-next" aria-label="Next image" class="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-slate-300 hover:text-white p-3 rounded-full bg-slate-900/80 border border-slate-700 z-50 transition-all hover:scale-110">
          <i data-lucide="chevron-right" class="w-6 h-6"></i>
        </button>

        <div class="max-w-5xl max-h-[90vh] mx-auto p-4 flex flex-col items-center justify-center">
          <div class="relative max-h-[72vh] overflow-hidden rounded-xl border border-slate-800 shadow-2xl bg-black">
            <img id="lightbox-img" src="" alt="" class="max-h-[70vh] w-auto object-contain mx-auto" />
          </div>
          <div class="mt-4 text-center max-w-2xl px-4">
            <div class="flex items-center justify-center gap-3 mb-1">
              <span id="lightbox-counter" class="text-xs font-mono text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20"></span>
              <h3 id="lightbox-title" class="font-heading text-lg font-bold text-white"></h3>
            </div>
            <p id="lightbox-caption" class="text-xs text-slate-300"></p>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML("beforeend", modalHtml);

    const closeBtn = document.getElementById("lightbox-close");
    const prevBtn = document.getElementById("lightbox-prev");
    const nextBtn = document.getElementById("lightbox-next");
    const lightbox = document.getElementById("gallery-lightbox");

    const close = () => {
      lightbox?.classList.remove("active");
      document.body.style.overflow = "";
    };

    closeBtn?.addEventListener("click", close);
    lightbox?.addEventListener("click", (e) => {
      if (e.target === lightbox) close();
    });

    prevBtn?.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + currentFilteredList.length) % currentFilteredList.length;
      updateLightboxContent();
    });

    nextBtn?.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % currentFilteredList.length;
      updateLightboxContent();
    });

    document.addEventListener("keydown", (e) => {
      if (!lightbox?.classList.contains("active")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prevBtn?.click();
      if (e.key === "ArrowRight") nextBtn?.click();
    });

    if (window.lucide) window.lucide.createIcons();
  }

  render();
}
