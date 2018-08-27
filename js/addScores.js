var player_score=0, computer_score=0;

function add_scores(score_to_add, player_or_computer, col, row, end){

  var score_ticker=setInterval(function(){
    if(score_to_add>0){
      if(player_or_computer==="human"){
        player_score++;
        $("#human_score").text(player_score);
      }
      if(player_or_computer==="computer"){
        computer_score++;
        $("#computer_score").text(computer_score);
      }
      score_sound.play();
      score_to_add--;
    }

    if(score_to_add<0){
      if(player_or_computer==="human"){
        player_score--;
        $("#human_score").text(player_score);
      }
      if(player_or_computer==="computer"){
        computer_score--;
        $("#computer_score").text(computer_score);
      }
      negative_sound.play();
      score_to_add++;
    }

    if(score_to_add===0){
      clearInterval(score_ticker)
      end(true)
      if(player_or_computer==="human"){
        $("#left_side").css("border-style","hidden");
        $("#right_side").css("border-style","solid");
        pop.play();
        computer_turn(col, row);
      }
      else{
        $("#right_side").css("border-style","hidden");
        $("#left_side").css("border-style","solid");
        pop.play();
        human_turn(row);
      }
    }

  },200);
};
