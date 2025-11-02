/**
 * Custom Alternative Footer Web Component
 * Centered layout with social links and navigation
 */

class CustomAltFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const currentYear = new Date().getFullYear();

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: var(--dark, #0E0E0E);
          border-top: 1px solid var(--gold, #D5B982);
        }

        footer {
          max-width: 1400px;
          margin: 0 auto;
          padding: 3rem 1.5rem;
          text-align: center;
        }

        .footer-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          color: var(--gold, #D5B982);
          margin-bottom: 2rem;
          display: inline-block;
          text-decoration: none;
          transition: opacity 0.3s ease;
        }

        .footer-logo:hover {
          opacity: 0.8;
        }

        .footer-social {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .social-link {
          color: var(--gray, #C6C6C6);
          transition: color 0.3s ease, transform 0.3s ease;
          display: inline-flex;
        }

        .social-link:hover {
          color: var(--gold, #D5B982);
          transform: translateY(-3px);
        }

        .social-link svg {
          width: 24px;
          height: 24px;
        }

        .footer-nav {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .nav-link {
          color: var(--gray, #C6C6C6);
          text-decoration: none;
          transition: color 0.3s ease;
          font-size: 0.95rem;
        }

        .nav-link:hover {
          color: var(--gold, #D5B982);
        }

        .copyright {
          color: var(--gray, #C6C6C6);
          font-size: 0.875rem;
          opacity: 0.7;
          margin-top: 1rem;
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          footer {
            padding: 2.5rem 1rem;
          }

          .footer-logo {
            font-size: 1.25rem;
            margin-bottom: 1.5rem;
          }

          .footer-social {
            gap: 1.25rem;
            margin-bottom: 1.5rem;
          }

          .social-link svg {
            width: 22px;
            height: 22px;
          }

          .footer-nav {
            gap: 1rem;
            margin-bottom: 1.5rem;
          }

          .nav-link {
            font-size: 0.875rem;
          }
        }

        /* Accessibility */
        .social-link:focus-visible,
        .nav-link:focus-visible,
        .footer-logo:focus-visible {
          outline: 2px solid var(--gold, #D5B982);
          outline-offset: 4px;
        }
      </style>

      <footer>
        <a href="/" class="footer-logo" aria-label="Lento Ayizan Home">Lento Ayizan</a>

        <div class="footer-social" role="navigation" aria-label="Social media links">
          <a href="https://facebook.com/lentoayizan" class="social-link" aria-label="Visit our Facebook page" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="https://instagram.com/lentoayizan" class="social-link" aria-label="Visit our Instagram page" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="https://twitter.com/lentoayizan" class="social-link" aria-label="Visit our Twitter page" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>
        </div>

        <nav class="footer-nav" aria-label="Footer navigation">
          <a href="#works" class="nav-link">Travay</a>
          <a href="#about" class="nav-link">Apwou</a>
          <a href="#contact" class="nav-link">Kontak</a>
          <a href="https://shop.lentoayizan.com" class="nav-link">Magazen</a>
          <a href="/blog" class="nav-link">Blog</a>
        </nav>

        <div class="copyright">
          © ${currentYear} Lento Ayizan. Tout dwa rezève.
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-alt-footer', CustomAltFooter);
