import { html, render } from "lit-html";
import { ifDefined } from "lit-html/directives/if-defined.js";
import { cn } from "@/libraries/utilities";

/**
 * @element fo-textarea
 *
 * @attr {string} [name]
 * @attr {string} [value]
 * @attr {boolean} [error]
 * @attr {boolean} [disabled]
 * @attr {string} [placeholder]
 * @attr {string} [class]
 */
class FormTextarea extends HTMLElement {
  constructor() {
    super();
    this.component = null;
  }

  connectedCallback() {
    this.renderTemplate();
    this.component = this.querySelector("textarea");
    this.component.addEventListener("input", this.handleValueChanged);
  }

  disconnectedCallback() {
    this.component.removeEventListener("input", this.handleValueChanged);
  }

  static get observedAttributes() {
    return ["value", "error", "disabled", "class"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (!this.component || oldValue === newValue) return;
    this.renderTemplate();
  }

  handleValueChanged() {
    this.parentElement.removeAttribute("error");
    document.querySelector(`fo-error[name="${this.getAttribute("name")}"]`)?.removeAttribute("error");
  }

  renderTemplate() {
    render(
      html`
        <textarea
          id=${ifDefined(this.getAttribute("name"))}
          name=${ifDefined(this.getAttribute("name"))}
          .value=${this.getAttribute("value")}
          placeholder=${ifDefined(this.getAttribute("placeholder"))}
          class=${cn(
            "outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-400 focus:border-gray-400 block w-full p-2.5",
            "dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-400 dark:focus:border-gray-400",
            this.hasAttribute("disabled") && "cursor-not-allowed bg-gray-100",
            this.hasAttribute("error") && "border-red-500 text-red-900",
            this.getAttribute("class")
          )}
        ></textarea>
      `,
      this
    );
  }
}

customElements.define("fo-textarea", FormTextarea);
