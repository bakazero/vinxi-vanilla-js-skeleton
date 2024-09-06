import { html } from "lit-html";

export default function Layout() {
  return html`
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
  `;
}
