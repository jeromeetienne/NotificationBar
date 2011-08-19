(function(exports){
	/**
	 * @constructor
	*/
	var notifyAppBar	= function(opts){
		opts		= opts		|| {};
		this._barId	= opts.id	|| "";

		console.log("built runningChrome", this._isRunningChrome())
		this._display();
		
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
		this._container.id	= "prout"; 
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
	notifyAppBar.prototype._isRunningChrome	= function(){
		return navigator.userAgent.match(/chrome/i) ? true : false;
	}

	notifyAppBar.prototype._cookieWrite	= function(value){
		document.cookie = 'notifyAppBar'+this._barId+'='+value+'; path=/; expires='+new Date(Date.now()+365*3600*24).toGMTString();

	}
	notifyAppBar.prototype._cookieRead	= function(){
		document.cookie = 'notifyAppBar'+this._barId+'=testcookie; path=/; expires=Thu, 2 Aug 2001 20:47:11 UTC;'
	}
	notifyAppBar.prototype._cookieDelete	= function(){
		this._markWrite('');
	}

	/**
	 * Export the notifyAppBar
	*/
	exports.notifyAppBar	= notifyAppBar;
})(this)