// https://storage.googleapis.com/tm-model/UMj80FB0t/model.json

function Classifysound(){
   navigator.mediaDevices.getUserMedia({audio:true})
classifier=ml5.soundClassifier("https://storage.googleapis.com/tm-model/UMj80FB0t/model.json", modelready)
}

function modelready(){
    classifier.classify(gotResults)
}