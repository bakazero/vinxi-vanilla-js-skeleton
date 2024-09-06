import "./assets/style.css";
import { route, handleRoute } from "./libraries/client.router";

/** @ts-ignore */
window.route = route;
window.onpopstate = handleRoute;

handleRoute();
