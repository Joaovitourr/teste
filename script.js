const hambuguer = document.querySelector(".menu-hamburguer");
const menuMobile = document.querySelector(".menu-mobile");

hambuguer.addEventListener("click", () => {
  hambuguer.classList.toggle("active");
  menuMobile.classList.toggle("active");
  hambuguer.setAttribute("aria-expanded", hambuguer.classList.contains("active"));
});

document.addEventListener("touchstart", (event) => {
   if (event.touches.length === 0) {
     menuMobile.classList.remove("active");
     hambuguer.classList.remove("active");
     hambuguer.setAttribute("aria-expanded", false);
   } else {
     const isClickInsideMenu = menuMobile.contains(event.target);
     const isClickInsideButton = hambuguer.contains(event.target);
 
     if (!isClickInsideMenu && !isClickInsideButton) {
       menuMobile.classList.remove("active");
       hambuguer.classList.remove("active");
       hambuguer.setAttribute("aria-expanded", false); 
     }
   }
 });
 

function atualizarHour(){

   const d = new Date;

   const horas = d.getHours();

   const abertoOuNao = document.querySelector(".openornot");

   if(horas >= 19){
      
      abertoOuNao.classList.add("fechado")

   } 
   else if(horas <= 7){
      abertoOuNao.classList.add("fechado")
   } else(
      abertoOuNao.classList.add("aberto")
   )

}

atualizarHour();


function fecharMenu(){

 const menuLinks = document.querySelector(".mobile-item")
 
 menuLinks.addEventListener("click", () => {
   menuMobile.classList.remove("active")
   hambuguer.classList.remove("active")
   hambuguer.removeAttribute("aria-expanded", false)
 })

}

fecharMenu()

const botaoScroll = document.querySelector(".btn-top");

botaoScroll.addEventListener("click", () => {
   window.scrollTo(0,0)
})

