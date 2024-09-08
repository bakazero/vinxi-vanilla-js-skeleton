import { html } from "lit-html";
import "@/components/form/fo-input";
import "@/components/form/fo-label";
import "@/components/form/fo-error";
import { redirect } from "@/libraries/client.router";

export const MetaTitle = "Login";

export default async function Page() {
  return html`
    <div>
      <h1 class="text-lg font-bold">Login</h1>
      <form id="login-form" class="my-4 space-y-4">
        <div>
          <fo-label for="username" label="Username"></fo-label>
          <fo-input name="username"></fo-input>
          <fo-error name="username"></fo-error>
        </div>
        <div>
          <fo-label for="password" label="Password"></fo-label>
          <fo-input name="password" type="password" value="12345"></fo-input>
          <fo-error name="password"></fo-error>
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  `;
}

export const Script = async () => {
  const form = document.getElementById("login-form");
  if (form instanceof HTMLFormElement) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const data = new FormData(form);

      if (!formValidation(form, data)) return;

      console.log("lolos");

      redirect("/dashboard");
    });
  }
};

/**
 * @param  {HTMLFormElement} form
 * @param  {FormData} data
 */
const formValidation = (form, data) => {
  let error = false;

  const username = data.get("username");
  const password = data.get("password");

  if (!username) {
    form.querySelectorAll("[name='username']").forEach((element) => element.setAttribute("error", "Username is required"));
    error = true;
  }

  if (!password) {
    form.getElementById("password").setAttribute("error", "");
    error = true;
  }

  return !error;
};
