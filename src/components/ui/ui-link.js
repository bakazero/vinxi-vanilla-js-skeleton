import { cn } from "@/libraries/utilities";
import { html, render } from "lit-html";
import { ifDefined } from "lit-html/directives/if-defined.js";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";

/**
 * @element ui-link
 *
 * @attr {string} href
 * @attr {"spa" | "external"} [type]
 * @attr {"_blank"} [target]
 * @attr {string} [class]
 */
class UILink extends HTMLElement {
  constructor() {
    super();
    this.content = this.innerHTML;
    this.innerHTML = "";
  }

  connectedCallback() {
    this.renderTemplate();
  }

  renderTemplate() {
    render(
      html`
        <a
          class=${cn("text-blue-600 hover:text-blue-400", this.getAttribute("class"), this.getAttribute("type") === "spa" && "spa")}
          href=${this.getAttribute("href")}
          target=${ifDefined(this.getAttribute("target"))}
        >
          ${unsafeHTML(this.content)}
        </a>
      `,
      this
    );
  }
}

customElements.define("ui-link", UILink);
