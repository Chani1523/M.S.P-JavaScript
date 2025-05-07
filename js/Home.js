// בזמן טעינת הדף שילך לפונקציה הזו log in
 window.addEventListener("load",open)


// כותרת לדף הבית
let headerDiv=document.getElementById("header")
let h1=document.createElement("h1")//יצירת של אלמנט חדש
h1.textContent=(" Machon    Skinny Place - M.S.P.")
headerDiv.appendChild(h1)


// פונקציה בשביל פתיחת ה log in
function open(){
 
  if(localStorage.getItem("inTheProgram")==0)

    document.getElementById('id01').style.display='block'
    localStorage.setItem("inTheProgram",1)
 }
/////////////////////slider

// מערך תמונות
let picthure=["../picther/diate1.jpg","../picther/pool2.jpg",
"../picther/sport3.jpg","../picther/pool1.jpg",
"../picther/pool3.jpg","../picther/sport7.jpg",
"../picther/dieta2.jpg"]


let divAll=document.getElementById("slide")
let s=document.createElement("div")
s.className="slideshow-container"
let slideIndex=0;
for(let index=0;index<picthure.length;index++){
  let divP=document.createElement("div")
  divP.className="mySlides fade"
  let img=document.createElement("img")
  img.setAttribute('src',picthure[index])
  img.className="img"
  divP.appendChild(img)
  
  s.appendChild(divP)
}
divAll.appendChild(s)
showSlides()

function showSlides(){
  let i;
  let slides=document.getElementsByClassName("mySlides")
  for(i=0;i<slides.length;i++){
    slides[i].style.display="none"
}
slideIndex++
if(slideIndex>slides.length){slideIndex=1}
slides[slideIndex-1].style.display="block"
setTimeout(showSlides,2500);
}
///////////////////////////end slider


// יצירת הקטגוריות

let divHome=document.getElementById("divHome")

// מערך שמות הקטגוריןת
let arrCategory=["ענף הספורט","דיאטות","מאמנת אישית"]

// מערך של אידי
let arrId=["sport","dieta","personalCoinstract"]
let divimg=document.createElement('div')

// לצורך פריסה של התמונות
divimg.className="divimg"

// עובר על המערכים
debugger
for(let i=0;i<arrCategory.length;i++){
    let category=document.createElement("p")
    category.textContent=arrCategory[i]
    category.setAttribute("id",arrId[i])
    category.setAttribute("data-i",i)
    category.setAttribute("class","category")
    category.addEventListener("click",f_linkCategory)
    divimg.appendChild(category)
    divHome.appendChild(divimg)

}


// פונקציה ששומרת בסשן על איזה קטגוריה לחצתי
function f_linkCategory(){
    if(event.srcElement.getAttribute("data-i")==0){
         sessionStorage.setItem('arr','sport')

    }
   else if(event.srcElement.getAttribute("data-i")==1){
    // window.location="../html/dieta.html"
  sessionStorage.setItem('arr','d')

   }
   else {
       sessionStorage.setItem('arr','m')
   }

  //  מעביר לדף המוצרים
   window.location="../html/All.html"
}







