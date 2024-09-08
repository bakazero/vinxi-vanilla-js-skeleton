import { route, handleRoute } from "./libraries/client.router";
import nProgress from "nprogress";

import "./assets/style.css";
import "./assets/nprogress.css";
import "./assets/notify.css";

nProgress.configure({
  showSpinner: false,
  speed: 250,
  trickle: true,
  trickleSpeed: 500,
});

/** @ts-ignore */
window.route = route;
window.onpopstate = handleRoute;

handleRoute();
