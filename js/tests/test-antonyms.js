const headElem=document.getElementById("test-head"),buttonsElem=document.getElementById("test-buttons"),pagesElem=document.getElementById("test-pages");class Quiz{constructor(e,t,s){this.type=e,this.questions=t,this.results=s,this.score=0,this.result=0,this.current=0}Click(e){let t=this.questions[this.current].Click(e);this.score+=t;let s=-1;if(t>=1)s=e;else for(let e=0;e<this.questions[this.current].answers.length;e++)if(this.questions[this.current].answers[e].value>=1){s=e;break}return this.Next(),s}Next(){this.current++,this.current>=this.questions.length&&this.End()}End(){for(let e=0;e<this.results.length;e++)this.results[e].Check(this.score)&&(this.result=e)}}class Question{constructor(e,t){this.text=e,this.answers=t}Click(e){return this.answers[e].value}}class Answer{constructor(e,t){this.text=e,this.value=t}}class Result{constructor(e,t){this.text=e,this.value=t}Check(e){return this.value<=e}}const results=[new Result("Вам многому нужно научиться",0),new Result("Вы уже неплохо разбираетесь",2),new Result("Ваш уровень выше среднего",4),new Result("Вы в совершенстве знаете тему",6)],questions=[new Question('Антоним к слову ""',[new Answer("Антоним",0),new Answer("Антоним1",1),new Answer("Антоним",0),new Answer("Антоним",0)]),new Question('Антоним к слову ""',[new Answer("Антоним",0),new Answer("Антоним1",1),new Answer("Антоним",0),new Answer("Антоним",0)]),new Question('Антоним к слову ""',[new Answer("Антоним",0),new Answer("Антоним",0),new Answer("Антоним",0),new Answer("Антоним1",1)]),new Question('Антоним к слову ""',[new Answer("Антоним",0),new Answer("Антоним",0),new Answer("Антоним1",1),new Answer("Антоним",0)]),new Question('Антоним к слову ""',[new Answer("Антоним",0),new Answer("Антоним",0),new Answer("Антоним",0),new Answer("Антоним1",1)]),new Question('Антоним к слову ""',[new Answer("Антоним",0),new Answer("Антоним1",1),new Answer("Антоним",0),new Answer("Антоним",0)])],quiz=new Quiz(1,questions,results);function Update(){if(quiz.current<quiz.questions.length){headElem.innerHTML=quiz.questions[quiz.current].text,buttonsElem.innerHTML="";for(let e=0;e<quiz.questions[quiz.current].answers.length;e++){let t=document.createElement("button");t.className="test__button",t.innerHTML=quiz.questions[quiz.current].answers[e].text,t.setAttribute("index",e),buttonsElem.appendChild(t)}pagesElem.innerHTML=quiz.current+1+" / "+quiz.questions.length,Init()}else buttonsElem.innerHTML="",headElem.innerHTML=quiz.results[quiz.result].text,pagesElem.innerHTML="Очки: "+quiz.score}function Init(){let e=document.getElementsByClassName("test__button");for(let t=0;t<e.length;t++)e[t].addEventListener("click",(function(e){Click(e.target.getAttribute("index"))}))}function Click(e){let t=quiz.Click(e),s=document.getElementsByClassName("test__button");for(let e=0;e<s.length;e++)s[e].className="test__button test__button--passive";1==quiz.type?(t>=0&&(s[t].className="test__button test__button--correct"),e!=t&&(s[e].className="test__button test__button--wrong")):s[e].className="test__button test__button--correct",setTimeout(Update,2e3)}Update();