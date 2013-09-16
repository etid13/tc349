function hello(){
	var browser = "";
	var user = navigator.userAgent;
	
	if(user.indexOf("Chrome") > -1) {
		browser = "Google Chrome";
	} else if (user.indexOf("Safari") > -1) {
		browser = "Apple Safari";
	} else if (user.indexOf("Opera") > -1) {
		browser = "Opera";
	} else if (user.indexOf("Firefox") > -1) {
		browser = "Mozilla Firefox";
	} else if (user.indexOf("MSIE") > -1) {
		browser = "Microsoft Internet Explorer";
	} else{
		browser = "Unrecognized Browser";
	}

	alert("You are using " + browser + " as a browser.");
}