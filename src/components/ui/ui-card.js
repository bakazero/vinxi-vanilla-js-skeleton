import { html, render } from "lit-html";

/**
 * @element ui-card
 *
 * @attr {string} [class]
 */
class UICard extends HTMLElement {
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

customElements.define("ui-card", UICard);
