document.addEventListener("DOMContentLoaded",()=>{
  const items = document.querySelectorAll("[data-animate]");

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("active");
        io.unobserve(entry.target);       // animuje się tylko raz
      }
    });
  },{threshold:.2});  // uruchom gdy 20 % elementu w widoku

  items.forEach(el=>io.observe(el));
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offset = 80; // wysokość nawigacji
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  });
});

const navLinks = document.querySelectorAll("nav .nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  document.querySelectorAll("section[id]").forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) current = section.getAttribute("id");
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

document.querySelectorAll(".price a").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".price");
    card.classList.add("selected");
    setTimeout(() => card.classList.remove("selected"), 1500);
  });
});

document.querySelector("footer").innerHTML =
  `© ${new Date().getFullYear()} JZ Math &nbsp;·&nbsp; NIP __________ &nbsp;·&nbsp; IG @jzmath`;

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});





