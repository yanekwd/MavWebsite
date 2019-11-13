
var kosten = new Array(6);

for (var i = 0; i < kosten.length; i++){
   kosten[i] = new Array(6);
}

kosten[0][0] = 25;
kosten[0][1] = 35;
kosten[0][2] = 40; 
kosten[0][3] = 60;
kosten[0][4] = 75;
kosten[0][5] = 130;

kosten[1][0] = 25; 
kosten[1][1] = 40;
kosten[1][2] = 60;
kosten[1][3] = 85; 
kosten[1][4] = 115;
kosten[1][5] = 190;

kosten[2][0] = 25; 
kosten[2][1] = 40;
kosten[2][2] = 60;
kosten[2][3] = 85; 
kosten[2][4] = 115;
kosten[2][5] = 190;
 
kosten[3][0] = 45;
kosten[3][1] = 65;
kosten[3][2] = 85;
kosten[3][3] = 115;
kosten[3][4] = 160;
kosten[3][5] = 245;

kosten[4][0] = 55;
kosten[4][1] = 80;
kosten[4][2] = 100;
kosten[4][3] = 150;
kosten[4][4] = 200;
kosten[4][5] = 300;

kosten[5][0] = 60;
kosten[5][1] = 90;
kosten[5][2] = 120;
kosten[5][3] = 180;
kosten[5][4] = 240;
kosten[5][5] = 340;

function berechneKosten(){

    var tage = document.getElementById("kAnzTage").value;
    var motorrader = document.getElementById("kAnzMtr").value;

    var ergebnis = 0;
    var rueckgabe = document.getElementById("rueckgabe");

    if(tage == 1){
        ergebnis = kosten[motorrader-1][0];
    } else if(tage == 2){
        ergebnis = kosten[motorrader-1][1];
    } else if(tage > 2 && tage < 5){
        ergebnis = kosten[motorrader-1][2];
    } else if(tage > 4 && tage < 7){
        ergebnis = kosten[motorrader-1][3];
    } else if(tage > 6 && tage < 14){
        ergebnis = kosten[motorrader-1][4];
    } else if(tage == 14){
        ergebnis = kosten[motorrader-1][5];
    }

    if(tage > 7 && tage < 14){
        if(motorrader > 1 && motorrader < 4){
            ergebnis = ergebnis + ((tage - 7) * 10);
        } else if(motorrader == 4){
            ergebnis = ergebnis + ((tage - 7) * 12.50);
        } else if(motorrader > 4 && motorrader < 7){
            ergebnis = ergebnis + ((tage - 7) * 15);
        }
    }

    if(tage > 14){
        rueckgabe.innerHTML = "vorraussichtl. Preis: Preis auf Anfrage";
    } else {
        rueckgabe.innerHTML = "vorraussichtl. Preis: " + ergebnis + "€";
    }

    if(tage < 0 || tage > 15){
        rueckgabe.innerHTML = "Fehler!";
    }




}

class anhanger{
        constructor(min, max, img){
            this.minMotorrader = min;
            this.maxMotorrader = max;
            this.image = img;

        }

        selected(){

            var motorraderInput = document.getElementById("kAnzMtr");
            var image = document.getElementById("kImage");

            motorraderInput.setAttribute("min", this.minMotorrader);
            motorraderInput.setAttribute("max", this.maxMotorrader);
            motorraderInput.value = this.minMotorrader;
            image.setAttribute("src", this.image);

        }
    }

none = new anhanger(1, 1, "bilder/Logo.png");
mv16 = new anhanger(1, 1, "bilder/MV 16.jpg");
mv26 = new anhanger(1, 2, "bilder/MV 26.jpg");
mv40 = new anhanger(2, 4, "bilder/MV 40.jpg");
mv41 = new anhanger(2, 4, "bilder/MV 41.jpg");
mv42 = new anhanger(3, 6, "bilder/MV 42.jpg");
mv62 = new anhanger(1, 3, "bilder/MV 62.jpg");
mv63 = new anhanger(1, 3, "bilder/MV 63.jpg");
mv64 = new anhanger(1, 3, "bilder/MV 64.jpg");
mv65 = new anhanger(1, 3, "bilder/MV 65.jpg");
mv68 = new anhanger(1, 3, "bilder/MV 68.jpg");

function setAnhanger(){

    var anhangerAuswahl = document.getElementById("kAnhangerWahl");

    switch (anhangerAuswahl.value){
        
        case "default":
            none.selected();
            break;

        case "mv16":
            mv16.selected();
            break;
            
        case "mv26":
            mv26.selected();
            break;

        case "mv40":
            mv40.selected();
            break;
    
        case "mv41":
            mv41.selected();
            break;
                
        case "mv42":
            mv42.selected();
            break;   

        case "mv62":
            mv62.selected();
            break;
    
        case "mv63":
            mv63.selected();
            break;
            
        case "mv64":
            mv64.selected();
            break;

        case "mv65":
            mv65.selected();
            break;
    
        case "mv68":
            mv68.selected();
            break;

    }

    berechneAnhangerKosten();

 }

 function buttonFunction(add, input){

    number = document.getElementById(input).value;

    if(add == true){
        number = number + 1;
    }else{
        number = number - 1;
    }

 }
