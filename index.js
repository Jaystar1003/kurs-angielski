document.addEventListener("DOMContentLoaded",()=>{
  const items = document.querySelectorAll("[data-animate]");

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("active");
        io.unobserve(entry.target);       // animuje się tylko raz
      }
    });
  },{threshold:.2});  // uruchom, gdy 20% elementu w widoku

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

  const kursSection = document.querySelector("#kurs");
  const kursTop = kursSection.offsetTop;

  document.querySelectorAll("section[id]").forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop - 120 && pageYOffset < sectionTop + sectionHeight - 120) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    const href = link.getAttribute("href");

    // SPECJALNE ZACHOWANIE: wyłącz aktywność "O kursie" jeśli jesteśmy w "Dlaczego ten?"
    if (pageYOffset >= kursTop - 120 && href.includes("okursie")) {
      link.classList.remove("active");
      return;
    }

    link.classList.remove("active");
    if (href.includes(current)) {
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

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    nav.classList.toggle("active");
    burger.classList.toggle("active");
  });
  // Zamknij menu po kliknięciu w link (mobilnie)
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      if (nav.classList.contains("active")) {
        nav.classList.remove("active");
        burger.classList.remove("active");
      }
    });
  });

});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    setTimeout(() => {
      form.reset(); // wyczyść formularz po krótkim czasie
    }, 100); // wystarczy chwila, by wysłać dane
  });
});