import { html, render } from "uhtml";
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
    this.component = null;
    this.content = Array.from(this.childNodes);
  }

  connectedCallback() {
    this.renderTemplate();
  }

  static get observedAttributes() {
    return ["disabled", "type", "class"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (!this.component || oldValue === newValue) return;
    this.renderTemplate();
  }

  renderTemplate() {
    render(
      this,
      html`
        <button
          class=${cn(
            "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none",
            this.hasAttribute("disabled") && "cursor-not-allowed bg-blue-500",
            this.getAttribute("class")
          )}
        >
          ${this.content}
        </button>
      `
    );

    this.component = this.querySelector("button");
    this.component.setAttribute("type", this.getAttribute("type") || "button");
  }
}

customElements.define("ui-button", UIButton);
