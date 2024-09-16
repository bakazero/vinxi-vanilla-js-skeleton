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
          ?disabled=${this.hasAttribute("disabled")}
          class=${cn(
            "text-white bg-blue-700 hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none",
            "disabled:cursor-not-allowed disabled:bg-blue-400 disabled:hover:bg-blue-400",
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
