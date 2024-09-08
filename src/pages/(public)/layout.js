import { html } from "lit-html";

export default async function Layout() {
  return html`
    <div class="space-y-4 m-4">
      <header>
        <h1>Header</h1>
        <nav>
          <a href="/" class="spa text-blue-600 hover:text-blue-400">Home</a>
          <a href="/about" class="spa text-blue-600 hover:text-blue-400">About</a>
          <a href="/login" class="spa text-blue-600 hover:text-blue-400">Login</a>
          <a href="/dashboard" class="spa text-blue-600 hover:text-blue-400">Dashboard</a>
        </nav>
      </header>
      <div id="app-page"></div>
      <footer>Footer</footer>
    </div>
  `;
}
