var $ = function(id) {
    return document.getElementById(id);
};

var calculate = function() {
	var length = $("length_input").value;
	var width = $("width_input").value;
	var isValid = true;
	console.log(length);
	console.log(width);
	if (length === "") { 
		alert("Please enter length value");
		$("length_error").firstChild.nodeValue = "This field is required.";
		isValid = false;
	} else { $("length_error").firstChild.nodeValue = ""; } 

	if (width === "") { 
		alert("Please enter width value");
		$("width_error").firstChild.nodeValue = "This field is required.";
		isValid = false;
	} else { $("width_error").firstChild.nodeValue = ""; }
	
	if (length<0) { 
		$("length_error").firstChild.nodeValue = "This value should be greater than zero.";
		isValid = false;
	} else { $("length_error").firstChild.nodeValue = ""; }     
       
	if (width<0) { 
		$("width_error").firstChild.nodeValue = "This value should be greater than zero.";
		isValid = false;
	} else { $("width_error").firstChild.nodeValue = ""; }     
       	   
	
	if (isValid) {
		$("calculate_form").submit(); 
		var area_rect = length*width;
		var perimeter = 2*length*width;
		alert("Area of Rectangle:  "+area_rect+"\nPerimeter of Rectangle: "+perimeter);
		$("length_input").value = "";
		$("width_input").value = "";
		
	}
};

window.onload = function() {
    $("calculate_btn").onclick = calculate;
    $("length_input").focus();
};
