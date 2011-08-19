(function(exports){
	var domId	= 'NotifyBar';
	var cookieName	= 'NotifyBar';
	/**
	 * @constructor
	*/
	var NotifyBar	= function(message, filter){

		if( filter && filter() === false )			return;

		// if already notified
		if( readCookie(cookieName) === 'noShow' )	return;

		pushCss();
		
		displayBar(message);
		
		// bind close button
		var closeButton	= document.getElementById('NotifyBar').getElementsByClassName('close')[0];
		closeButton.addEventListener('click', function(event){
			hideBar();
		}, false );
		

		// bind no button
		var noShowButton	= document.getElementById('NotifyBar').getElementsByClassName('noShow')[0];
		noShowButton.addEventListener('click', function(event){
			createCookie(cookieName, 'noShow', 365);		
			hideBar();
		}, false );
	}

	/**
	 * display the bar
	*/
	var displayBar	= function(message){
		var container	= document.createElement("div");
		container.id	= domId;
		document.body.appendChild(container);

		var spanMsg	= document.createElement("span");
		spanMsg.innerHTML	= message;
		spanMsg.className	= "message";
		container.appendChild(spanMsg);
		
		var spanClose	= document.createElement("span");
		spanClose.innerHTML	= '[close]';
		spanClose.className	= "close";
		container.appendChild(spanClose);

		var spanNoShow	= document.createElement("span");
		spanNoShow.innerHTML	= "No more show me this message : <input type='checkbox'>"
		spanNoShow.className	= "noShow";
		container.appendChild(spanNoShow);
	}
	
	var pushCss	= function(){
		var cssRules	= "#"+domId+" {"+
			"position	: absolute;"+
			"top		: 0px;"+
			"left		: 0px;"+
			"width		: 100%;"+
			"font-size	: 1.2em;"+
			"line-height	: 1.8em;"+
			"color		: #202020;"+
			"background-color: #F4FA58;"+
			"border-bottom	: 1px solid black;"+
		"}"+
		"#"+domId+" span {"+
			"top		: 3px;"+
		"}"+
		"#"+domId+" span.message {"+
			"margin-left	: 30px;"+
		"}"+
		"#"+domId+" span.close {"+
			"position	: absolute;"+
			"right		: 10px;"+
			"top		: 3px;"+
			"cursor		: pointer;"+
		"}"+
		"#"+domId+" span.noShow {"+
			"position	: absolute;"+
			"top		: 3px;"+
			"right		: 4em;"+
			//"font-size	: 0.5em;"+
		"}";
		
		var element	= document.createElement("style");
		element.type	= "text/css";
		element.innerText= cssRules;
		document.head.appendChild(element);
	}

	/**
	 * Hide the bar
	*/
	var hideBar	= function(){
		var container	= document.getElementById(domId)
		container.parentNode.removeChild( container );
	}
		
	/**
	 * Create cookie
	 * - from http://www.quirksmode.org/js/cookies.html
	*/
	function createCookie(name,value,days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
	}
	
	/**
	 * Read cookie
	 * - from http://www.quirksmode.org/js/cookies.html
	*/
	function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}
	/**
	 * Erase cookie
	 * - from http://www.quirksmode.org/js/cookies.html
	*/	
	function eraseCookie(name) {
		createCookie(name,"",-1);
	}

	/**
	 * Export the NotifyBar
	*/
	exports.NotifyBar	= NotifyBar;
})(this)