import { html, render } from "lit-html";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
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
    this.content = this.innerHTML;
    this.innerHTML = "";
  }

  connectedCallback() {
    this.renderTemplate();
  }

  static get observedAttributes() {
    return ["disabled", "class", "type"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;
    this.renderTemplate();
  }

  renderTemplate() {
    render(
      html`
        <button
          class=${cn(
            "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
            this.hasAttribute("disabled") && "cursor-not-allowed bg-blue-500",
            this.getAttribute("class")
          )}
        >
          ${unsafeHTML(this.content)}
        </button>
      `,
      this
    );

    this.querySelector("button").setAttribute("type", this.getAttribute("type") || "button");
  }
}

customElements.define("ui-button", UIButton);
