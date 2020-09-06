function generiereTaktundTonleiter(){
    //Takt
    var takt = document.getElementById("Takt")
    if(takt.value == 1){
        var select_size = takt.size;
        var rnd = Math.floor(Math.random() * select_size) + 1;
        document.getElementById("TaktundTon").innerHTML = takt.options[rnd].text;
    } else{
        document.getElementById("TaktundTon").innerHTML = takt.options[takt.selectedIndex].text;
    }

    //Ton
    var ton = document.getElementById("Ton")
    if(ton.value == 1){
        var select_size = ton.size;
        var rnd = Math.floor(Math.random() * select_size) + 1;
        document.getElementById("TaktundTon").innerHTML += " " + ton.options[rnd].text + "-";
    } else{
        document.getElementById("TaktundTon").innerHTML += " " + ton.options[ton.selectedIndex].text + "-";
    }

    //Tonart
    var tonart = document.getElementById("Tonart")
    if(tonart.value == 1){
        var select_size = tonart.size;
        var rnd = Math.floor(Math.random() * select_size) + 1;
        document.getElementById("TaktundTon").innerHTML += tonart.options[rnd].text;
    } else{
        document.getElementById("TaktundTon").innerHTML += tonart.options[tonart.selectedIndex].text;
    }
}

function generiereKadenz() {
    generiereTaktundTonleiter();

    var tonika = document.getElementById("Tonika")
    var kadenzlänge = document.getElementById("Kadenzlänge");
    document.getElementById("Kadenz").innerHTML = " ";
    if(tonika.value == 1){
        if(kadenzlänge.value == 1){
            var select_size = kadenzlänge.size;
            var rnd = Math.floor(Math.random() * select_size) + 1;
            for(i = 0; i < rnd; i++){
                var rnd_akk = Math.floor(Math.random() * 6) + 1;
                document.getElementById("Kadenz").innerHTML += rnd_akk + " ";
            }
        } else{
            var size_kadenz = kadenzlänge.options[kadenzlänge.selectedIndex].text;
            for(i = 0; i < size_kadenz; i++){
                var rnd_akk = Math.floor(Math.random() * 6) + 1;
                document.getElementById("Kadenz").innerHTML += rnd_akk + " ";
            }
        }
    }
    if(tonika.value == 2){
        if(kadenzlänge.value == 1){
            var select_size = kadenzlänge.size;
            var rnd = Math.floor(Math.random() * select_size) + 1;

            //Tonika Anfang
            document.getElementById("Kadenz").innerHTML += "1" + " ";
            for(i = 0; i < rnd-1; i++){
                var rnd_akk = Math.floor(Math.random() * 6) + 1;
                document.getElementById("Kadenz").innerHTML += rnd_akk + " ";
            }
        } else{
            var size_kadenz = kadenzlänge.options[kadenzlänge.selectedIndex].text;

            //Tonika Anfang
            document.getElementById("Kadenz").innerHTML += "1" + " ";
            for(i = 0; i < size_kadenz-1; i++){
                var rnd_akk = Math.floor(Math.random() * 6) + 1;
                document.getElementById("Kadenz").innerHTML += rnd_akk + " ";
            }
        }
    }
    if(tonika.value == 3){
        if(kadenzlänge.value == 1){
            var select_size = kadenzlänge.size;
            var rnd = Math.floor(Math.random() * select_size) + 1;

            for(i = 0; i < rnd-1; i++){
                var rnd_akk = Math.floor(Math.random() * 6) + 1;
                document.getElementById("Kadenz").innerHTML += rnd_akk + " ";
            }
            //Tonika Ende
            document.getElementById("Kadenz").innerHTML += "1" + " ";
        } else{
            var size_kadenz = kadenzlänge.options[kadenzlänge.selectedIndex].text;
            
            for(i = 0; i < size_kadenz-1; i++){
                var rnd_akk = Math.floor(Math.random() * 6) + 1;
                document.getElementById("Kadenz").innerHTML += rnd_akk + " ";
            }
            //Tonika Ende
            document.getElementById("Kadenz").innerHTML += "1" + " ";
        }
    }
    if(tonika.value == 4){
        if(kadenzlänge.value == 1){
            var select_size = kadenzlänge.size;
            var rnd = Math.floor(Math.random() * select_size) + 1;

            document.getElementById("Kadenz").innerHTML += "1" + " ";
            for(i = 0; i < rnd-2; i++){
                var rnd_akk = Math.floor(Math.random() * 6) + 1;
                document.getElementById("Kadenz").innerHTML += rnd_akk + " ";
            }
            if(rnd > 1){
                document.getElementById("Kadenz").innerHTML += "1" + " ";
            }           
        } else{
            var size_kadenz = kadenzlänge.options[kadenzlänge.selectedIndex].text;

            document.getElementById("Kadenz").innerHTML += "1" + " ";
            for(i = 0; i < size_kadenz-2; i++){
                var rnd_akk = Math.floor(Math.random() * 6) + 1;
                document.getElementById("Kadenz").innerHTML += rnd_akk + " ";
            }
            if(size_kadenz > 1){
                document.getElementById("Kadenz").innerHTML += "1" + " ";
            } 
        }
    }
}
