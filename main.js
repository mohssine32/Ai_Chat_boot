const typing_form = document.querySelector(".typing_form");

const  handleOutGoingChart = () => {
    UserMassage = document.querySelector(".typing-input").value ;
    console.log(UserMassage);
}

typing_form.addEventListener("submit" , (e) =>{  
   /*//  (e) Ce paramètre, ici appelé e, contient des informations sur l'événement de soumission du formulaire.*/
     e.preventDefault();  /*Elle empêche le comportement par défaut de l'événement.*/
   // console.log(e) ;//
    handleOutGoingChart()
})

