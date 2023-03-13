//ajouter un élément au champ de saisie
function ajouter(valeur) {
    if(valeur === ''){
        champ.value = '';
    } 
    else{
        champ.value += valeur;
        
    }
}
//fonction pour transformer les caractères spéciaux en caractères utilisables par eval
function changeOp(word){
    let newWord = '';
    for(let item of word){
        switch(item){
            case '×':
                newWord+='*';
                break;
            case '÷':
                newWord+="/";
                break;
            case '≡':
                newWord+="%";
                break;
            default:
                newWord += item;
                break;
        }
    }
    return newWord;
}
//fonction pour le bouton = qui calcul et affiche le resultat
function equality(){
    let trad = changeOp(champ.value);
    console.log(champ.value+"=>"+trad);
    

    //let result2 = champ.value;
    let response = eval(trad);
    console.log(response);
    //let result = document.createTextNode(champ.value);
    //document.getElementById("op").innerHTML = eval(result2);
    //champ.value = result;
    document.getElementById("res").innerText = champ.value+" = "+response;
    champ.value = '';
}

function retire(){
    let res = champ.value;
    champ.value = res.substring(0, res.length - 1);
}