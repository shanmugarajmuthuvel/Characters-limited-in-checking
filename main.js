var input=document.querySelector(".input-box")
var tex=document.querySelector("textarea")
var cont=document.querySelector(".characters")
var alert=document.querySelector(".signal_num")
    tex.addEventListener("keyup",(e)=>{
		let vallenght=tex.value.length
		alert.innerText=vallenght;
		(vallenght>0) ?  input.classList.add("active"):input.classList.remove("active");
		(vallenght>100) ? input.classList.add("error"):input.classList.remove("error")
	})