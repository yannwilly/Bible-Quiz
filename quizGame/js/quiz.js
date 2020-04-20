
  var quizBox=document.getElementById('q');
  var scoreBar=document.getElementById('scoreBar');
   var restartbtn=document.getElementById('restart');
   var nextbtn=document.getElementById('next');
  var startbtn=document.getElementById('start');
   var quizQuestions=document.getElementById('quizs');
  var scoreCard=document.getElementById('scoreCard');
  var op1=document.getElementById('q1a');
  var op2=document.getElementById('q1b');
  var op3=document.getElementById('q1c');
  var op4=document.getElementById('q1d');
  var nextQ;
  var locked=true;

 var  someArray = [8,4,0,5,7,3,9,1,6,2];
someArray.sort(() => Math.random() - 0.5);
var input = {
    year: 0,
    month: 0,
    day: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
};



var interval = 1;
var selectedele;
var selectedId;
var counter;





 var app={
                questions:[
                          {q:'Où se rendait Paul lorsque le seigneur lui apparu ?', options:['Rome','syrie','Damas','corinthe'],answer:3},

                          {q:'Combien de vieillards se prosternent devant le trône ?',options:['12','28','20','24'],answer:4},

                          {q:'Quelle tribu n\'avait pas de part d\'héritage en Israël ?',options:['Lévi','Ruben','Juda','Joseph'],answer:1},

                          {q:'Quel disciple pria pour que Paul recouvre la vue ?',options:['Jean','Ananias','Pierre','autre'],answer:2},

                          {q:'Quelle est la tribut de Moïse ?',options:['Lévi','Ruben','Juda','autre'],answer:1},

                          {q:'Quelle est la tribut du roi Saül ?',options:['Benjamin','Ruben','Juda','Manassé'],answer:1},

                          {q:'Qui fut designé pour être associé aux 11 apôtres ?',options:['Barsabbas','Etienne','Matthias','André'],answer:3},

                          {q:'Ne vous conformez pas au siècle présent.... ?',options:['Jean 3v16','Romains 2v12','Actes 1v13','Romais 12v2'],answer:4},

                          {q:'Quel est le dernier livre de l\'ancien testament ?',options:['Proverbes','Malachie','Zacharie','Nahum'],answer:2},

                          {q:'Quel livre doit suivre ? Galates - Ephésiens - Philippiens - ...',options:['Romains','Philémon','Colossiens','Hébreux'],answer:3},
                          
                          ],
                index:0,
                load:function(){
                	   if(this.index<=this.questions.length-1){
                        nextQ = someArray[this.index];
                        quizBox.innerHTML=this.index+1+". "+this.questions[nextQ].q;      
                        op1.innerHTML=this.questions[nextQ].options[0];
                        op2.innerHTML=this.questions[nextQ].options[1];
                        op3.innerHTML=this.questions[nextQ].options[2];
                        op4.innerHTML=this.questions[nextQ].options[3];
                           this.scoreCard();
                        }
                        else{
                        this.showbtn();
                        hide();
                        stop();
                        someArray.sort(() => Math.random() - 0.5);
                        quizBox.innerHTML="Quiz Over......!!!"      
                        op1.style.display="none";
                        op2.style.display="none";
                        op3.style.display="none";
                        op4.style.display="none";

                        
                        
                        }
                },

                       check:function(ele){
                   
                         var id=ele;
                         
                         if(id == this.questions[nextQ].answer)
                         {

                         	//document.body.style.backgroundColor = "green";
                            document.getElementById("scoreBar").style.backgroundColor = "green";
                             this.score++;
                         	ele.className="correct";
                         	ele.innerHTML="Correct";
                            
                         }
                         else
                         {
                         	document.getElementById("scoreBar").style.backgroundColor = "red";
                             ele.className="wrong";
                         	ele.innerHTML="Wrong";
                         }
                          
                          
                          this.next();
                },

                    next:function(){
                    this.index++;
                    this.scoreCard();
                    this.load();
                 },


                 score:0,
                scoreCard:function(){
                	scoreCard.innerHTML="Score: "+this.score+"/"+this.index;
                }
                ,

                hidden:function()
                {
                    restartbtn.style.visibility = "hidden";
                }
                ,

                showbtn:function()
                {
                   restartbtn.style.visibility = "visible";
                }
                ,

                restart:function()
                {
                    this.index=0;
                    this.score = 0;
                    someArray.sort(() => Math.random() - 0.5);

                        op1.style.display="initial";
                        op2.style.display="initial";
                        op3.style.display="initial";
                        op4.style.display="initial";
                       startQuiz();

                    this.load();
                    
                }

            
                
           }






window.onload=hide();
window.onload=app.hidden();
  function button(ele){
           	     //alert(ele.value);
                    locked = true;
                    this.selectedele= ele.value;
                    this.selectedId = ele.id;
                  

                    //alert(this.selectedId);
                    //app.check(ele.value);
           }


   function  Next(){

              //this.selectedId.checked = false;
             if(locked)
             {
                  locked = false;
                  document.getElementById(selectedId).checked = false;
                  app.check(this.selectedele);
                  
             }
             // app.clickAble();
         } 


    function reload()
    {
        app.restart();
        //alert("restart");
    }

    function stop()
    {
        clearInterval(counter);
    }

    function timer()
    {
        var timestamp = new Date(input.year, input.month, input.day,
        input.hours, input.minutes, input.seconds);
        counter = setInterval(function () {
        timestamp = new Date(timestamp.getTime() + interval * 1000);
        document.getElementById('timer').innerHTML = "Time "+timestamp.getDay() + ':' + timestamp.getHours() + ':' + timestamp.getMinutes() + ':' + timestamp.getSeconds() + 's';
        }, Math.abs(interval) * 1000);
    }

    function hide()
    {
        nextbtn.style.visibility = "hidden";
    }

    function startQuiz()
    {
        startbtn.style.visibility = "hidden";
        nextbtn.style.visibility = "visible";
        app.load();
        
        timer();
        app.hidden();
    }


