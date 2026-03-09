 // variables
 let numero=document.getElementById("numero1")
  let numero2=document.getElementById("numero2")

 let solucion=document.getElementById("solucion")

let run=document.getElementById("run")

 run.addEventListener("click", (e) => {
     solucion.innerHTML=numero.value *2

     
})

run.addEventListener("click", (e) => {
     let num=(numero2.value) 
     console.log(num)

     
})
run.addEventListener("click", (e) => {
     let num=(numero.value) * (numero2.value)
     console.log(num)

     
})
run.addEventListener("click", (e) => {
     let num=(numero.value)
     let num2=(numero2.value)
     let cadenaTotal=""
     let sol= parseInt(num) + parseInt(num2)
     console.log(sol) 
     solucion.innerHTML=sol
     for (i=0;i<(num2);i++) {
          cadenaTotal=cadenaTotal+num+"<BR>"
          console.log("I vale:"+i+": "+num)
     }

     solucion.innerHTML=cadenaTotal

     

     
})

// otra forma 

//  run.addEventListener("click", (e) => {
//      solucion.innerHTML=(numero.value) * (numero2.value)
     
// })






 solucion.innerHTML=("Hola")

 console.log("Estoy en el javascript:"+numero.value)