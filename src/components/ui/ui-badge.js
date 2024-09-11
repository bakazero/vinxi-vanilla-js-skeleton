import { html, render } from "lit-html";

/**
 * @element ui-badge
 *
 * @attr {string} [class]
 */
class UIBadge extends HTMLElement {
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

customElements.define("ui-badge", UIBadge);
