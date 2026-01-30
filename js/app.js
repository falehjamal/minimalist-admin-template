/**
 * Admin Dashboard - Main JavaScript
 * Handles navigation, interactive components, and UI behavior
 */

document.addEventListener('DOMContentLoaded', () => {
  initSidebar();
  initDropdowns();
  initAccordions();
  initModals();
  initDismissibles();
});

/**
 * Sidebar Navigation
 * Handles mobile toggle and active state
 */
function initSidebar() {
  const sidebar = document.querySelector('.app__sidebar');
  const overlay = document.querySelector('.app__overlay'); // Need to add this to HTML
  const toggleBtn = document.querySelector('[data-toggle="sidebar"]');
  
  if (!sidebar || !toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('is-visible');
    if (overlay) overlay.classList.toggle('is-visible');
  });

  if (overlay) {
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('is-visible');
      overlay.classList.remove('is-visible');
    });
  }
}

/**
 * Dropdown Menus
 * Handles showing/hiding dropdowns on click
 */
function initDropdowns() {
  const dropdowns = document.querySelectorAll('.dropdown');
  
  dropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector('.dropdown__trigger');
    const menu = dropdown.querySelector('.dropdown__menu');
    
    if (!trigger || !menu) return;
    
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      
      // Close other dropdowns
      dropdowns.forEach(d => {
        if (d !== dropdown) d.classList.remove('is-active');
      });
      
      dropdown.classList.toggle('is-active');
    });
  });
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove('is-active');
      });
    }
  });
}

/**
 * Accordions
 * Handles expanding/collapsing accordion items
 */
function initAccordions() {
  const accordions = document.querySelectorAll('.accordion');
  
  accordions.forEach(accordion => {
    const items = accordion.querySelectorAll('.accordion__item');
    
    items.forEach(item => {
      const trigger = item.querySelector('.accordion__trigger');
      
      if (!trigger) return;
      
      trigger.addEventListener('click', () => {
        // Toggle current item
        item.classList.toggle('is-open');
        
        // Optional: Close others if it's an "exclusive" accordion
        // items.forEach(i => {
        //   if (i !== item) i.classList.remove('is-open');
        // });
      });
    });
  });
}

/**
 * Modals
 * Handles opening and closing modal dialogs
 */
function initModals() {
  const triggers = document.querySelectorAll('[data-modal-target]');
  const closers = document.querySelectorAll('[data-modal-close], .modal__backdrop');
  
  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const modalId = trigger.getAttribute('data-modal-target');
      openModal(modalId);
    });
  });
  
  closers.forEach(closer => {
    closer.addEventListener('click', () => {
      const modal = closer.closest('.modal');
      if (modal) {
        closeModal(modal.id);
      } else {
        // Fallback for backdrop if it's not inside .modal (depends on structure)
        // But usually backdrop is inside .modal or .modal IS the backdrop wrapper
        // Our CSS structure: .modal (fixed wrapper) -> .modal__backdrop + .modal__content
        // So clicking backdrop calls this.
      }
    });
  });
  
  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const openModal = document.querySelector('.modal.is-open');
      if (openModal) closeModal(openModal.id);
    }
  });
}

// Global modal helpers
window.openModal = function(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
};

window.closeModal = function(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }
};

/**
 * Dismissible Alerts
 */
function initDismissibles() {
  const dismissibles = document.querySelectorAll('[data-dismiss]');
  
  dismissibles.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const target = trigger.closest(trigger.getAttribute('data-dismiss')) || trigger.parentElement;
      target.style.opacity = '0';
      setTimeout(() => target.remove(), 300);
    });
  });
}
