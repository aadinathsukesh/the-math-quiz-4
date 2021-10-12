player1_name = localStorage.getItem("player1_Name");
player2_name = localStorage.getItem("player2_Name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_ques").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_ans").innerHTML = "Answer Turn - " + player2_name;

function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_word = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br> ans: <input type='text' id='input_checkbox'>";

    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"

    row = question_word + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
}
question_turn = "player1";
answer_turn = "player2";

function check(){
getinput = document.getElementById("input_checkbox").value;
if (getinput == actual_answer){
    
    if (answer_turn == "player1"){
        update_player1_score = player1_score+1;
        document.getElementById("player1_score").innerHTML = player1_score;
    }
    else{
        update_player2_score = player2_score+1;
        document.getElementById("player2_score").innerHTML = player2_score;
    }
    }

    if (question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_ques").innerHTML = "question_turn - " + player2_name;
    }
    else{
        question_turn = "player1";
        document.getElementById("player_ques").innerHTML = "question_turn - " + player1_name;
    }

    if (answer_turn == "player2"){
        answer_turn = "player1";
        document.getElementById("player_ans").innerHTML = "answer_turn - " + player1_name;
    }
    else{
        answer_turn = "player2";
        document.getElementById("player_ans").innerHTML = "answer_turn - " + player2_name;
    }
    document.getElementById("number1").innerHTML = "";
    document.getElementById("number2").innerHTML = "";
}
