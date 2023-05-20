//CAMBIO DE VALORES DEL NAVBAR REFERENTE A LA POSICION DEL SCROLL
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const logo = document.querySelector(".logo img");
  if (window.scrollY >= 1) {
    navbar.classList.add("navbar-scrolled");
    logo.src = "/imagenes/Recurso 3.png";
  } else {
    navbar.classList.remove("navbar-scrolled");
    logo.src = "/imagenes/Recurso 3.png";
  }
});
/**
 RESPONSIVO
 */
const mobileMenuBtn = document.querySelector(".mobile-menu");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu li a");

// Oculta el menú
const hidemenu =() => {
  menu.classList.remove("show");
}

//Agrega el evento de clic a cada elemento de menú
menuItems.forEach(item => {
  item.addEventListener("click", hidemenu);
});

mobileMenuBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});

window.addEventListener('scroll', () => {
  // Obtener la posición actual del scroll
  const scrollPosition = window.scrollY;

  // Actualizar la posición "top" del menú responsivo
  if (scrollPosition > 80) {
    menu.style.top = '80px';
  } else {
    menu.style.top = '170px';
  }
});


//PDF
const modal = document.getElementById("modal");
const pdfFrame = document.getElementById("pdf");
const closeModal = document.querySelector(".close");
const cardLinks = document.querySelectorAll(".image-card-link");

cardLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const pdfUrl = e.target.getAttribute("data-pdf");
    pdfFrame.setAttribute("src", pdfUrl);
    modal.style.display = "block";
  });
});

closeModal.addEventListener("click", () => {
  pdfFrame.setAttribute("src", "");
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    pdfFrame.setAttribute("src", "");
    modal.style.display = "none";
  }
});

function resizeIframe(obj) {
  obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}
