
let mobileNet;
let video;
let puffin;

let cat;

function modelReady(){
  console.log('Model is ready!!!');
  //mobileNet.predict(cat, gotResults);
  mobileNet.predict(gotResults);
}

function gotResults(error, results){
  if (error){
    console.error(error);
  } else {
    console.log(results);
    let label = results[0].label;
    let result_confidence = results[0].confidence;
    fill(0);
    textSize(24);
    createP(label);
    createP(result_confidence); 
  }
}

function imageReady () {
  image(video,0,0,width,height);
}



function setup() { 
  createCanvas(640, 480);
  background(0);
  video = createCapture(VIDEO)
  video.hide();
  mobileNet = ml5.imageClassifier('MobileNet', video, modelReady);


} 

function draw {
  image(video)
}

