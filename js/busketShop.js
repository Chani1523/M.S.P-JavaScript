
// אידי לצורך שמירה בדיב
let b=document.getElementById("busket")


// משתנה ששומר את הסל קניות מהסשן
let basket=sessionStorage.getItem("busket")
    
// שמירה בדיב את הטבלה
let divTbl=document.getElementById("divTbl")

// יצירת כפתור לחזור לדף ממנו הגעתי
let btnLast=document.createElement("button")
btnLast.innerHTML="🔄️"

// הפניה לפונקציה שמחזירה אחורה
btnLast.addEventListener("click",f_last)
b.appendChild(btnLast)

// פונקציה שמחזירה אחורה
function f_last(){
  window.history.back()
}

init()

function init(){

  // ריקון הטבלה שהיתה עד עכשיו
  divTbl.innerHTML=""

// יצירת מערך לכותרות של הטבלה
let arrCapthion=["מוצר","כמות","סכום"]

// הגדרת משתנים לטבלה
 let tbl, caption, tr, th, td, str

//יצירת טבלה חדשה
 tbl=document.createElement("table")

//נתינת מאפיינים
 tbl.setAttribute("border", "1")
 tbl.setAttribute("width",1300)
 tbl.setAttribute("height",1000)

//יצירת כותרת
 caption=document.createElement("caption")
caption.style.color="red"
 
 //כתיבת הטקסט לכותרת
 caption.textContent=" סל קניות"

//אימוץ הכותרת לתוך הטבלה
 tbl.appendChild(caption)

  //יצירת שורה חדשה
 tr=document.createElement("tr")

//  יצירת תאים של שורה
 for(let j=0;j<arrCapthion.length;j++){
 th=document.createElement("th")

 // כתיבת תוכן התא מהמערך 
  th.textContent=arrCapthion[j]

  //אימוץ התא לשורה
  tr.appendChild(th)

  // לצורך עיצוב
th.style.color="white"

// אימוץ התא לשורה
  tr.appendChild(th)

 }

 //אימוץ השורה לטבלה
 tbl.appendChild(tr)

 //אימוץ הטבלה לדיב
 divTbl.appendChild(tbl)

// סיום יצירת הטבלה



// לצורך חישוב הסכום הסופי
 let sum=0
basket=JSON.parse(basket)
// מילוי הטבלה עפי הסשן
// לולאה שעוברת על הסשן של הסל קניות ומדפיסה מוצר, מחיר וכמות

  for(let index=basket.length-1;index>=0;index--){
  
let item=basket[index]
  //יצירת שורה חדשה
  tr=document.createElement("tr")

  //יצירת תא    
 th=document.createElement("th")

//  מילוי תוכן התא בשם
 th.textContent=item["Name"]

//  שמירת התא בשורה
 tr.appendChild(th)

//  //יצירת תא 
 th=document.createElement("th") 
 
//  מילוי תוכן התא בכמות
 th.textContent=item["count"]

 //  שמירת התא בשורה
 tr.appendChild(th)

 //יצירת תא 
 th=document.createElement("th") 

//  סכום המוצר 
 let untilSum=+ item["cost"]*item["count"]

 //  מילוי תוכן התא בסכום
 th.textContent=untilSum

 //  שמירת התא בשורה
 tr.appendChild(th)


//  יצירת כפתור אם רוצים לבטל את המוצר
 //יצירת תא  של כותרת 
 th=document.createElement("th")
 th.textContent="🗑️"
 th.setAttribute("data-i",index)

//  הפניה לפונקציה שמבטלת
 th.addEventListener("click",f_throw)
  tr.appendChild(th) 

  // לצורךך עיצוב
  tr.style.color="red"  

  // שמירת השורה בטבלה
 tbl.appendChild(tr)

//  חישוב סכום כל המוצרים
 sum+=item["count"]*item["cost"]

}

// שמירת הטבלה בדיב
divTbl.appendChild(tbl)

// ..................כאן מסתיימת הלולאה

// הדפסת הסכום
if(sum==0)
caption.textContent="סל קניות"
else
caption.textContent="סל קניות- "+sum+" ש'ח"

}


if(basket.length>0){
  let btnTashlom=document.createElement("button")
  
  btnTashlom.innerHTML="מעבר לתשלום"
  btnTashlom.addEventListener("click",f_tashlom)
  b.appendChild(btnTashlom)
  }
  else
  btnTashlom.innerHTML=""

  function f_tashlom(){
    window.location="../html/Pay.html"
  }

// פונקציה שמוחקת מוצר
function f_throw(){

 let i=event.srcElement.getAttribute("data-i")
debugger
 //מחיקה מאיפה וכמה
    basket.splice(i,1)
    basket=JSON.stringify(basket)
    sessionStorage.setItem("busket",basket)
  
init()
}

