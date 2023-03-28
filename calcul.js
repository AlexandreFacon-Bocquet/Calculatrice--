class Calculatrice{
    constructor(answer) {
        this.answer = answer;
        this.tab = []
    }

    //ajouter un élément au champ de saisie
    ajouter(valeur) {
        if(valeur === ''){
            this.answer.value = '';
        } 
        else{
            this.answer.value += valeur;
            this.tab.push(this.answer.value);
        }
    }
    //fonction pour transformer les caractères spéciaux en caractères utilisables par eval
    changeOp(word){
        let newWord = '';
        for(let item of word){
            switch(item){
                case '×':
                    newWord += '*';
                    break;
                case '÷':
                    newWord += "/";
                    break;
                case '≡':
                    newWord += "%";
                    break;
                default:
                    newWord += item;
                    break;
            }
        }
        return newWord;
    }
    //fonction pour le bouton = qui calcul et affiche le resultat
    equality(){
        let trad = this.changeOp(this.answer.value);
        let response = eval(trad);
        console.log(response);
        document.getElementById("res").innerText += "\n"+ this.answer.value+" = "+response;
        this.tab.push(document.getElementById("res").innerText);
        this.answer.value = '';
    }

    retire(){
        this.tab.pop();
        if(this.tab.length != 0){
            this.answer.value = this.tab[this.tab.length - 1];
        }
        else{
            this.answer.value = '';
        }
        
    }

}


let calc = new Calculatrice(document.getElementById("champ"));
