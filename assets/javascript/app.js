$(document).ready(function() {
  var ima=["assets/images/ques1.jpeg","assets/images/ques2.jpg","assets/images/ques3.jpeg","assets/images/ques4.png","assets/images/ques5.webp","assets/images/ques6.webp","assets/images/ques7.jpg"]
  var gif=["assets/images/answer1.gif","assets/images/answer2.gif","assets/images/answer3.gif","assets/images/answer4.gif","assets/images/answer5.gif","assets/images/answer6.gif","assets/images/answer7.gif"]
  var questions = [
    [
      "Which book is this the opening line of:",
      "The Catcher in the Rye, by J.D. Salinger",
      "1984, by George Orwell",
      "Catch 22, by Joseph Heller",
      "The Bone, by Nick Hayes",
      "1984, by George Orwell"
    ],
    ["When was the film Love Actually released?", "2001", "2002", "2003","2004", "2003"],
    ["Which country is this the flag of? ","Japan","Bangladesh","Nepal","Nigeria","Bangladesh"],
    ["Who has the most Olympic medals of all colours in history?","Michael Phelps","Jenny Thompson","Larisa Latynina","Ryan Lochte","Michael Phelps"],
    ["True caviar is the roe of which type of fish?","Sturgeon","Salmon","Steelhead trout","Horsea","Sturgeon"],
    ["What was the name of the astronaut who joined Neil Armstrong and Buzz Aldrin for the moon landing?","Alan Shepard","Michael Collins","John Glenn","Jason Derulo","Michael Collins"],
    ["What breed of dog is this?","English Springer Spaniel","Cockapoo","Cocker Spaniel","Border Collie","English Springer Spaniel"]
  ];
  var right=0;
  var wrong=0;
  var unans=0;
  var time=15;
  var ch1;
  var ch2;
  var ch3;
  var ch4;
  var pos = 0;
  var question = "";
  var intervalID;
  var intervalID1;

  var timeoutID;
  var timeoutID1;
  var timeoutID2;
  function start() {
   
    $(".btn1").hide();
    $(".btnStart").on("click", function() {
      $(".btnStart").hide();
      // $(".time").html(`Time Remaining:${time}`);
      // interval();
      display();
      
      click();
      
      
      
      // question = questions[pos][0];
      // ch1 = questions[pos][1];
      // ch2 = questions[pos][2];
      // ch3 = questions[pos][3];
      // ch4 = questions[pos][4];
      // $(".btn1").show();
      // $(".question").html(`${question}`);
      // $("#bt1").html(ch1);
      // $("#bt2").html(ch2);
      // $("#bt3").html(ch3);
      // $("#bt4").html(ch4);

      // click();
     
      // return
      //     ch1: ch1;
      //     ch2: ch2;
      //     ch3: ch3;
      //     ch4: ch4;
  
    });
    
  }

  function click() {
    $(".btn1").on("click", function() {
      clearTimeout(timeoutID1)
      clearTimeout(timeoutID2)
      clearTimeout(timeoutID)
      clearInterval(intervalID);  
      $(".btn1").hide();
      if ($(this).html() === questions[pos-1][5]) {
        right++;
       
        $(".answer").html(`Correct!`);
        
        
      } else if ($(this).html() !== questions[pos-1][5]) {
        wrong++;
       
        $(".answer").html(`Nope!`);
        $(".correctAns").html(`The correct answer is: ${questions[pos-1][5]}`);
        
        
      }
      $(".notans").html(`<img class="gif" src="${gif[pos-1]}">`)
      timeoutID1=setTimeout(display,4000)
      startover();
    
      
     
    });
  }

  function interval(){
    //  intervalID=setInterval(run,1000)
    $(".time").html(`Time Remaining:${time}`);
      intervalID=setInterval(function (){
        
          time--;
          $(".time").html(`Time Remaining:${time}`);
         if(time<=0){
           unans++;
           clearInterval(intervalID);
           $(".btn1").hide();
           $(".answer").html(`Out of Time!`);
           $(".correctAns").html(`The correct answer is: ${questions[pos-1][5]}`);
           $(".notans").html(`<img class="gif" src="${gif[pos-1]}">`)
           timeoutID=setTimeout(display, 4000);
           startover();  
         }  
         
      },1000);
    
   
    
      }
    

  // function run(){
    
  //   $(".time").html(`Time Remaining:${time}`);
   
  //   time--;
    
  //   if(time<0){
  //     clearInterval(intervalID);
  //     $(".btn1").hide();
  //     $(".answer").html(`Out of Time!`);
  //     $(".correctAns").html(`The correct answer is: ${questions[pos][5]}`);
  //     timeoutID=setTimeout(display, 2000);
  //   }    
  //   return time;
  // }

  function display(){
    
     time=15;
     if(pos<questions.length){
       $(".notans").html("");
      $(".answer").html("");
      $(".correctAns").html("");
      question = questions[pos][0];
      ch1 = questions[pos][1];
      ch2 = questions[pos][2];
      ch3 = questions[pos][3];
      ch4 = questions[pos][4];
      $(".btn1").show();
      $(".question").html(`${question}`);
      $(".answer").html(`<img class="quesimg" src="${ima[pos]}" >`)
      
      $("#bt1").html(ch1);
      $("#bt2").html(ch2);
      $("#bt3").html(ch3);
      $("#bt4").html(ch4);
      
      pos++;
      clearTimeout(timeoutID1)
      clearTimeout(timeoutID2)
      clearTimeout(timeoutID)
      clearInterval(intervalID); 
      
      interval()
      // click();
      
     
    }
   
    
    
  }

  function result(){
    $(".btn1").hide();
    time=15;
    $(".time").html(`Time Remaining:${time}`);
    $(".question").html("All done, here's how you did: ")
    $(".answer").html(`Correct Answers: ${right}`)
    $(".correctAns").html(`Wrong Answers: ${wrong}`)
    $(".notans").html(`Unanswered: ${unans}`)
    $(".restart").html(`<button type="button" class="btn btn-large btn-block btn-default btnStart">Start Over</button>`)
    $(".restart").show();
  }

  function startover(){
    if(pos===questions.length){
     
      clearInterval(intervalID)
      clearTimeout(timeoutID)
      timeoutID2=setTimeout(result,4000)
     
      
    }   
  }


  start();
function reset(){
  $(".restart").on("click", function(){
     right=0;
     wrong=0;
     unans=0;
     time=15;
     pos = 0;
     question = "";
   clearInterval(intervalID)
   clearTimeout(timeoutID)
   clearTimeout(timeoutID1)
   clearTimeout(timeoutID2)
    $(".restart").hide();
    display();  
    
  })
}

reset();

});
