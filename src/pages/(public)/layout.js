import { redirect } from "@/libraries/client.router";
import { $auth } from "@/stores/auth";
import { html } from "lit-html";
import "@/components/ui/ui-link";

export default async function Layout() {
  const auth = $auth.get();
  if (auth?.token) {
    return redirect("/dashboard");
  }

  return html`
    <div class="space-y-4 m-4">
      <header>
        <h1>Header</h1>
        <nav>
          <ui-link href="/" type="spa">Home</ui-link>
          <ui-link href="/about" type="spa">About</ui-link>
          <ui-link href="/login" type="spa">Login</ui-link>
        </nav>
      </header>
      <div id="app-page"></div>
      <footer>Footer</footer>
    </div>
  `;
}
