import { html, render } from "lit-html";

/**
 * @element ch-pie
 *
 * @attr {string} [class]
 */
class ChartPie extends HTMLElement {
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

customElements.define("ch-pie", ChartPie);
