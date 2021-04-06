



//alert(String.fromCodePoint(0x1F614));
function verif(nb) {

    var score=0;
    var emoj=""
    for (let i = 1; i <= nb; i++) {
    (document.getElementById(("mm" + String(i))).style.backgroundColor) = "white";}



    for (let i = 1; i <= nb; i++) {
        if (document.getElementById(String(i)).checked) {
            if (document.getElementById(String(i)).value == "false") {
                (document.getElementById(("mm" + String(i))).style.backgroundColor) = "red";
            }
            if (document.getElementById(String(i)).value == "true") {
                score+=1;
                (document.getElementById(("mm" + String(i))).style.backgroundColor) = "green";
            }
        }
    }

if(score>6){
emoj=0x1F603
}
else{
    if(score>4){
     emoj=0x1F60C
    }
    else{
     emoj=0x1F614
    }

}
if(score==0){
  emoj=0x1F62D
}
var decoding=String.fromCodePoint(emoj)
alert("score est  "+score+" "+decoding);}
function audiox(c){
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var audio = new Audio();
audio.src=c;
// when the sound has been loaded, execute your code
audio.oncanplaythrough = (event) => {
    var playedPromise = audio.play();
    if (playedPromise) {
        playedPromise.catch((e) => {
             console.log(e)
             if (e.name === 'NotAllowedError' || e.name === 'NotSupportedError') {
                   console.log(e.name);
              }
         }).then(() => {
              console.log("playing sound !!!");
         });
     }
}
}