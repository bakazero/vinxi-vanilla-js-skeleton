import { html, render } from "lit-html";

/**
 * @element ui-pagination
 *
 * @attr {string} [class]
 */
class UIPagination extends HTMLElement {
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

customElements.define("ui-pagination", UIPagination);
