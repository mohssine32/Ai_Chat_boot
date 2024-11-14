const typing_form = document.querySelector(".typing_form");

/*
const showloading = () => {
const html = ` 
      <div class="message-content">
         <img src="images/gemini.svg" alt="">
           <p class="text"></p>
            <div class="loading_indicator">
          <div class="loading_bar"></div>
           <div class="loading_bar"></div>
           <div class="loading_bar"></div>
           </div>
       </div>    
`
    const div = document.createElement("div");
    const chat_list = document.querySelector(".chat_list");
    div.classList.add("message","incoming", "loading");
    div.innerHTML = html 
    div.querySelector(".text").innerHTML = UserMessage;
    chat_list.appendChild(div);
}
*/


const  handleOutGoingChart = () => {
    UserMessage = document.querySelector(".typing-input").value ;
    console.log(UserMessage);

    if (!UserMessage) return; // Quitte la fonction si usermessage est "falsy"
    const html =  `
                       <div class="message-content">
                          <img src="image/user.png" alt="">
                          <p class="text"></p>
                        </div>
                   `
    const chat_list = document.querySelector(".chat_list");
    const div = document.createElement("div");
    div.classList.add("message","outgoing");
    div.innerHTML = html ;
    div.querySelector(".text").innerHTML = UserMessage;
    chat_list.appendChild(div);
    typing_form.reset();

    
   /*const typing_input = document.querySelector(".typing-input");
   if (typing_input) {
    typing_input.value = ""
   }
   else {
    console.log("il ya un probleme")
   }*/

   setTimeout(showloading, 500);

}




typing_form.addEventListener("submit" , (e) =>{  
   /*//  (e) Ce paramètre, ici appelé e, contient des informations sur l'événement de soumission du formulaire.*/
     e.preventDefault();  /*Elle empêche le comportement par défaut de l'événement.*/
   // console.log(e) ;
    handleOutGoingChart()
})
   

