var grid_size=4;
var start_row=Math.floor((Math.random()*grid_size));
console.log(start_row)
var low_points=grid_size-(grid_size*2);
var high_points=grid_size;
var wd=($("#game_area").width())/grid_size;
var ht=($(document).height());
var ht_area=ht/grid_size;

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
