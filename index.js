//renk listesini oluşturduk//
var renkListesi=["red","blue","yellow","green","pink","orange",];

//tıklama fonksiyonunu aktif ettik//
document.getElementById("button").addEventListener("click",function(){
//randomize işlemi oluşturduk//
var rastgeleİslem= Math.floor(Math.random()*renkListesi.length);
//arkada yansıyan renkle yazının aynı olmasını sağladık//
document.getElementById("demo").textContent=renkListesi[rastgeleİslem]

//döngüyü oluşturduk//
for(var i=0;i<=rastgeleİslem;i++){
document.body.style.backgroundColor=renkListesi[rastgeleİslem];}

});

//keypress olayını aktifleştirdik.Ayrıca her zaman keypress olayında eventı belirtmeyi unutmayalım//
document.addEventListener("keypress",klavyeOlayı);
function klavyeOlayı(event){

switch (event.key) {
   
case "r":
document.body.style.backgroundColor="red"
document.getElementById("demo").innerHTML="red"
break;
     
case"b":
document.body.style.backgroundColor="blue"
document.getElementById("demo").innerHTML="blue"
break;
   
case "y":
document.body.style.backgroundColor="yellow"
document.getElementById("demo").innerHTML="yellow"
break;
   
case "g":
document.body.style.backgroundColor="green"
document.getElementById("demo").innerHTML="green"
break;
   
case "p":
document.body.style.backgroundColor="pink"
document.getElementById("demo").innerHTML="pink"
break;
        
case "o":
document.body.style.backgroundColor="orange"
document.getElementById("demo").innerHTML="orange"
break;  
       
default:  
document.body.style.backgroundColor="white"
document.getElementById("demo").innerHTML="tanımsız renk";
break;
}

}