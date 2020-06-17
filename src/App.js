import React , {Component}from 'react';
import './App.css';

export default class Game extends Component{
  constructor(props){
super(props)
this.state={



}
  }
componentDidMount(){
this.canvas=document.getElementById("canvas")
this.context=this.canvas.getContext("2d")
this.context.fillStyle="#BBADA0"
this.context.fillRect(0,0,535,535)
this.fire=false
this.game=[
          [0,0,0,0],
          [0,0,0,0],
          [0,0,0,0],
          [0,0,0,0]
]
this.tiles=[new Tile(this.context)]
this.generationNumber=1
this.moveTiles=this.GenerateMoveTiles()
this.arrr=[]
this.randomUsefulNumbersX=[]
this.randomUsefulNumbersY=[]
this.sameTilesNumberX=[]
this.sameTilesNumberY=[]
this.timers()

}
timers(){
  this.timer=setInterval(this.loop.bind(this),1000/10)


}
GenerateMoveTiles(){

const moveTiles=[]
moveTiles.push(new MoveTiles(this.context,this.canvas),new MoveTiles(this.context,this.canvas))

document.addEventListener("keydown",(e)=>{
  if(e.keyCode===39){
    this.fire=true
    for (let i = 0; i < 1; i++) {
     
      setTimeout(()=>{

        moveTiles.push(new MoveTiles(this.context,this.canvas,this.randomUsefulNumbersX,this.randomUsefulNumbersY))
  
      },100)         
    }

  }
  else if(e.keyCode===37){
    for (let i = 0; i < 1; i++) {
    
      setTimeout(()=>{

        moveTiles.push(new MoveTiles(this.context,this.canvas,this.randomUsefulNumbersX,this.randomUsefulNumbersY))
  
      },100)         
        } 
  
  }
  else if(e.keyCode===38){
  
    for (let i = 0; i < 1; i++) {
    
      setTimeout(()=>{

        moveTiles.push(new MoveTiles(this.context,this.canvas,this.randomUsefulNumbersX,this.randomUsefulNumbersY))
  
      },100)          
        }
  }
  else if(e.keyCode===40){
  
    for (let i = 0; i < 1; i++) {
    
      setTimeout(()=>{

        moveTiles.push(new MoveTiles(this.context,this.canvas,this.randomUsefulNumbersX,this.randomUsefulNumbersY))
  
      },100)          
        }

  
  }
})
return moveTiles

}

update(){

  //sağ tuş 39
  //sol tuş 37
  //yukarı tuş 38
  //aşağı tuş 40
  
this.moveTiles.forEach(moveTiles=>{
  for (let i = 0; i < this.moveTiles.length; i++) {
    }
// this.game[moveTiles.y][moveTiles.x]=moveTiles.tileNumber
this.randomUsefulNumbersX=[0,1,2,3].filter(tilenumberx=>tilenumberx!==moveTiles.x)
this.randomUsefulNumbersY=[0,1,2,3].filter(tilenumbery=>tilenumbery!==moveTiles.y)
  this.sameTilesNumberX.push(moveTiles.x)
  this.sameTilesNumberY.push(moveTiles.y)
  if(this.sameTilesNumberX[0]===this.sameTilesNumberX[1]&&this.sameTilesNumberY[0]===this.sameTilesNumberY[1]){
moveTiles.x=Math.floor(Math.random()*3)
moveTiles.y=Math.floor(Math.random()*3)

    moveTiles.draw()
    clearInterval(this.timer)
    
  }
   
  this.tileArrayNumber=0
  if(moveTiles.x)
  for (let i = 0; i < this.moveTiles.length-1; i++) {
    if(this.moveTiles[this.tileArrayNumber+i].x===this.moveTiles[this.tileArrayNumber+i+1].x&&this.moveTiles[this.tileArrayNumber+i].y===this.moveTiles[this.tileArrayNumber+i+1].y){

  
  
    }
    if(moveTiles.tileNumber===4){

      this.moveTiles[this.tileArrayNumber].color="#EDE0C8"
      this.moveTiles[this.tileArrayNumber+1].color="#EDE0C8"
      
      }
  }




})
 
  



}

