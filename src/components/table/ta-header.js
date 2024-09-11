import { html, render } from "lit-html";

/**
 * @element ta-header
 *
 * @attr {string} [class]
 */
class TableHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.renderTemplate();
  }

  renderTemplate() {
    render(html``, this);
  }
}

customElements.define("ta-header", TableHeader);
