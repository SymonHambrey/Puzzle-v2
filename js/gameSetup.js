// (C) 201grid_size Symon Hambrey
// www.symonhambrey@gmail.com

var svgNS="http://www.w3.org/2000/svg";
var textNS="http://www.w3.org/2000/svg";

var human_play=true;
var human_score=0, computer_score=0;

var beep=new Audio("sound/beep.mp3");
var pop=new Audio("sound/pop.mp3");
var score_sound=new Audio("sound/beep2.mp3");
var negative_sound=new Audio("sound/beep3.mp3");

var grid_number=populate_numbers();
var numbers=shuffle_numbers(grid_number);
set_grid();
human_turn(start_row);
