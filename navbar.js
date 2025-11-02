/**
 * Custom Navbar Web Component
 * Responsive navigation bar with mobile menu support
 */

class CustomNavbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.setupMobileMenu();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          background-color: rgba(14, 14, 14, 0.9);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--accent, #1A1A1A);
          transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 1.5rem;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          position: relative;
        }

        nav::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold, #D5B982), transparent);
          opacity: 0.2;
        }

        .nav-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          color: var(--gold, #D5B982);
          text-decoration: none;
          letter-spacing: 0.5px;
          transition: opacity 0.3s ease;
          z-index: 10;
        }

        .nav-logo:hover {
          opacity: 0.8;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-link {
          color: var(--light, #F5F3EF);
          text-decoration: none;
          font-weight: 400;
          font-size: 0.95rem;
          transition: color 0.3s ease;
          position: relative;
        }

        .nav-link:hover {
          color: var(--gold, #D5B982);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: -4px;
          left: 0;
          background-color: var(--gold, #D5B982);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        /* Mobile Menu Toggle */
        .mobile-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          z-index: 10;
        }

        .mobile-toggle span {
          width: 24px;
          height: 2px;
          background-color: var(--gold, #D5B982);
          transition: transform 0.3s ease, opacity 0.3s ease;
          display: block;
        }

        .mobile-toggle.active span:nth-child(1) {
          transform: rotate(45deg) translateY(7px);
        }

        .mobile-toggle.active span:nth-child(2) {
          opacity: 0;
        }

        .mobile-toggle.active span:nth-child(3) {
          transform: rotate(-45deg) translateY(-7px);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          nav {
            padding: 1rem 1.5rem;
          }

          .mobile-toggle {
            display: flex;
          }

          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            height: 100vh;
            width: 70%;
            max-width: 300px;
            background-color: rgba(14, 14, 14, 0.98);
            backdrop-filter: blur(12px);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border-left: 1px solid var(--accent, #1A1A1A);
          }

          .nav-links.active {
            right: 0;
          }

          .nav-link {
            font-size: 1.125rem;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .nav-logo {
            font-size: 1.125rem;
          }

          .nav-links {
            width: 80%;
            max-width: none;
          }
        }
      </style>

      <nav>
        <a href="/" class="nav-logo" aria-label="Lento Ayizan Home">Lento Ayizan</a>
        
        <button class="mobile-toggle" aria-label="Toggle mobile menu" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div class="nav-links">
          <a href="#works" class="nav-link">Travay</a>
          <a href="#about" class="nav-link">Apwou</a>
          <a href="#contact" class="nav-link">Kontak</a>
          <a href="https://shop.lentoayizan.com" class="nav-link">Magazen</a>
        </div>
      </nav>
    `;
  }

  setupMobileMenu() {
    const toggle = this.shadowRoot.querySelector('.mobile-toggle');
    const navLinks = this.shadowRoot.querySelector('.nav-links');
    const links = this.shadowRoot.querySelectorAll('.nav-link');

    if (!toggle || !navLinks) return;

    // Toggle menu
    toggle.addEventListener('click', () => {
      const isActive = toggle.classList.toggle('active');
      navLinks.classList.toggle('active');
      toggle.setAttribute('aria-expanded', isActive);
      
      // Prevent body scroll when menu is open
      if (isActive) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });

    // Close menu when clicking links
    links.forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        navLinks.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.contains(e.target)) {
        toggle.classList.remove('active');
        navLinks.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        toggle.classList.remove('active');
        navLinks.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);
