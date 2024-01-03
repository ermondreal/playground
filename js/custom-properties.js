// Async function to define the custom element
async function defineCustomElement() {
    class UgButton extends HTMLElement {
      constructor() {
        super();
  
        // Create a shadow root
        const shadow = this.attachShadow({ mode: 'open' });
  
        // Create a button element
        const button = document.createElement('button');
  
        // Apply styles to the button using a separate style block
        button.innerHTML = `
          <style>
            button {
              padding: 10px 20px;
              background-color: #3498db; /* Default background color */
              color: #fff; /* Default text color */
              font-size: 16px; /* Default font size */
              border: none;
              border-radius: 5px;
              cursor: pointer;
              transition: background-color 0.3s, color 0.3s;
            }
  
            button:hover {
              background-color: #eee; /* Default background color on hover */
              color: #333; /* Default text color on hover */
            }
          </style>
          <slot></slot>
        `;
  
        // Append the button to the shadow root
        shadow.appendChild(button);
      }
  
      connectedCallback() {
        // Set custom styles if provided
        const customization = this.getAttribute('customization');
        const hoverStyles = this.getAttribute('hover');
  
        if (customization) {
          try {
            const styles = JSON.parse(customization);
            const button = this.shadowRoot.querySelector('button');
  
            // Append custom styles to the style tag with default font-size
            this.shadowRoot.querySelector('style').textContent += `
              button {
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
            const button = this.shadowRoot.querySelector('button');
  
            // Append hover styles to the style tag without font-size
            this.shadowRoot.querySelector('style').textContent += `
              button:hover {
                background-color: ${hover['bg-color'] || '#eee'} !important;
                color: ${hover['text-color'] || '#333'} !important;
              }
            `;
          } catch (error) {
            console.error('Invalid hover attribute:', error);
          }
        }
      }
    }
  
    // Define the custom element
    customElements.define('ug-button', UgButton);
  }
  
  // Call the async function to define the custom element
  defineCustomElement();
  