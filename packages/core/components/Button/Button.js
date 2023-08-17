class Button extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    
    const style = document.createElement('style');
    style.textContent = `
      button {
        padding: 8px 16px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1em;
      }

      button:hover {
        background-color: #0056b3;
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(button);
    
    if(this.getAttribute('label')) {
      button.innerText = this.getAttribute('label');
    }

    this.addEventListener('click', e => this.handleClick(e));
  }

  handleClick(e) {
    console.log('Button clicked!', e);
  }
}

customElements.define('lucid-button', Button);

export default Button;
  