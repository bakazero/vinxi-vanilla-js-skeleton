import { redirect } from "@/libraries/client.router";
import { $auth } from "@/stores/auth";
import { html } from "lit-html";

export default async function Layout() {
  const auth = $auth.get();
  if (!auth?.token) {
    return redirect("/");
  }

  return html`
    <div class="space-y-4 m-4">
      <header>
        <h1>Header</h1>
        <nav>
          <a href="/dashboard" class="spa text-blue-600 hover:text-blue-400">Dashboard</a>
          <a href="/user" class="spa text-blue-600 hover:text-blue-400">User</a>
          <a href="/" class="spa text-blue-600 hover:text-blue-400">Home</a>
        </nav>
      </header>
      <div id="app-page"></div>
      <footer>Footer</footer>
    </div>
  `;
}
