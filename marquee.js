/**
 * Custom Marquee Web Component
 * Infinite scrolling text with configurable speed and direction
 */

class CustomMarquee extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const speed = this.getAttribute('speed') || '20s';
    const direction = this.getAttribute('direction') || 'left';
    const content = this.innerHTML.trim();
    
    // Split content by new lines and filter empty items
    const items = content
      .split('\n')
      .map(item => item.trim())
      .filter(item => item !== '');

    // If no items, provide default content
    const finalItems = items.length > 0 ? items : ['Lento Ayizan', 'Contemporary Art', 'Fòs souvan Lè a'];

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          overflow: hidden;
          position: relative;
          --speed: ${speed};
          --direction: ${direction === 'right' ? 1 : -1};
        }

        .marquee-container {
          display: flex;
          width: max-content;
          animation: marquee var(--speed) linear infinite;
          will-change: transform;
        }

        .marquee-item {
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
          padding: 0 2rem;
          font-family: 'Playfair Display', serif;
          font-size: clamp(1rem, 2.5vw, 1.75rem);
          letter-spacing: 0.05em;
          color: var(--gold, #D5B982);
          font-weight: 300;
          text-shadow: 0 0 10px rgba(213, 185, 130, 0.3);
          opacity: 0.9;
          transition: opacity 0.3s ease;
        }

        .marquee-item:hover {
          opacity: 1;
        }

        .marquee-item::after {
          content: "↗";
          margin-left: 1.5rem;
          opacity: 0.5;
          font-size: 0.8em;
          transform: rotate(45deg);
          display: inline-block;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% * var(--direction, -1)));
          }
        }

        /* Pause animation on hover */
        :host(:hover) .marquee-container {
          animation-play-state: paused;
        }

        /* Responsive font sizing */
        @media (max-width: 640px) {
          .marquee-item {
            padding: 0 1.5rem;
            font-size: 1rem;
          }

          .marquee-item::after {
            margin-left: 1rem;
          }
        }

        /* Reduce motion support */
        @media (prefers-reduced-motion: reduce) {
          .marquee-container {
            animation: none;
          }

          :host {
            overflow-x: auto;
          }
        }
      </style>

      <div class="marquee-container">
        ${finalItems.map(item => `<span class="marquee-item">${item}</span>`).join('')}
        ${finalItems.map(item => `<span class="marquee-item">${item}</span>`).join('')}
      </div>
    `;
  }

  // Update animation when attributes change
  static get observedAttributes() {
    return ['speed', 'direction'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }
}

customElements.define('custom-marquee', CustomMarquee);
