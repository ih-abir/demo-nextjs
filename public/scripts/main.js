document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-scroll]");
  if (!btn) return;

  const dir = +btn.dataset.scroll,
    carousel = btn.closest(".carousel-wrapper")?.querySelector(".carousel");
  if (!carousel) return;

  const card = carousel.querySelector(".card"),
    width = card.offsetWidth + parseFloat(getComputedStyle(card).gap || 0),
    max = carousel.scrollWidth - carousel.clientWidth,
    pos = carousel.scrollLeft,
    step = width * Math.abs(dir);

  carousel.scrollTo({
    left: dir > 0
      ? (pos >= max - 1 ? 0 : Math.min(pos + step, max))
      : (pos <= 1 ? max : Math.max(pos - step, 0)),
    behavior:
      (dir > 0 && pos < max - 1) || (dir < 0 && pos > 1)
        ? "smooth"
        : "auto",
  });
});

document.querySelectorAll('.reveal-up').forEach(el=>
  new IntersectionObserver((e,o)=>{
    if(e[0].isIntersecting){
      el.classList.add('visible');
      o.unobserve(el);
    }
  }).observe(el)
);