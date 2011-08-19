(function(exports){
	/**
	 * @constructor
	*/
	var notifyAppBar	= function(opts){
		opts		= opts		|| {};
		this._barId	= opts.id	|| "";
		var cookieName	= 'notifyAppBar'+this._barId;

		if( this._isChrome() === false )		return;

		if( readCookie(cookieName) === 'notified' )	return;
		

		console.log("built runningChrome", this._isChrome())
		console.log("built cookie", readCookie(cookieName));
		this._display();
		
		//createCookie(this._cookieName, "notified");
		console.log("cookie", readCookie(this._cookieName))
		//eraseCookie(this._cookieName)
		//setTimeout(function(){
		//	this._hide();
		//}.bind(this), 2*1000)
	}
	/**
	 * display the bar
	*/
	notifyAppBar.prototype._display	= function(){
		this._container	= document.createElement("div");
		this._container.innerHTML = "Super pacmaze application in chrome appstore ?";
		this._container.id	= "prout2"; 
		//this._container.style.zIndex	= 9999;	// to be in front of the rest
		//this._container.style.position	= "absolute";
		//this._container.style.= "absolute";
		document.body.appendChild(this._container);
	}
	/**
	 * Hide the bar
	*/
	notifyAppBar.prototype._hide	= function(){
		this._container.parentNode.removeChild(this._container);
	}
	/**
	 * @returns {Boolean} true if the client is chrome, false otherwise
	*/
	notifyAppBar.prototype._isChrome	= function(){
		return navigator.userAgent.match(/chrome/i) ? true : false;
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
	 * Export the notifyAppBar
	*/
	exports.notifyAppBar	= notifyAppBar;
})(this)