import { html, render } from "lit-html";

/**
 * @element ta-footer
 *
 * @attr {string} [class]
 */
class TableFooter extends HTMLElement {
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

customElements.define("ta-footer", TableFooter);
