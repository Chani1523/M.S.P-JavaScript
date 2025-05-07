

// שמירת ה id
// let d=document.getElementById("d")
// שמירת ה id
let busket = document.getElementById("busket")
//  לצורך הספורט מקום שבו כתוב את הכמות 
let inputCount

// יצירת כפתור לחזרה אחורה
let btnLast=document.createElement("button")
btnLast.innerHTML="🔄️"

// הפניה לפונקציה שמחזירה אחורה
btnLast.addEventListener("click",f_last)
busket.appendChild(btnLast)


// פונקציה שמחזירה אחורה
function f_last(){
    window.history.back()
    let style=sessionStorage.getItem("keyStyle")
  }
  



// jeson
// ..........sport...............
let sports = [
    { "Name": "פילאטיס", "cost":"35", "count": 1 },
    { "Name": "ז'ומבה", "cost": "50", "count": 1 },
    { "Name": "בריכה", "cost": "40", "count": 1 },
    { "Name": "הליכה עם חברה", "cost": "20", "count": 1 },
    { "Name": "כושר מכשירים", "cost": "50",  "count": 1 }]

    let arrS=["pilatis","zomba","pool","fraind","kosher"]
    // ..............meamenet...............
let arrM = [{ "Name":"חד פעמי","count":1,"cost":"75"},
{  "Name":"שבועי","count":1,"cost":"100"},
{ "Name":"חודשי","count":1,"cost":"56"}]

// מערך של id ליצירת id לכל קטגוריה
let arrIdM=["one","week","month"]

// ..................dieta.......................
let arrDieta = [ {"Name":"דיאטת גזר","count": 1,"cost":"75"},
{"Name": "דיאטת חסה","count": 1,"cost":"50" },
{"Name":"דיאטת ירקות","count": 1,"cost":"100" },
{"Name":"דיאטת תות","count": 1,"cost":"64" },
{"Name": " דיאטת אבוקדו","count": 1 ,"cost":"60"}]

// מערך של id ליצירת id לכל קטגוריה
let arrId=["gezer","chasa","vag","tot","avokado"]

// משתנה ששומר את המערך של הקטוגריה שבה אני נמצאת
let x1=sessionStorage.getItem('arr')

// הגדרת מערך
let arr1=[]

let sportdhf=document.getElementById("sportdhf")

// בדיקה באיזה קטגוריה אני נמצאת כדי לדעת מה להראות

// אם אני נמצאת בספורט
if(x1=="sport"){
  let div=document.createElement("div")
  div.className="div"
for (let i = 0; i < sports.length; i++) {

    let p = document.createElement("label")

    // לכל אחד ליצור קלאס לצורך עיצוב
    p.setAttribute("class", "mySport")
    p.setAttribute("data_i", i)
    p.setAttribute("id",arrS[i])
    // הדפסת הערכים
    for (let key in sports[i]) {
        p.textContent += sports[i][key] + " "
        sportdhf.appendChild(p)
}



// רק לקטגוריה של ספורט יש אפשרות לבחור כמות - יצירת הכפתורים
let inputNum=document.createElement("text")
let btnAdd = document.createElement("button")
btnAdd.innerHTML = "➕"
btnAdd.setAttribute("class", "btn")
btnAdd.setAttribute("data-i", i)
btnAdd.addEventListener("click", add_count)

p.appendChild(btnAdd)
sportdhf.appendChild(p)

inputCount = document.createElement("p")
inputCount.setAttribute("class", "count")
inputCount.setAttribute("id", i)
inputCount.textContent = "1"
p.appendChild(inputCount)
sportdhf.appendChild(p)

let btnLess = document.createElement("button")
btnLess.innerHTML = "➖"
btnLess.setAttribute("class", "btn")
btnLess.setAttribute("data-i", i)
btnLess.addEventListener("click", less_count)
p.appendChild(btnLess)
sportdhf.appendChild(p)

let ok = document.createElement("button")
ok.setAttribute("data-i", i)
ok.innerHTML = "🧺"
ok.addEventListener("click", f_ok)
p.appendChild(ok)
sportdhf.appendChild(p)
}

   }

else if(x1=="m"){
  debugger
  //הגדרת משתנה המכיל את כל הדף
  let mhmantdhf=document.getElementById("mhmantdhf")

   for(let i=0;i<arrM.length;i++){
      let meamenet=document.createElement("P")
      meamenet.setAttribute("id",arrIdM[i])
      meamenet.setAttribute("class","meamenet1")
      meamenet.setAttribute("data-i",i)
      
      for (let key in arrM[i]) {
          if(key!='count')
           meamenet.textContent+=arrM[i][key]+ " "
           meamenet.style.color="white"
         
          mhmantdhf.appendChild(meamenet)
           
  
      }
  
  let ok = document.createElement("button")
  ok.setAttribute("data-i", i)
  ok.innerHTML = "🧺"
  ok.addEventListener("click", f_ok)
  meamenet.appendChild(ok)
  mhmantdhf.appendChild(meamenet)
  }
    }

