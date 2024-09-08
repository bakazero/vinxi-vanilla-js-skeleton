import { html, render } from "lit-html";
import { cn } from "@/libraries/utilities";
import { ifDefined } from "lit-html/directives/if-defined.js";

/**
 * @element fo-label
 *
 * @attr {string} for
 * @attr {string} label
 * @attr {string} [class]
 */
class FormLabel extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.renderTemplate();
  }

  renderTemplate() {
    render(
      html`
        <label for=${ifDefined(this.getAttribute("for"))} class=${cn("block mb-2 text-sm font-medium text-gray-900", this.getAttribute("class"))}>
          ${this.getAttribute("label")}
        </label>
      `,
      this
    );
  }
}

customElements.define("fo-label", FormLabel);