  draw(){




  }
  loop(){
this.update()

this.draw()
this.tiles.forEach(tile=>{tile.draw()})
this.moveTiles.forEach(tile=>{tile.draw()})
this.moveTiles.forEach(tile=>{tile.update()})


  }
  render(){
    return (
<div>
  <canvas id="canvas" width="535" height="535" style={{border:"solid 2px",margin:250}}></canvas>
</div>
      );
  }
  
}
class Tile{
constructor(context){
this.context=context
this.between=7
this.x=0
this.y=0
this.gridSize=125
}

draw(){
for (let i = 1; i <=4 ;i++) {
  this.context.fillStyle="#CCC0B2"
  this.context.fillRect(this.between*i+(this.x+i-1)*this.gridSize,this.between+this.y*this.gridSize,125,125)
 for(let a=1;a<=4;a++){
  this.context.fillRect(this.between*a+(this.x+a-1)*this.gridSize,this.between*(i+1)+(this.y+i)*this.gridSize,125,125)
 }
}

}

}
class MoveTiles {
constructor(context,canvas,xar,yar){
  
  this.canvas=canvas
this.context=context;
this.between=7
this.xar=xar
this.yar=yar
this.numbX=xar ? xar:[0,1,2,3];
this.numbY=yar ? yar:[0,1,2,3];
this.x=this.numbX[Math.floor(Math.random()*3)]
this.y=this.numbY[Math.floor(Math.random()*3)]
this.heightAndWidth=125
this.gridSize=125;
this.color="#EEE4DA"
this.tileNumber=2
this.fontColor="#726761"
this.rgbFollowerX=0
this.rgbFollowerY=0
}

draw(){
  this.context.fillStyle=this.color
this.context.fillRect(this.between*(this.x+1)+this.x*this.gridSize,this.between*(this.y+1)+this.y*this.gridSize,this.heightAndWidth,this.heightAndWidth)
this.context.fillStyle=this.fontColor
this.context.font = "70px Arial";
this.context.fillText(this.tileNumber, this.between*(this.x+1)+this.x*this.gridSize+45, this.between*(this.y+1)+this.y*this.gridSize+85);
this.context.fillStyle="black"

}


update(){
  this.rgb=[]
  this.rgb.push(this.r,this.g,this.b)
  //sağ tuş 39
  //sol tuş 37
  //yukarı tuş 38
  //aşağı tuş 40
document.addEventListener("keydown",(e)=>{
if(e.keyCode===39){
  this.x=3

}
else if(e.keyCode===37){

  this.x=0
}
else if(e.keyCode===38){


  this.y=0
}
else if(e.keyCode===40){

this.y=3

}
})

this.r=this.getImageData().data[0]
this.g=this.getImageData().data[1]
this.b=this.getImageData().data[2]

     document.addEventListener("click",(e)=>{
      const rect = this.canvas.getBoundingClientRect()
      this.posX=Math.floor(e.clientX-rect.left)
this.posY=Math.floor(e.clientY-rect.top)
      const imgData2= this.context.getImageData(this.posX,this.posY,1,1)

      this.r1=imgData2.data[0]
      this.g2=imgData2.data[1]
      this.b3=imgData2.data[2]
      this.posX=Math.floor(e.clientX-rect.left)
      this.posY=Math.floor(e.clientY-rect.top)
   
     })
      
   /*
      0  1  2  3
   0 [ ][ ][ ][ ]
   1 [ ][ ][ ][ ]
   2 [ ][ ][ ][ ]
   3 [ ][ ][ ][ ]
    
   */ 
      



}








getImageData(){

  const imgData = this.context.getImageData(29+this.between*(this.rgbFollowerX+1)+this.gridSize*this.rgbFollowerX,19+this.between*(this.rgbFollowerY+1)+this.rgbFollowerY*this.gridSize,1,1);
 
 
 return imgData
 }


}