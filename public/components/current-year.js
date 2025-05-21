class CurrentYearComponent extends HTMLElement {
  connectedCallback() {
    const date = new Date();
    this.textContent = date.getFullYear();
  }
}

export const register = () => {
  customElements.define("x-current-year", CurrentYearComponent);
};
