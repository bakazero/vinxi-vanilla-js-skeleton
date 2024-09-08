import { html, render } from "lit-html";
import { cn } from "@/libraries/utilities";

/**
 * @element fo-error
 *
 * @attr {string} name
 * @attr {string} [error]
 * @attr {string} [class]
 */
class FormError extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ["error"];
  }

  connectedCallback() {
    this.renderTemplate();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;
    this.renderTemplate();
  }

  renderTemplate() {
    render(
      html` <p class=${cn("text-red-500 text-xs", this.getAttribute("class"), !this.getAttribute("error") && "hidden")}>${this.getAttribute("error")}</p> `,
      this
    );
  }
}

customElements.define("fo-error", FormError);
