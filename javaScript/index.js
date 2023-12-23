function innitScrollSuave() {
  const linkMenu = document.querySelectorAll(".js-lista-menu a[href^='#']");

  function scrollSuave(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linkMenu.forEach((link) => {
    link.addEventListener("click", scrollSuave);
  });
}

innitScrollSuave()
