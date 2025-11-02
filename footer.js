class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: var(--dark);
          border-top: 1px solid var(--accent);
        }
        footer {
          max-width: 1400px;
          margin: 0 auto;
          padding: 4rem 2rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 3rem;
          position: relative;
        }
        
        footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
          opacity: 0.2;
        }
.footer-title {
          font-family: 'Canela', serif;
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
          display: block;
          color: var(--gold);
        }
.footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-link {
          color: var(--gray);
          text-decoration: none;
          transition: color 0.3s;
        }
        .footer-link:hover {
          color: var(--gold);
        }
        .copyright {
          grid-column: 1 / -1;
          text-align: center;
          color: var(--gray);
          margin-top: 3rem;
          padding-top: 3rem;
          border-top: 1px solid var(--accent);
        }
</style>
      <footer>
        <div>
          <span class="footer-title">Lento Ayizan</span>
          <div class="footer-links">
            <a href="#" class="footer-link">Apwou</a>
            <a href="#" class="footer-link">Travay</a>
            <a href="#" class="footer-link">Apròch</a>
</div>
        </div>
        <div>
          <span class="footer-title">Connect</span>
          <div class="footer-links">
            <a href="#" class="footer-link">Instagram</a>
            <a href="#" class="footer-link">Behance</a>
            <a href="#" class="footer-link">LinkedIn</a>
</div>
        </div>
        <div>
          <span class="footer-title">Contact</span>
          <div class="footer-links">
            <a href="mailto:hello@lentoayizan.com" class="footer-link">Imèl</a>
            <a href="tel:+1234567890" class="footer-link">Telefòn</a>
            <a href="#" class="footer-link">Vizite</a>
</div>
        </div>
        <div class="copyright">
          © ${new Date().getFullYear()} Lento Ayizan. Tout dwa rezève.
</div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);
