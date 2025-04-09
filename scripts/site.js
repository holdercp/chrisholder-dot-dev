(function () {
  function ready(fn) {
    if (document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }

  const ANNIVERSARY_YEAR = 2015;
  const XP_YEAR = 2018;

  function updateYears() {
    const date = new Date();

    document.querySelector(
      "[data-copyright]"
    ).textContent = `${date.getFullYear()}`;
    document.querySelector("[data-anniversary]").textContent = `${
      date.getFullYear() - ANNIVERSARY_YEAR
    }`;
    document.querySelector("[data-xp]").textContent = `${
      date.getFullYear() - XP_YEAR - 1
    }`;
  }

  ready(updateYears);
})();
