class CustomAltFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: var(--dark);
          border-top: 1px solid var(--gold);
        }
        footer {
          max-width: 1400px;
          margin: 0 auto;
          padding: 4rem 2rem;
          text-align: center;
        }
        
        .footer-logo {
          font-family: 'Canela', serif;
          font-size: 1.5rem;
          color: var(--gold);
          margin-bottom: 2rem;
          display: inline-block;
        }
        
        .footer-social {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .social-link {
          color: var(--gray);
          transition: color 0.3s;
        }
        
        .social-link:hover {
          color: var(--gold);
        }
        
        .footer-nav {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }
        
        .nav-link {
          color: var(--gray);
          text-decoration: none;
          transition: color 0.3s;
        }
        
        .nav-link:hover {
          color: var(--gold);
        }
        
        .copyright {
          color: var(--gray);
          font-size: 0.875rem;
          opacity: 0.7;
        }
      </style>
      <footer>
        <a href="/" class="footer-logo">Lento Ayizan</a>
        
        <div class="footer-social">
          <a href="#" class="social-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="#" class="social-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="#" class="social-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>
        </div>
        
        <div class="footer-nav">
          <a href="#" class="nav-link">Travay</a>
          <a href="#" class="nav-link">Apwou</a>
          <a href="#" class="nav-link">Kontak</a>
          <a href="#" class="nav-link">Magazen</a>
          <a href="#" class="nav-link">Blog</a>
        </div>
        
        <div class="copyright">
          © ${new Date().getFullYear()} Lento Ayizan. Tout dwa rezève.
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-alt-footer', CustomAltFooter);
