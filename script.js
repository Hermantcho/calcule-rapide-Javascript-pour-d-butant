var nb1 = document.querySelector('.nb1');
var nb2 = document.querySelector('.nb2');
var op = document.querySelector('.op');
var Message = document.querySelector('.Message');
var score = document.querySelector('.score');
var linck = document.querySelector('.linck');
var section = document.querySelector('section');
var compteur = 0;

//nombres aleatoires debut du jeu

random1 = Math.random()*11 << 0; //pour géré des nombres entre 0 et 11
random2 = Math.random()*11 << 0; //pour géré des nombres entre 0 et 11

//Inserer les nombres au hazard dans les variables nb1 et nb2

nb1.innerHTML = random1;
nb2.innerHTML = random2;

// fonction de verification 

function verifier() {
    var res = document.querySelector('.res').value;
    if (random1 + random2  == res) {
        Message.style.background = "green";
        Message.innerHTML = "Correcte."

    //créer d'autres nombres aleatoires 
    
            //Nombres aleatoire debut du jeu
            random1 = Math.random()*11 << 0; //pour géré des nombres entre 0 et 11
            random2 = Math.random()*11 << 0; //pour géré des nombres entre 0 et 11
            
            //Inserer les nombres au hazard dans les variables nb1 et nb2
            
            nb1.innerHTML = random1;
            nb2.innerHTML = random2;
            compteur = compteur + 1;
    
    }
    else {
        Message.style.background = "red";
        Message.innerHTML = "vous avez perdu."
        section.innerHTML = " ";
        score.innerHTML =`<span>${compteur}</span></br> score`;
        linck.style.display = "block";
    }
}