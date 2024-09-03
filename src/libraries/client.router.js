import fileRoutes from "vinxi/routes";
import { simpleHash } from "./utilities";

const routes = fileRoutes.map((route) => ({
  path: route.path,
  type: route.path.includes("/layout") ? "layout" : "route",
  hash: simpleHash(route.path),
  component: route.$component,
  uri: route.path
    .replace(/\(.*?\)\//g, "")
    .replace(/index\//g, "")
    .replace(/route$/, "")
    .replace(/\/+$/, ""),
}));

const findLayout = (path) => {
  return routes.filter((route) => route.uri.includes("/layout")).find((layout) => path.startsWith(layout.path.replace("/layout", "")));
};

const findRoute = (path) => {
  return routes.filter((route) => !route.uri.includes("/layout")).find((route) => (route.uri || "/") === path);
};

const loadModule = async (component, module) => {
  const appElement = document.getElementById("app");
  const contentElement = document.getElementById("content");

  if (component.type === "404") {
    appElement.setAttribute("data-hash", component.hash);
    if (module.MetaTitle) document.title = await module.MetaTitle;
    if ((module.default() ?? "").length > 0) appElement.innerHTML = await module.default();
    if (module.Script) await module.Script();
    return;
  }

  if (component.type === "layout") {
    const hash = appElement?.getAttribute("data-hash");
    if (component.hash === hash) return;
    if ((module.default() ?? "").length > 0) appElement.innerHTML = await module.default();
    if (module.Script) await module.Script();
    appElement.setAttribute("data-hash", component.hash);
    return;
  }

  if (component.hash === appElement?.getAttribute("data-hash") || component.hash === contentElement?.getAttribute("data-hash")) return;

  if (module.MetaTitle) document.title = await module.MetaTitle;
  if ((module.default() ?? "").length > 0) {
    if (contentElement) {
      contentElement.innerHTML = await module.default();
      contentElement.setAttribute("data-hash", component.hash);
    } else {
      appElement.innerHTML = await module.default();
      appElement.setAttribute("data-hash", component.hash);
    }
  }
  if (module.Script) await module.Script();
};

export const handleRoute = async () => {
  const path = window.location.pathname;
  const routeComponent = findRoute(path);

  if (!routeComponent) {
    const p404Component = routes.find((route) => route.uri === "/404");
    p404Component.type = "404";
    const p404Module = p404Component.component.build ? await p404Component.component.build() : await import(/* @vite-ignore */ p404Component.component.src);
    await loadModule(p404Component, p404Module);
    return;
  }

  const layoutComponent = findLayout(routeComponent.path);

  if (layoutComponent) {
    const layoutModule = layoutComponent.component.build
      ? await layoutComponent.component.build()
      : await import(/* @vite-ignore */ layoutComponent.component.src);
    await loadModule(layoutComponent, layoutModule);
  }

  const routeModule = routeComponent.component.build ? await routeComponent.component.build() : await import(/* @vite-ignore */ routeComponent.component.src);
  await loadModule(routeComponent, routeModule);
};
