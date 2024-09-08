import { html, render } from "lit-html";
import { cn } from "@/libraries/utilities";

/**
 * @element fo-input
 *
 * @attr {string} class
 * @attr {boolean} error
 */
class FormInput extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ["class", "error"];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    render(
      html`
        <input
          class=${cn(
            "border border-slate-500 w-full",
            this.getAttribute("class"),
            {
              "border-red-500": this.hasAttribute("error"),
            },
            "rounded-md p-2"
          )}
          value=${this.getAttribute("value")}
        />
      `,
      this
    );
  }
}

customElements.define("fo-input", FormInput);
