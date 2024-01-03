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
            padding: 10px 20px;
            background-color: #3498db; /* Default background color */
            color: #fff; /* Default text color */
            font-size: 16px; /* Default font size */
            text-decoration: none; /* Remove default underline */
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s, color 0.3s;
          }
  
          a:hover {
            background-color: #eee; /* Default background color on hover */
            color: #333; /* Default text color on hover */
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
          const styles = JSON.parse(customization);
          const anchor = this.shadowRoot.querySelector('a');
  
          // Append custom styles to the style tag with default font-size
          this.shadowRoot.querySelector('style').textContent += `
            a {
              background-color: ${styles['bg-color']} !important;
              color: ${styles['text-color']} !important;
              font-size: ${styles['font-size'] || 'inherit'} !important;
            }
          `;
        } catch (error) {
          console.error('Invalid customization attribute:', error);
        }
      }
  
      if (hoverStyles) {
        try {
          const hover = JSON.parse(hoverStyles);
          const anchor = this.shadowRoot.querySelector('a');
  
          // Append hover styles to the style tag without font-size
          this.shadowRoot.querySelector('style').textContent += `
            a:hover {
              background-color: ${hover['bg-color'] || '#eee'} !important;
              color: ${hover['text-color'] || '#333'} !important;
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