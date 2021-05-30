function formValidation(){
	var  u_name = document.forms["sign_up_form"]["username"].value;
	var u_email = document.forms["sign_up_form"]["email"].value;
	var p_word = document.forms["sign_up_form"]["password"].value;
	var str_r_pword = document.forms["sign_up_form"]["password2"].value;
	var let = /(^[a-zA-Z\s]*$)/;
	var str_message = "";

	if((u_name != "") && (u_email != "") && (p_word != "")){
		if(u_name.length < 3){
			str_message = "Name should not be less than 3 characters!";
		}
		else{
			if(!let.test(u_name)){
			str_message = "Name should be letters only!";
			}
		}
		if(u_email.match(/@gmail.com/)!="@gmail.com" && u_email.match(/@yahoo.com/)!="@yahoo.com"){
			str_message += "\nOnly GMAIL and YAHOO email address are allowed!";
		}
		var str_pword = /(?=.*[@$!%*#?&])(?=.*?[0-9]).{8,}/;
		if(!str_pword.test(p_word)){
			str_message += "\nPassword should be atleast 8Letters _ Atleast one symbol and number!";
		}
		else{
			if(str_r_pword != p_word){
			str_message += "INVALID PASSWORD";
			}
		}
		if(str_message == ""){
			str_message = "SUCCESS!";
		}
		alert(str_message);
	}	
	else{
		alert("REQUIRED TO FILL-UP!");
	}
} 