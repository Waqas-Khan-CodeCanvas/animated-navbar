const searchOpenbtnElement=document.querySelector(".searchbtnclose");
const serachInputElement=document.querySelector(".search");



searchOpenbtnElement.addEventListener("click",()=>{
    serachInputElement.classList.toggle("open")
})