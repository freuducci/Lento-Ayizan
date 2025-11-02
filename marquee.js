
class CustomMarquee extends HTMLElement {
  connectedCallback() {
    const speed = this.getAttribute('speed') || '20s';
    const direction = this.getAttribute('direction') || 'left';
    const content = this.innerHTML.trim();
    const items = content.split('\n').filter(item => item.trim() !== '');
    
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          --speed: ${speed};
          --direction: ${direction === 'right' ? -1 : 1};
        }
      </style>
      <div>
        ${items.map(item => `
          <span>${item}</span>
        `).join('')}
        ${items.map(item => `
          <span>${item}</span>
        `).join('')}
      </div>
    `;
  }
}
customElements.define('custom-marquee', CustomMarquee);
