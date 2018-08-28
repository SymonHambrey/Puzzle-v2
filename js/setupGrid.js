var radius=(ratio/2);
var diameter=radius*2;
var stroke_colour="#000";
var stroke_width=3;

function set_grid(){
  var count=0;
  var adjusted_x=((diameter+radius)/100);
  for(row=0;row<grid_size;row++){
    for(column=0;column<grid_size;column++){
      var cx=(column*diameter+stroke_width)+radius,cy=(row*diameter)+radius;
      createCircle(stroke_colour,radius,cx,cy,row,column,numbers[count],adjusted_x);
      count++;
    }
  }
}

function createCircle(stroke,size,cx,cy,row,column,number,tx){
  if(number<0){
    var text_x=tx*10;
    var fill="#F80D0D"
  };
  if(number>0){
    var text_x=tx*7;
    var fill="#54E50C"
  };
  if(number>9){ var text_x=tx*15; };
  if(number<-9){ var text_x=tx*20; };
  if(wd>ratio*grid_size){
    cx=cx+((wd-(ratio*grid_size))/(grid_size/2));
  }
  else{
    size-=1;
    cx-=2;
    $("#right_side").css("margin-top","-5%");
  }

  var circle=document.createElementNS(svgNS,"circle");
  circle.setAttributeNS(null,"class","game-circle");
  circle.setAttributeNS(null,"id",row+"-circle-"+column);
  circle.setAttributeNS(null,"cx",cx);
  circle.setAttributeNS(null,"cy",cy);
  circle.setAttributeNS(null,"r",size);
  circle.setAttributeNS(null,"fill",fill);
  circle.setAttributeNS(null,"stroke",stroke);
  circle.setAttributeNS(null,"stroke-width",stroke_width);

  var text=document.createElementNS(textNS,"text");
  text.setAttribute("class","game-text");
  text.setAttribute("id",row+"-number-"+column);
  text.setAttribute("x",cx-text_x);
  text.setAttribute("y",cy+(tx*7));
  text.setAttribute("fill","#000");
  text.setAttribute("font-size",tx*30);
  text.textContent=number;

  document.getElementById("mySVG").appendChild(circle);
  document.getElementById("mySVG").appendChild(text);
}
