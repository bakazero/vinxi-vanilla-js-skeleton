import { html } from "lit-html";
import { toast } from "@/libraries/utilities";
import "@/components/ui/ui-button";
import "@/components/form/fo-input";
import "@/components/form/fo-select";
import "@/components/form/fo-label";
import "@/components/form/fo-error";
import "@/components/form/fo-textarea";
import "@/components/form/fo-file";

export const MetaTitle = "Form";

export default async function Page() {
  return html`
    <h1 class="text-lg font-bold">${MetaTitle}</h1>

    <form id="form-form" class="my-4 grid grid-cols-2 gap-x-6 gap-y-3 max-w-5xl">
      <div>
        <fo-label for="textInput" label="Text Input"></fo-label>
        <fo-input name="textInput" placeholder="Text..."></fo-input>
        <fo-error name="textInput"></fo-error>
      </div>
      <div>
        <fo-label for="password" label="Password Input"></fo-label>
        <fo-input name="password" type="password"></fo-input>
        <fo-error name="password"></fo-error>
      </div>
      <div>
        <fo-label for="numberInput" label="Number Input"></fo-label>
        <fo-input name="numberInput" type="number" min="20" max="100" step="5" placeholder="20 ... 100" value="20"></fo-input>
        <fo-error name="numberInput"></fo-error>
      </div>
      <div></div>
      <div>
        <fo-label for="select" label="Select Clear"></fo-label>
        <fo-select name="select" placeholder="Choose one...">
          <option value="_clear">Clear...</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </fo-select>
        <fo-error name="select"></fo-error>
      </div>
      <div>
        <fo-label for="select2" label="Select Default Value"></fo-label>
        <fo-select name="select2" placeholder="Choose one...">
          <option value="option1">Option 1</option>
          <option value="option2" selected>Option 2</option>
          <option value="option3">Option 3</option>
        </fo-select>
        <fo-error name="select2"></fo-error>
      </div>
      <div class="col-span-2">
        <fo-label for="textArea" label="Textarea"></fo-label>
        <fo-textarea
          class="min-h-24"
          name="textArea"
          placeholder="Write something..."
          value="Culpa voluptate ea veniam do sint amet eiusmod est deserunt. Aute sunt elit id commodo exercitation Lorem aliqua consequat cillum fugiat cillum dolore nostrud proident. Minim eiusmod id dolore laborum mollit aliqua et tempor mollit. Esse do eiusmod incididunt magna tempor cillum ipsum esse eu consequat consectetur nostrud proident. Magna fugiat cillum qui reprehenderit est do excepteur consectetur laboris."
        ></fo-textarea>
        <fo-error name="textArea"></fo-error>
      </div>
      <div class="col-span-2">
        <fo-label label="File Upload"></fo-label>
        <fo-file name="fileUpload"></fo-file>
        <fo-error name="fileUpload"></fo-error>
      </div>
      <div class="col-span-2">
        <ui-button type="submit">Submit</ui-button>
      </div>
    </form>
  `;
}

export const Script = async () => {
  const form = document.getElementById("form-form");
  if (form instanceof HTMLFormElement) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(form);

      if (!formValidation(form, formData)) return;

      toast.success("Success submit form");
    });
  }
};

/**
 * @param  {HTMLFormElement} form
 * @param  {FormData} data
 */
const formValidation = (form, data) => {
  let error = false;

  const json = Object.fromEntries(data.entries());
  console.log(json);

  if (!data.get("textInput")) {
    form.querySelectorAll("[name='textInput']").forEach((element) => element.setAttribute("error", "This field is required"));
    error = true;
  }

  if (!data.get("password")) {
    form.querySelectorAll("[name='password']").forEach((element) => element.setAttribute("error", "This field is required"));
    error = true;
  }

  if (!data.get("numberInput")) {
    form.querySelectorAll("[name='numberInput']").forEach((element) => element.setAttribute("error", "This field is required"));
    error = true;
  }

  if (!data.get("select") || data.get("select") === "_clear") {
    form.querySelectorAll("[name='select']").forEach((element) => element.setAttribute("error", "This field is required"));
    error = true;
  }

  if (!data.get("textArea")) {
    form.querySelectorAll("[name='textArea']").forEach((element) => element.setAttribute("error", "This field is required"));
    error = true;
  }

  form.querySelectorAll("[name='fileUpload']").forEach((elm) => {
    if (elm instanceof HTMLInputElement && !elm.files[0]) {
      form.querySelectorAll("[name='fileUpload']").forEach((element) => element.setAttribute("error", "This field is required"));
      error = true;
    }
  });

  return !error;
};
