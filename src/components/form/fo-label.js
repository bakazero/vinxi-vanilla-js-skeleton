import { html, render } from "lit-html";
import { cn } from "@/libraries/utilities";

/**
 * @element fo-label
 *
 * @attr {string} label
 * @attr {string} [for]
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
    if (this.hasAttribute("for")) {
      render(
        html`
          <label for=${this.getAttribute("for")} class=${cn("block mb-1 text-sm font-medium text-gray-900 dark:text-white", this.getAttribute("class"))}>
            ${this.getAttribute("label")}
          </label>
        `,
        this
      );
    } else {
      render(
        html`
          <div class=${cn("block mb-1 text-sm font-medium text-gray-900 dark:text-white", this.getAttribute("class"))}>${this.getAttribute("label")}</div>
        `,
        this
      );
    }
  }
}

customElements.define("fo-label", FormLabel);
