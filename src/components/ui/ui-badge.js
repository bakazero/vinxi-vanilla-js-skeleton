import { html, render } from "uhtml";

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
    render(this, html``);
  }
}

customElements.define("ui-badge", UIBadge);
