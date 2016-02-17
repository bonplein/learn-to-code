var wuerfel;
wuerfel=5;
console.log(wuerfel);
function wuerfeln(){
    wuerfel=Math.floor((Math.random() * 6) + 1);
}
wuerfeln();
console.log(wuerfel);
var wuerfelObjekt={
    augenzahl:99,
    wuerfeln:function (){
        console.log("vor dem würfeln: ",this.augenzahl);
        this.augenzahl=Math.floor((Math.random() * 6) + 1);
        console.log("nach dem würfeln: ",this.augenzahl);
    }
}
console.log(wuerfelObjekt);
wuerfelObjekt.wuerfeln();
console.log(wuerfelObjekt);

var SpielSet=[];
SpielSet.push(wuerfelObjekt);