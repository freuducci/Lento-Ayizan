class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
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
          border-bottom: 1px solid var(--accent);
        }
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 2rem;
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
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
          opacity: 0.2;
        }
.nav-logo {
          font-family: 'Canela', serif;
          font-size: 1.25rem;
          color: var(--gold);
          text-decoration: none;
          letter-spacing: 0.5px;
        }
.nav-links {
          display: flex;
          gap: 2rem;
        }
        .nav-link {
          color: var(--light);
          text-decoration: none;
          font-weight: 400;
          transition: color 0.3s;
          position: relative;
        }
        .nav-link:hover {
          color: var(--gold);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: -2px;
          left: 0;
          background-color: var(--gold);
          transition: width 0.3s;
        }
        .nav-link:hover::after {
          width: 100%;
        }
@media (max-width: 768px) {
          .nav-links {
            display: none;
          }
        }
      </style>
      <nav>
        <a href="/" class="nav-logo">Lento Ayizan</a>
        <div class="nav-links">
          <a href="#works" class="nav-link">Travay</a>
          <a href="#about" class="nav-link">Apwou</a>
          <a href="#contact" class="nav-link">Kontak</a>
</div>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);
