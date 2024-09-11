import { html, render } from "lit-html";

/**
 * @element ta-head
 *
 * @attr {string} [class]
 */
class TableHead extends HTMLElement {
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

customElements.define("ta-head", TableHead);
