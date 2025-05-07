
// דיב לצורך שמירה
let logInDiv=document.getElementById("logInDiv")

// יצירת מקום להכניס שם
let inputName=document.createElement("input")
inputName.setAttribute("type","text")
inputName.setAttribute("placeholder","input name")
logInDiv.appendChild(inputName)
logInDiv.appendChild(document.createElement("br"))

// יצירת מקום להכניס סיסמה
let inputCode=document.createElement("input")
        inputCode.setAttribute("type","text")
        inputCode.setAttribute("placeholder","input code")
        logInDiv.appendChild(inputCode)

        // הסתרה
        inputCode.style.display="none"

        // הפניה לפונקציה שבודקת האם השם שהוכנס קיים במערכת
       inputName.addEventListener("blur",f_cheackName)

// בדיקת השם
function f_cheackName(){
    debugger
    if(inputName.value=="")
    inputName.focus()
    else
    if(localStorage.getItem(inputName.value)==null){
        let inputCode1=document.createElement("p")
       inputCode.setAttribute("placeholder","אינך רשום בחר סיסמה")
       inputCode.style.display="block"
        
    //    הפניה לפונקציה שבודקת את הסיסמה
      inputCode.addEventListener("blur",f_cheackCode)    


    }
    else{
        
    inputCode.addEventListener("blur",f_cheackCode1)    
    inputCode.style.display="block"
    }
    
    }

// אם הלקוח קיים במערכת
function f_cheackCode1(){
    
    if(inputCode.value=="")
        inputCode.focus()
    
    else if(localStorage.getItem(inputName.value)!=inputCode.value){
    inputCode.style.display="none"
    inputCode.value=""
    inputCode.setAttribute("placeholder","סיסמה שגויה")
    inputCode.style.display="block"
    }
    else
    {
        sessionStorage.setItem(inputName.value,inputCode.value) 
    window.location="../html/Home.html"
}}

// אם הלקוח הוא לקוח חדש
function f_cheackCode(){
    if(inputCode.value=="")
    inputCode.focus()
    else{
    sessionStorage.setItem(inputName.value,inputCode.value)   
    localStorage.setItem(inputName.value,inputCode.value)

    window.location="../html/Home.html"
    }

}