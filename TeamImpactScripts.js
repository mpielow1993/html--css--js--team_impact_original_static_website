/*JS functions Reveal[page]Quote() - causes quotes to appear when cursor moves over <h1> page heading*/ 

function RevealBoxingQuote(){
	document.getElementById("boxing_quote").innerHTML = "<i>'The sweet science...'</i>";
}

function HideBoxingQuote(){
	document.getElementById("boxing_quote").innerHTML = "";
}

function RevealBJJQuote(){
	document.getElementById("bjj_quote").innerHTML = 
	"<i>'If size mattered, the elephant would be the king of the jungle...'</i><br><br> - Rickson Gracie";
}

function HideBJJQuote(){
	document.getElementById("bjj_quote").innerHTML = "";
}

function RevealMMAQuote(){
	document.getElementById("mma_quote").innerHTML = 
	"<i>'Absorb what is useful,<br>discard what is useless,<br>add what is uniquely your own...'</i><br><br> - Bruce Lee";
}

function HideMMAQuote(){
	document.getElementById("mma_quote").innerHTML = "";
}

function RevealMuayThaiQuote(){
	document.getElementById("muayThai_quote").innerHTML = "<i>'The art of eight limbs...'</i>";
}

function HideMuayThaiQuote(){
	document.getElementById("muayThai_quote").innerHTML = "";
}

function RevealWrestlingQuote(){
	document.getElementById("wrestling_quote").innerHTML = 
	"<i>'Once you've wrestled, everything in life is easy...'<br><br></i> - Dan Gable";
}

function HideWrestlingQuote(){
	document.getElementById("wrestling_quote").innerHTML = "";
}

function RevealInstructorQuote(){
	document.getElementById("instructor_quote").innerHTML = 
	"<i>'The mediocre teacher tells,<br>the good teacher explains,<br>the superior teacher demonstrates,<br>the great teacher inspires...'<br><br></i> - William Arthur Ward";
}

function HideInstructorQuote(){
	document.getElementById("instructor_quote").innerHTML = "";
}

/*JS function ValidateRequiredFields - checks mandatory fields of the Contact Form for null values*/

function ValidateRequiredFields() {
	
	var firstName = document.forms["tiForm"]["firstname"].value;
	var lastName = document.forms["tiForm"]["lastname"].value;
	var eMail = document.forms["tiForm"]["email"].value;
	var Message = document.forms["tiForm"]["message"].value;
	
	if( firstName == "") { 
		alert("Please fill in the mandatory field 'First Name'");
		return false;
	}
	if( lastName == "") { 
		alert("Please fill in the mandatory field 'Last Name'");
		return false;
	}
	if( eMail == "") { 
		alert("Please fill in the mandatory field 'E-mail Address'");
		return false;
	}
	if( Message == "") { 
		alert("Please fill in the mandatory field 'Message'");
		return false;
	}
	else {
		return true;
	}
}

/*JS function ValidateCallingTime - checks the user enters a time that the gym is open in the Contact Form*/

function ValidateCallingTime() {
	
	var hour = document.forms["tiForm"]["hour"].value
	var lastName = document.forms["tiForm"]["ampm"].value;
	var eMail = document.forms["tiForm"]["day"].value;
	
	if( (parseInt("hour") < 7 || parseInt("hour") == 12) && (ampm == "am") ) { 
		alert("Please select a time that we are open");
		return false;
	}
	if( (parseInt("hour") >= 10 || parseInt("hour") <= 11) && (ampm == "pm")  ) { 
		alert("Please select a time that we are open");
		return false;
	}
	if( (parseInt("hour") >= 5) && (ampm == "pm") && (day == "saturday")) { 
		alert("Please select a time that we are open");
		return false;
	}
	else {
		return true;
	}
}




