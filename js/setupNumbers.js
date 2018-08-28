var grid_size=8;
var start_row=Math.floor((Math.random()*grid_size));
var low_points=grid_size-(grid_size*2);
var high_points=grid_size;
var wd=0,ht=0,ratio=0;
get_screen_size();

// Populate numbers
function populate_numbers(){
  var grid_number=[];
  points=low_points;
  for(i=0;i<grid_size*grid_size;i++){
    grid_number[i]=points;
    if(points===high_points){
      points=low_points;
    }
    if(points===-1){
      points=1;
    }
    points++;
  }
  return grid_number;
}

// Shuffle the array
function shuffle_numbers(array){
  var currentIndex=array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0!==currentIndex){

    // Pick a remaining element...
    randomIndex=Math.floor(Math.random()*currentIndex);
    currentIndex-=1;

    // And swap it with the current element.
    temporaryValue=array[currentIndex];
    array[currentIndex]=array[randomIndex];
    array[randomIndex]=temporaryValue;
  };
  return array;
};

function get_screen_size(){
  var window_width=$(window).width();
  var window_height=$(window).height();
  var game_width=$("#game_area").width();
  var game_height=$("#game_area").height();
  if(window_width>window_height){
    wd=game_width;
    ht=window_height;
    ratio=window_height/grid_size;
  }
  else{
    wd=game_height;
    ht=window_width;
    ratio=game_width/grid_size;
  }
  $("#mySVG").css("height",ht);
}
