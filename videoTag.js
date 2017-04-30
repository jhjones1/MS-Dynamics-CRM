//Creating a video tag --- videoTag.js


var videoelement = document.createElement("video");
videoelement.setAttribute("id", "video1");

var sourceMP4 = document.createElement("source");
sourceMP4.type = "video/mp4";
sourceMP4.src = "http://zippy.gfycat.com/SpottedDefensiveAbalone.mp4";
videoelement.appendChild(sourceMP4);

var sourceWEBM = document.createElement("source");
sourceWEBM.type = "video/webm";
sourceWEBM.src = "http://zippy.gfycat.com/MinorGregariousGrub.webm";
videoelement.appendChild(sourceWEBM);

$('.video-label').html(videoelement);
var video = document.getElementById("video1");
video.play();