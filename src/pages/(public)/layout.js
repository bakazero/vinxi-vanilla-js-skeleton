import { redirect } from "@/libraries/client.router";
import { $auth } from "@/stores/auth";
import { html } from "lit-html";

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
          <a href="/" class="spa text-blue-600 hover:text-blue-400">Home</a>
          <a href="/about" class="spa text-blue-600 hover:text-blue-400">About</a>
          <a href="/login" class="spa text-blue-600 hover:text-blue-400">Login</a>
        </nav>
      </header>
      <div id="app-page"></div>
      <footer>Footer</footer>
    </div>
  `;
}