else{

//                       דיאטה 



 let ok = document.createElement("button")

//  שמירה בדיב
let dieta=document.getElementById("dieta")

for(let i=0;i<arrDieta.length;i++){
    let p=document.createElement("lable")
   p.setAttribute("class","myDieta")
   p.setAttribute("id",arrId[i])
   p.setAttribute("data_i",i)


    for (let key in arrDieta[i]) {
        
   if(key!='count')
   p.textContent+=arrDieta[i][key]+ " "

dieta.appendChild(p)
  
}

    let ok = document.createElement("button")
    ok.setAttribute("data-i", i)
    ok.innerHTML = "🧺"
    ok.addEventListener("click", f_ok)
   p.appendChild(ok)
   dieta.appendChild(p)
}

   }

   function f_ok(){
    // שמירה באיזה קטגוריה אני נמצאת
    let x=sessionStorage.getItem('arr')

    let i = event.srcElement.getAttribute("data-i")
   
// בדיקה באיזה קטגוריה אני נמצאת
     let arr=[]
    if(x=="sport")
    arr=[...sports]
    else if(x=="m")

    // אם לא עושים ... זה מביא undefind
    arr=[...arrM]
    else
    arr=[...arrDieta]

    // הגדרת משתנה ששומר את החלק הנוכחי של המוצר הנוכחי
    let item = { ...arr[i] }
debugger

   let basket=sessionStorage.getItem("busket")
  
   if(basket==null||basket==""){
       basket=[]
       basket.push(item)
       basket=JSON.stringify(basket)
       sessionStorage.setItem("busket",basket)
     
   }
   else{
    // אם רוצים להפעיל להדליק מכאן עד  
       item=JSON.stringify(item)
    if(basket.indexOf(item)==-1){
      item=JSON.parse(item)
      basket=JSON.parse(basket)
      basket.push(item)
      basket=JSON.stringify(basket)
       sessionStorage.setItem("busket",basket)
    }
    // -------------------כאן------------------------

    // עובד חלקי רק אם המוצר שאני מוסיפה אם יש כמוהו זה לא אחרון
    // אם לא רוצים למחוק מכאן 
    //  let c=0,j=0
    //  basket=JSON.parse(basket)
    //     for(j=0;j<basket.length && x!=1;j++){
    //       if(basket[j].Name==item.Name)
    //       x=1
    //     }
    //    if(j==basket.length){
    //     basket.push(item)
    //        basket=JSON.stringify(basket)
    //         sessionStorage.setItem("busket",basket)
    //    }
    //    else
    //    {
    //     basket.splice(basket[j],1)
    //     basket.push(item)
    //     basket=JSON.stringify(basket)
    //         sessionStorage.setItem("busket",basket)
    //    }
      //  עד כאן
   }

  }
   function add_count() {
    let i = event.srcElement.getAttribute('data-i')
    i = parseInt(i)
    sports[i]["count"] = sports[i]["count"] + 1

    let text = document.getElementById(i)
    text.textContent = ""
    text.textContent = sports[i]["count"]
}

// הפונקציה של ההורדת כמות לספורט 
function less_count() {
    let i = event.srcElement.getAttribute('data-i')
    i = parseInt(i)
    if (sports[i]["count"] == "1") {
        return;
    }

    sports[i]["count"] = sports[i]["count"] - 1
    let text = document.getElementById(i)
    text.textContent = ""
    text.textContent = sports[i]["count"]

}


// נגישות

// לפתוח את הנגישות בזמן לחיצה עליו
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
//   לסגור את הנגישות בזמן לחיצה על x
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


// יצירת אפשרויות לבחירה
let b=document.getElementById("b")
b.setAttribute("data-i","b")
b.addEventListener("click",negishot)

let c=document.getElementById("c")
c.setAttribute("data-i","c")
c.addEventListener("click",negishot)

let n=document.getElementById("n")
n.setAttribute("data-i","n")
n.addEventListener("click",negishot)

// פונקציה המעדכנת אידי לפי העיצוב שנבחר
function negishot(){
 debugger
  // sessionStorage.setItem("keyStyle",event.srcElement.getAttribute("data-i"))

  let body=document.getElementById("body")
   body.setAttribute("id",event.srcElement.getAttribute("data-i"))
  // body.setAttribute("id",sessionStorage.getItem("keyStyle"))
   event.preventDefault()
}


// עד כאן נגישות


