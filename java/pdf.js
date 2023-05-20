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