// (C) 201grid_size Symon Hambrey
// www.symonhambrey@gmail.com

var svgNS="http://www.w3.org/2000/svg";
var textNS="http://www.w3.org/2000/svg";

var grid_size=0;
var human_play=true;
var human_score=0, computer_score=0;
var grid_number, numbers;
var start_row=0, low_points=0, high_points=0;
var wd=0,ht=0,ratio=0;

$("#quit").click(function(){
  location.href="https://hambreyhome.ddns.net"
})

var choice="<div id='selection'></br><div class='radio'><label><input type='radio' name='optradio' value=8>8x8</label></div><div class='radio'><label><input type='radio' value=10 name='optradio'>10x10</label></div><div class='radio'><label><input type='radio' value=12 name='optradio'>12x12</label></div></div>"

var beep=new Audio("sound/beep.mp3");
var pop=new Audio("sound/pop.mp3");
var score_sound=new Audio("sound/beep2.mp3");
var negative_sound=new Audio("sound/beep3.mp3");

$("#mod_title").text("Welcome to the grid puzzle");
$("#mod_text").text("Please choose a grid size :").append(choice);
$("#myModal").modal("show");

$("#selection").click(function(){
  grid_size=$('input[name="optradio"]:checked').val()
  $("#myModal").modal("hide");
  start(grid_size);
})

function start(grid_size){
  get_screen_size(grid_size);
  grid_number=populate_numbers(grid_size);
  numbers=shuffle_numbers(grid_number);
  set_grid();
  human_turn(start_row);
}
