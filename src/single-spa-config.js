import { registerApplication, start } from "single-spa";
registerApplication(
  "navigation",
  () => import("./react-mf-navigation.js").then((module) => module.navigation),
  () => true
);
// registerApplication('home', () => import('./src/home/home.app.js'), () => location.pathname === "" || location.pathname === "/" || location.pathname.startsWith('/home'));
start();
