function change(elmnt) {
    switch(elmnt.innerHTML){
	    case "0":
	        elmnt.innerHTML = "0";
	        break;
	    case "O":
	        elmnt.innerHTML = "9";
	        break;
	    case "o":
	        elmnt.innerHTML = "9";
	        break;
	    case "9":
	        elmnt.innerHTML = "O";
	        break;
	    case "0002":
	        elmnt.innerHTML = "E";
	        break;
	    case "E":
	        elmnt.innerHTML = "E";
	        break;
	    }

}
