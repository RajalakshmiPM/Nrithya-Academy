function formValidate(){
	var x = document.forms["dance"]["username"]["password"].value;
	if(x==""){
		alert ("This field is required");
		return false;
	}
	else{
		alert("Form submitted successfully");
		return true;
	}
}