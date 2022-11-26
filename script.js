(() => {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((n) => {
    this.addEventListener("input", (e) => {
      console.error(e.target.value);
      document.documentElement.style.setProperty(
        `--${e.target.name}`,
        `${e.target.value}${e.target.dataset.size}`
      );
    });
  });
})();
