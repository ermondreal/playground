class UgButton extends HTMLElement {
  constructor() {
    super();

    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });

    // Create an anchor element
    const anchor = document.createElement('a');

    // Apply styles to the anchor using a separate style block
    anchor.innerHTML = `
      <style>
        a {
          display: inline-block;
          padding: 10px 20px;
          background-color: #3498db;
          color: #fff;
          font-size: 16px;
          text-decoration: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s, color 0.3s, padding 0.3s, border 0.3s, border-radius 0.3s;
          border: none;
        }

        a:hover {
          background-color: #eee;
          color: #333;
        }
      </style>
      <slot></slot>
    `;

    // Append the anchor to the shadow root
    shadow.appendChild(anchor);
  }

  connectedCallback() {
    // Set custom styles if provided
    const customization = this.getAttribute('customization');
    const hoverStyles = this.getAttribute('hover');

    if (customization) {
      try {
        // Parse the styles in the new format
        const styles = JSON.parse(customization.replace(/'/g, '"'));
        const anchor = this.shadowRoot.querySelector('a');

        // Append custom styles to the style tag with default font-size
        this.shadowRoot.querySelector('style').textContent += `
          a {
            background-color: ${styles['bg-color']};
            color: ${styles['text-color'] || '#fff'};
            font-size: ${styles['font-size'] || 'inherit'};
            padding: ${styles['padding'] || '10px 20px'};
            border: ${styles['border'] || 'none'};
            border-radius: ${styles['border-radius'] || '5px'};
          }
        `;
      } catch (error) {
        console.error('Invalid customization attribute:', error);
      }
    }

    if (hoverStyles) {
      try {
        // Parse the hover styles in the new format
        const hover = JSON.parse(hoverStyles.replace(/'/g, '"'));
        const anchor = this.shadowRoot.querySelector('a');

        // Append hover styles to the style tag without font-size
        this.shadowRoot.querySelector('style').textContent += `
          a:hover {
            background-color: ${hover['bg-color'] || '#eee'};
            color: ${hover['text-color'] || '#333'};
          }
        `;
      } catch (error) {
        console.error('Invalid hover attribute:', error);
      }
    }

    // Set link if provided
    const link = this.getAttribute('link');
    if (link) {
      const anchor = this.shadowRoot.querySelector('a');
      anchor.href = link;
    }

    // Add click event listener to navigate if a link is provided
    this.addEventListener('click', () => {
      const anchor = this.shadowRoot.querySelector('a');
      if (anchor.href) {
        window.location.href = anchor.href;
      }
    });
  }
}

// Define the custom element
customElements.define('ug-button', UgButton);
