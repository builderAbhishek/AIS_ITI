/**
 * AIS INDUSTRIAL TRAINING INSTITUTE - FORMS & VALIDATION SYSTEM
 * Handles frontend validation, demo submission handlers, WhatsApp query generators,
 * and ethical non-misleading toast notifications for admission and job forms.
 */

document.addEventListener("DOMContentLoaded", () => {
  setupFormHandlers();
  initToastContainer();
});

function initToastContainer() {
  if (document.getElementById("toast-container")) return;
  const container = document.createElement("div");
  container.id = "toast-container";
  document.body.appendChild(container);
}

// Show accessible, clean toast notification
function showToast(title, message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("role", "status");
  toast.setAttribute("aria-live", "polite");

  const borderColor = type === "success" ? "border-sky-500" : "border-amber-500";
  const iconName = type === "success" ? "check-circle" : "alert-circle";
  const iconColor = type === "success" ? "text-sky-400" : "text-amber-400";

  toast.innerHTML = `
    <div class="flex items-start gap-3">
      <i data-lucide="${iconName}" class="w-5 h-5 ${iconColor} shrink-0 mt-0.5"></i>
      <div class="space-y-1 flex-1">
        <h5 class="font-heading text-sm font-bold text-white">${title}</h5>
        <p class="text-xs text-slate-300 leading-relaxed">${message}</p>
      </div>
      <button type="button" class="text-slate-400 hover:text-white p-1" aria-label="Dismiss toast">
        <i data-lucide="x" class="w-4 h-4"></i>
      </button>
    </div>
  `;

  container.appendChild(toast);
  if (window.lucide) window.lucide.createIcons();

  // Animate in
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  const dismiss = () => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  };

  toast.querySelector("button")?.addEventListener("click", dismiss);

  // Auto dismiss after 6 seconds
  setTimeout(dismiss, 6000);
}

// Global form submit listeners
function setupFormHandlers() {
  // 1. Universal Admission Modal Form
  const modalForm = document.getElementById("global-enquiry-form");
  if (modalForm) {
    modalForm.addEventListener("submit", (e) => {
      e.preventDefault();
      handleAdmissionSubmission(modalForm, true);
    });
  }

  // 2. Inline Admissions Page Form
  const admissionsPageForm = document.getElementById("inline-admission-form");
  if (admissionsPageForm) {
    admissionsPageForm.addEventListener("submit", (e) => {
      e.preventDefault();
      handleAdmissionSubmission(admissionsPageForm, false);
    });
  }

  // 3. Contact Page Form
  const contactForm = document.getElementById("contact-page-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const name = formData.get("name") || "Visitor";
      
      showToast(
        "Message Recorded (Demo Mode)",
        `Thank you ${name}. Your message has been received in demo preview. In live deployment, this forwards directly to ${window.instituteConfig?.email || 'institute email'} or WhatsApp.`,
        "success"
      );
      contactForm.reset();
    });
  }

  // 4. Careers Page Job Application Form
  const careerForm = document.getElementById("career-application-form");
  if (careerForm) {
    careerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(careerForm);
      const name = formData.get("applicantName") || "Applicant";
      const position = formData.get("position") || "Staff";

      showToast(
        "Application Logged (Demo Mode)",
        `Thank you ${name}. Your application for "${position}" has been logged in demo mode. Connect backend / mailto handler to process real resumes.`,
        "success"
      );
      careerForm.reset();
      window.closeModal && window.closeModal("job-application-modal");
    });
  }
}

function handleAdmissionSubmission(form, isModal = false) {
  const formData = new FormData(form);
  const studentName = formData.get("studentName") || "Candidate";
  const mobile = formData.get("mobile") || "";
  const trade = formData.get("trade") || "Selected Trade";

  // Demo feedback
  showToast(
    "Admission Enquiry Logged (Demo Mode)",
    `Thank you, ${studentName}. Your interest in the ${trade} trade has been noted. This demo website is ready to link with your CRM or WhatsApp API.`,
    "success"
  );

  form.reset();

  if (isModal && window.closeModal) {
    window.closeModal("enquiry-modal");
  }
}

// Make available globally
window.showToast = showToast;
