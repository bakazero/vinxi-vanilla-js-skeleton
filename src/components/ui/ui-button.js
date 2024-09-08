import { html, render } from "lit-html";
import { cn } from "@/libraries/utilities";

/**
 * @element ui-button
 *
 * @attr {"button" | "submit"} [type]
 * @attr {boolean} [disabled]
 * @attr {string} [class]
 */
class UIButton extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ["disabled", "class", "type"];
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
      html`
        <button
          .type=${this.getAttribute("type") || "button"}
          .disabled=${this.hasAttribute("disabled")}
          class=${cn(
            "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none",
            this.getAttribute("class")
          )}
        >
          ${""}
        </button>
      `,
      this
    );
  }
}

customElements.define("ui-button", UIButton);
