var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");

canvas.width= 400
canvas.height= 400

var time=0
function draw(){
  time++
  ctx.clearRect(0,0,400,400)
  ctx.beginPath()
  for(var i=0;i<10;i++){
    let pos = i*50
    ctx.moveTo(pos,0) 
    ctx.lineTo(pos,400) 
    ctx.fillText(pos,pos,10) 
    ctx.moveTo(0,pos) 
    ctx.lineTo(400,pos) 
    ctx.fillText(pos,10,pos) 
    ctx.fillStyle="black"
  }
  
  ctx.strokeStyle = "rgba(0,0,0,0.1)"
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(25,390)
  ctx.lineTo(375,390)
  ctx.lineWidth = 2
  ctx.strokeStyle="#a2a7a5"
  ctx.stroke()
  
  ctx.beginPath()
    ctx.moveTo(140,390)
    ctx.lineTo(260,390)
    ctx.lineTo(230,190)
    ctx.lineTo(170,190)
  ctx.closePath()
  ctx.fillStyle="#ffffff"
  ctx.fill()
  ctx.strokeStyle="#a2a7a5"
  ctx.stroke() 
  
   ctx.beginPath()
    ctx.moveTo(210,390)
    ctx.lineTo(230,390)
    ctx.lineTo(210,350)
  ctx.closePath()
  ctx.fillStyle="#ffffff"
  ctx.fill()
  ctx.strokeStyle="#a2a7a5"
  ctx.stroke() 
  
  ctx.beginPath()
    ctx.moveTo(190,390)
    ctx.lineTo(190,350)
    ctx.lineTo(170,390)
  ctx.closePath()
  ctx.fillStyle="#ffffff"
  ctx.fill()
  ctx.strokeStyle="#a2a7a5"
  ctx.stroke() 
  
  ctx.beginPath()
    ctx.moveTo(170,190)
    ctx.lineTo(230,190)
    ctx.lineTo(240,170)
    ctx.lineTo(160,170)
  ctx.closePath()
  ctx.fillStyle="#dae2df"
  ctx.fill()
  ctx.strokeStyle="#a2a7a5"
  ctx.stroke()
  
  ctx.beginPath()
    ctx.moveTo(175,170)
    ctx.lineTo(225,170)
    ctx.lineTo(215,110)
    ctx.lineTo(185,110)
  ctx.closePath()
  ctx.fillStyle="#ffffff"
  ctx.fill()
  ctx.strokeStyle="#a2a7a5"
  ctx.stroke()

  ctx.beginPath()
    ctx.moveTo(185,110)
    ctx.lineTo(215,110)
    ctx.lineTo(220,95)
    ctx.lineTo(180,95)
  ctx.closePath()
  ctx.fillStyle="#dae2df"
  ctx.fill()
  ctx.strokeStyle="#a2a7a5"
  ctx.stroke()

  ctx.beginPath()
    ctx.moveTo(190,95)
    ctx.lineTo(210,95)
    ctx.lineTo(205,60)
    ctx.lineTo(195,60)
  ctx.closePath()
  ctx.fillStyle="#ffffff"
  ctx.fill()
  ctx.strokeStyle="#a2a7a5"
  ctx.stroke()
  
  ctx.fillStyle = "#a2a7a5"
  ctx.fillRect(198.5,40,3,20)

ctx.fillStyle="#b0daf1"
ctx.beginPath()
ctx.arc(40,70,15,0,Math.PI*2)
ctx.closePath()
ctx.fill()
ctx.beginPath()
ctx.arc(60,57.5,17.5,0,Math.PI*2)
ctx.closePath()
ctx.fill()
ctx.beginPath()
ctx.arc(80,57.5,15,0,Math.PI*2)
ctx.closePath()
ctx.fill()
ctx.beginPath()
ctx.arc(100,70,15,0,Math.PI*2)
ctx.closePath()
ctx.fill()
ctx.beginPath()
ctx.arc(60,82.5,15,0,Math.PI*2)
ctx.closePath()
ctx.fill()
ctx.beginPath()
ctx.arc(80,82.5,17.5,0,Math.PI*2)
ctx.closePath()
ctx.fill()
  
ctx.fillStyle="#ccfbfe"
ctx.beginPath()
ctx.arc(280,100,15,0,Math.PI*2)
ctx.closePath()
ctx.fill()
ctx.beginPath()
ctx.arc(300,87.5,17.5,0,Math.PI*2)
ctx.closePath()
ctx.fill()
ctx.beginPath()
ctx.arc(320,87.5,15,0,Math.PI*2)
ctx.closePath()
ctx.fill()
ctx.beginPath()
ctx.arc(340,100,15,0,Math.PI*2)
ctx.closePath()
ctx.fill()
ctx.beginPath()
ctx.arc(300,112.5,15,0,Math.PI*2)
ctx.closePath()
ctx.fill()
ctx.beginPath()
ctx.arc(320,112.5,17.5,0,Math.PI*2)
ctx.closePath()
ctx.fill()

  
  ctx.beginPath()
    ctx.moveTo(320,390)
    ctx.lineTo(320,320-mouse.y/3)
    ctx.lineTo(365,320 - (time%5)-mouse.y/3)
   ctx.lineTo(365,285-(time%5)-mouse.y/3)
    ctx.lineTo(320,285-mouse.y/3)
  ctx.closePath()
  ctx.fillStyle="#ffffff"
  ctx.fill()
  ctx.strokeStyle="#6D696A"
  ctx.stroke() 

  ctx.fillStyle="white"
  ctx.strokeStyle="#576490"
  let flagx = time%440-40
  ctx.fillRect(flagx,12,120,25)
  ctx.strokeRect(flagx,12,120,25)
  
  ctx.beginPath()
  ctx.font="15px Arial";
  ctx.fillStyle="#7796CB"
  ctx.fillText("Tokyo SkyTree",flagx+10,28);
 
 
}

setInterval(draw,30) 
var mouse = {
  x: 0,
  y: 0
} 


canvas.addEventListener("mousemove",function(evt){
  mouse.x = evt.offsetX  
  mouse.y = evt.offsetY
})