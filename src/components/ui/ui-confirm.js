import { html, render } from "lit-html";

/**
 * @element ui-confirm
 *
 * @attr {string} [class]
 */
class UIConfirm extends HTMLElement {
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

customElements.define("ui-confirm", UIConfirm);
