function repeatString(txt, n) {
	var text = '';
	if(typeof txt === 'string') {
		for(var x = 0 ; x < n ; x++) {
			text += txt;
		}
		return text;
	} else {
		return 'Not A String !!';
	}
}