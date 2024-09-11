import { html, render } from "lit-html";

/**
 * @element ch-bar
 *
 * @attr {string} [class]
 */
class ChartBar extends HTMLElement {
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

customElements.define("ch-bar", ChartBar);
