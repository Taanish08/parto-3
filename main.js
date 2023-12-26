Webcam.set ( {
    width : 350,
    height : 200,
image_format : 'png' ,
png_quality : 90


});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function CaptureImg() {
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="photo"src="'+data_uri+'"/>'
});
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/k_LwFvp7W/model.json',modelloaded);

function modelloaded() {
    console.log("Model loaded");
}

function IdentifyPerson() {
    img = document.getElementById("photo");
    classifier.classify(img, gotresult);
}

function gotresult(error, result) {
if (error) {
    console.error(error);
}
else {
    console.log(result);
    document.getElementById("object_ans").innerHTML= "Object: "+ result[0].label;
    document.getElementById("acc_ans").innerHTML= "Accuracy: "+ result[0].confidence.toFixed(2);
}
}