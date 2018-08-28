function human_turn(row){
  var col_num=0, row_num=0, count=0;
  for(i=0;i<grid_size;i++){
    $("#"+row+"-number-"+i).attr("fill","#eee");
    if(isNaN(parseInt($("#"+row+"-number-"+i).text()))){
      count++;
    }
    ("H "+count+" GRID "+grid_size);
    if(count==grid_size){game_over("human")}
  }
  $(".game-circle, .game-text")
  .mouseover(function(){
    var box=$(this).attr("id");
    row_num=row;
    col_num=parseInt((box.substr(box.length-2,2)).replace("-",""));
    beep.play();
    $("#"+row_num+"-circle-"+col_num).attr("fill-opacity","0.5");
  })
  .mouseleave(function(){
    $(".game-circle").attr("fill-opacity","1");
  }).click(function(){
    console.log(row_num+" "+col_num)
    // withought the below line, the game stops if you click on an empty space
    if(!isNaN(parseInt(($("#"+row_num+"-number-"+col_num).text())))){
      $(".game-circle, .game-text").off();
      $(".game-text").attr("fill","#000");
      remove_and_add(row_num, col_num, "human");
    }
  });
}

function remove_and_add(row, col, human_or_computer){
  var score=parseInt($("#"+row+"-number-"+col).text());
  add_scores(score, human_or_computer, col, row, function(end){
    $("#"+row+"-circle-"+col).fadeOut(1000);
    $("#"+row+"-number-"+col).detach();
  });
}

function computer_turn(col, row){
  var column_array=[], count=0;
  for(i=0;i<grid_size;i++){
    var col_text=parseInt($("#"+i+"-number-"+col).text());
    if(isNaN(col_text)){
      count++;
      col_text=low_points-1; // low_points-1 is below the low values on the grid
    }
    column_array[i]=col_text;
  }
  ("C "+count);
  if(count==grid_size){game_over("computer")}
  // work out which is the largest number in the column and its position
  var largest=Math.max.apply(Math, column_array);
  var column_position=column_array.indexOf(largest);

  // go to the highest number
    computer_move(row, col, column_position, function(row, col){
      remove_and_add(row, col, "computer");
    })
}

function computer_move(row, col, pos, end){
  var movement=setInterval(function(){
    if(row<pos){
      row++;
      $("#"+(row-1)+"-circle-"+col).attr("fill-opacity","1");
      $("#"+row+"-circle-"+col).attr("fill-opacity","0.5");
    }
    if(row>pos){
      row--;
      $("#"+(row+1)+"-circle-"+col).attr("fill-opacity","1");
      $("#"+row+"-circle-"+col).attr("fill-opacity","0.5");
    }
    if(row===pos){
      clearInterval(movement);
      end(row, col);
    }
  },500);
}

function game_over(player){
  if(player_score>computer_score){
    setTimeout(function(){
      var answer=confirm("Human Wins! "+player_score+" points\nPlay again?");
      if(answer){
        location.reload();
      }
    },1000)
  }
  else if(player_score<computer_score){
    setTimeout(function(){
      var answer=confirm("Computer Wins! "+computer_score+" points\nPlay again?");
      if(answer){
        location.reload();
      }
    },1000)
  }
  else{
    setTimeout(function(){
      var answer=confirm("It's a draw!\nPlay again?");
      if(answer){
        location.reload();
      }
    },1000)
  }
}
