import { cn } from "@/libraries/utilities";
import { html, render } from "lit-html";
import { ifDefined } from "lit-html/directives/if-defined.js";
import "iconify-icon";
import "./fo-label";

/**
 * @element fo-checkbox
 *
 * @attr {string} [class]
 * @attr {string} [label]
 * @attr {string} [name]
 * @attr {boolean} [checked]
 * @ttr {boolean} [disabled]
 */
class FormCheckbox extends HTMLElement {
  constructor() {
    super();
    this.component = null;
  }

  connectedCallback() {
    this.renderTemplate();
    this.component = this.querySelector("input");
  }

  static get observedAttributes() {
    return ["disabled", "checked", "class"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (!this.component || oldValue === newValue) return;
    this.renderTemplate();
  }

  renderTemplate() {
    render(
      html`
        <div class="relative flex items-center gap-1">
          <input
            type="checkbox"
            name=${ifDefined(this.getAttribute("name"))}
            value=${ifDefined(this.getAttribute("value"))}
            .checked=${this.hasAttribute("checked")}
            .disabled=${this.hasAttribute("disabled")}
            class="sr-only"
          />
          <div
            class=${cn(
              "h-6 w-6 p-2.5 outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-400 focus:border-gray-400",
              "dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-400 dark:focus:border-gray-400",
              "flex items-center justify-center",
              this.hasAttribute("disabled") && "cursor-not-allowed bg-gray-200",
              this.getAttribute("class")
            )}
          >
            ${this.hasAttribute("checked") ? html` <iconify-icon icon="raphael:check" class="text-blue-400" height="16"></iconify-icon> ` : null}
          </div>
          ${this.hasAttribute("label")
            ? html`<div class="cursor-default text-sm font-medium text-gray-900 dark:text-white">${this.getAttribute("label")}</div>`
            : null}
        </div>
      `,
      this
    );

    this.querySelector(".relative").addEventListener(
      "click",
      () => {
        if (this.hasAttribute("disabled")) return;
        this.toggleAttribute("checked");
      },
      { once: true }
    );
  }
}

customElements.define("fo-checkbox", FormCheckbox);
