var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    var Content =  event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
}

recognition.onresult = function(event) {
    console.log(event);
    var Content= event.results [0] [0].transcript;
    
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    speak();
}

function speak(){
    var synth = window.speechSynthesis;

speak_data = document.getElementById("textbox").value;
var utterThis = new SpeechSynthesisUtterance(epeak_data);

synth.speak(utterThis);
webcam.attach(camera);
}

webcam.set({
    width:360,
    height:205,
    image_format : 'png',
    png_quality:90
})
camera = document.getElementById("camera");
