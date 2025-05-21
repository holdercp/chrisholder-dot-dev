import * as CurrentYearComponent from "./components/current-year.js";

const registerComponents = () => {
  CurrentYearComponent.register();
};

document.addEventListener("DOMContentLoaded", registerComponents);
