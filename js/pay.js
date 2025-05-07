
debugger
let thaslom=document.getElementById("thaslom")

document.getElementById("paymentFrom").addEventListener("submit",function(event){
 
   event.preventDefault();
   const cardnumber=document.getElementById("cardnumber").value
   const expirydate=document.getElementById("expirydate").value
   const cvv=document.getElementById("cvv").value

   if(!/^\d{16}$/.test(cardnumber)){
       alert("Please enter a valid 16-digit Asheri number for the card number.")
       return
   }
   debugger
   const currentDate=new Date()
   const[month,year]=expirydate.split('/')
   const expiry=new Date(`20${year}`,month-1)
   if(expiry<currentDate){
       alert("Please enter a valid expiry date.")
       return
   }
   if (!/^\d{3}$/.test(cvv)){
       alert("Please enter a valid 3-digit cvv.")
       return
   }
//    

   localStorage.setItem("inTheProgram","0")
  
   alert("payment processed successfully-התשלום עבר בהצלחה נמשיך לעמוד בקשר");
    sessionStorage.setItem("busket","")
    window.location="../html/Home.html"
   
});

  

   