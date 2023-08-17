require('@testing-library/jest-dom/extend-expect');

test('button click logs message', () => {
  // Define your component inside the test because customElements.define can only be called once
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

  // Create a new instance of your component
  const element = document.createElement('lucid-button');
  element.setAttribute('label', 'Click me');
  document.body.appendChild(element);

  // Mock console.log
  console.log = jest.fn();

  // Click the button
  element.shadowRoot.querySelector('button').click();

  // Assert that console.log was called with the correct arguments
  expect(console.log).toHaveBeenCalledWith('Button clicked!', expect.anything());
});
