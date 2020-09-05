
function showresult(choise){
var n1=parseFloat(document.getElementById('num1').value);
var n2=parseFloat(document.getElementById('num2').value);
var r;
var c=choise;

switch(c)
	{
	case '1':
		r=n1+n2;
		break;
	case '2':
		r=n1-n2;
		break;
	case '3':
		r=n1*n2;
		break;
	case '4': 
		r=n1/n2;
		break;
	case '5':
		r=n2*100/n1;
		break;
	case '6':
		r=Math.abs(n1);
		break;
	case '7':
		r=Math.abs(n2);
		break;
	case '8':
		r=Math.sqrt(n1);
		break;
	case '9' :
		r=Math.sqrt(n2);
	default:
		break;
			
	}
document.getElementById('result').value=r;	


}


	var word = document.querySelector('#input');
	var inputBtn = document.querySelector('#check');
	var feedback = document.querySelector('#feedback');
	var checkfb = function(fb_text){
		if (feedback.hasChildNodes()){
			
			feedback.replaceChild(fb_text, feedback.childNodes[0]);
		} else {
			
			feedback.appendChild(fb_text);
		} 
	}; 

	var checkWord = function(){
		var original = word.value.split(''); 
		var toBeReversed = word.value.split(''); 
		var reversed = toBeReversed.reverse(); // original word reversed
		for (var letter=0;letter<original.length;letter++){
			// compare original to reverse letters
      var fb;
      var fb_text;
			if (reversed[letter]!=original[letter]){
				// set feedback text and css style and add to page
				fb = word.value + ' is not a palindrome!';
				fb_text = document.createTextNode(fb);
				feedback.setAttribute('class','notpalindrome');
				checkfb(fb_text,fb); // checks for existing feedback
				break; // no match, not a palindrome end check
			} else if (letter == original.length-1){
				// set feedback text and css style and add to page
				fb = word.value + ' is a palindrome!';
				fb_text = document.createTextNode(fb);
				feedback.setAttribute('class','palindrome');
				checkfb(fb_text); // checks for existing feedback
			}
		}
	}; 

	inputBtn.addEventListener('click',function(e){
		e.preventDefault(); 
		checkWord();
	});

	var checkForEnter = function(e){
		if (e.keyCode == 13){ // if enter key is pressed
			e.preventDefault();
			checkWord();
		}
	};


function myfunction(){
	let x=document.querySelector(".anagram1").value;
	let y=document.querySelector(".anagram2").value;
	
	if (clearString(x) === clearString(y)){
		document.querySelector(".result").innerHTML="An Anagram";

	}
	else{
		document.querySelector(".result").innerHTML="Not an Anagram";
	}
}

function clearString(str){
	return str.replace(/\W/g,'').toLowerCase().split('').sort().join('');
}




	function randIntr(Hl, Ll) {
      var no1 = Math.floor(Math.random() * (Hl - Ll + 1) ) + Ll;
      var no2 = Math.floor(Math.random() * (Hl - Ll + 1) ) + Ll;
      document.getElementById('random').innerHTML = no1;
      document.getElementById('random2').innerHTML = no2;

      var nu1 = no1 % 3;
      var nu2 = no2 % 3;

      document.getElementById('m1').innerHTML = nu1;
      document.getElementById('m2').innerHTML = nu2;

      var dict = {0: "Human", 1: "Cockroach", 2: "Nuclear Bomb"};
      document.getElementById('d1').innerHTML = dict[nu1];
      document.getElementById('d2').innerHTML = dict[nu2];

      if (nu1 == nu2) 
      {
      	document.getElementById('f1').innerHTML = "TIE";
      }

      else if ((nu1 == 0 && nu2 == 1) || (nu1 == 1 && nu2 == 0))
      {
      	document.getElementById('f1').innerHTML = "Human Survives";
      }
      else if ((nu1 == 0 && nu2 == 2) || (nu1 == 2 && nu2 == 0))
      {
      	document.getElementById('f1').innerHTML = "Human Dies";
      }
      else if (( nu1 == 1 && nu2 == 2) || (nu1 == 2 && nu2 == 1))
      {
      	document.getElementById('f1').innerHTML = "Cockroach Survives";
      }

   }
