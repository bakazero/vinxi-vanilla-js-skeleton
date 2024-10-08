import { create, registerPlugin } from "filepond";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import { html, render } from "uhtml";

registerPlugin(FilePondPluginFileValidateType);

/**
 * @element fo-file
 *
 * @attr {string} [name]
 * @attr {string} [accept]
 * @attr {boolean} [error]
 * @attr {boolean} [disabled]
 * @attr {string} [placeholder]
 */
class FormFile extends HTMLElement {
  constructor() {
    super();
    this.component = null;
    this.filepond = null;
  }

  connectedCallback() {
    this.renderTemplate();
    this.component.addEventListener("FilePond:addfile", () => this.handleValueChanged());
  }

  disconnectedCallback() {
    this.component.removeEventListener("FilePond:addfile", () => this.handleValueChanged());
  }

  static get observedAttributes() {
    return ["error", "disabled"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (!this.component || oldValue === newValue) return;
    if (name === "error") this.handleError();
    if (name === "disabled") this.handleDisabled();
  }

  handleValueChanged(name) {
    this.removeAttribute("error");
    document.querySelector(`fo-error[name="${this.getAttribute("name")}"]`)?.removeAttribute("error");
  }

  handleError() {
    if (this.hasAttribute("error")) this.component.classList.add("error");
    else this.component.classList.remove("error");
  }

  handleDisabled() {
    if (this.hasAttribute("disabled")) this.filepond.disabled = true;
    else this.filepond.disabled = false;
  }

  renderTemplate() {
    render(this, html` <input type="file" name=${this.getAttribute("name")} accept=${this.getAttribute("accept")} /> `);

    this.filepond = create(this.querySelector("input"), {
      storeAsFile: true,
      credits: false,
    });

    this.component = this.filepond.element;

    this.handleError();
    this.handleDisabled();
  }
}

customElements.define("fo-file", FormFile);
