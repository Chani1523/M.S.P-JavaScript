
// יצירת ההדר
let header=document.getElementById("header")
let arrHeader=["אודותינו","דף הבית","צור קשר"]

let classHeader=document.createElement("div")
classHeader.className="classHeader"


for(let i=0;i<arrHeader.length;i++){
   
  let kishor=document.createElement("label")
        kishor.textContent+=(arrHeader[i]+"         ")
        kishor.setAttribute("data-i",i)
       
        kishor.addEventListener("click",f_link)
      
        classHeader.appendChild(kishor)
        header.appendChild(classHeader)
      
}

function f_link(){
  
  let i=event.srcElement.getAttribute("data-i")

 if(i==0)
  window.location="../html/About.html"
else  if(i==1)
  window.location="../html/Home.html"
}

// יצירת הפוטר
let footer=document.createElement("label")
let footer1=document.createElement("label")
let classfootr=document.createElement("div")
classfootr.className="classfootr"
footer.textContent=("www.machon.skinnyplace.co.il     רחוב יד לבנים 51 גבעת משה יושלים       טלפון 024568646       ")
classfootr.appendChild(footer)
header.appendChild(classfootr)

 classfootr.appendChild(document.createElement("br"))
 classfootr.appendChild(document.createElement("br"))
 footer1.textContent=("תקנון|  הצהרת בריאות|  תנאי שימוש")

 footer1.setAttribute("class","footr1")


classfootr.appendChild(footer1)
header.appendChild(classfootr)




let inputchpos=document.createElement("input")
inputchpos.setAttribute("type","text")
inputchpos.setAttribute("placeholder","🔎     ...חיפוש")
inputchpos.setAttribute("id","chepos")
classHeader.appendChild(inputchpos)
header.appendChild(classHeader)

let linkSal=document.createElement("button")
linkSal.setAttribute("class","linkSal")
linkSal.innerHTML="🛒"

classHeader.appendChild(linkSal)
header.appendChild(classHeader)

// הפניה לפונקציה שמעבירה לסל קניות בעת לחיצה
linkSal.addEventListener("click", seeSal)

// מעבר לראות את הסל קניות
function seeSal() {
    
    window.location = "../html/BusketShop.html"
}

