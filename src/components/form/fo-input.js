import { html, render } from "lit-html";
import { cn } from "@/libraries/utilities";
import { ifDefined } from "lit-html/directives/if-defined.js";

/**
 * @element fo-input
 *
 * @attr {string} [name]
 * @attr {string} [value]
 * @attr {"text" | "password"} [type]
 * @attr {boolean} [error]
 * @attr {boolean} [disabled]
 * @attr {string} [placeholder]
 * @attr {string} [class]
 */
class FormInput extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ["value", "type", "error", "disabled", "placeholder", "class"];
  }

  connectedCallback() {
    this.renderTemplate();
    this.querySelector("input")?.addEventListener("input", this.handleValueChanged);
  }

  disconnectedCallback() {
    this.querySelector("input")?.removeEventListener("input", this.handleValueChanged);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;
    this.renderTemplate();
  }

  handleValueChanged() {
    this.parentElement.removeAttribute("error");
    document.querySelector(`fo-error[name="${this.getAttribute("name")}"]`)?.removeAttribute("error");
  }

  renderTemplate() {
    render(
      html`
        <input
          id=${ifDefined(this.getAttribute("name"))}
          name=${ifDefined(this.getAttribute("name"))}
          value=${ifDefined(this.getAttribute("value"))}
          .type=${this.getAttribute("type") ?? "text"}
          .disabled=${this.hasAttribute("disabled")}
          .error=${this.hasAttribute("error")}
          placeholder=${ifDefined(this.getAttribute("placeholder"))}
          class=${cn(
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5",
            this.hasAttribute("disabled") && "cursor-not-allowed bg-gray-100",
            this.hasAttribute("error") && "border-red-500 text-red-900",
            this.getAttribute("class")
          )}
          autocomplete="on"
        />
      `,
      this
    );
  }
}

customElements.define("fo-input", FormInput);
