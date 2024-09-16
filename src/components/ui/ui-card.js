import { html, render } from "uhtml";

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
    render(this, html``);
  }
}

customElements.define("ui-card", UICard);
