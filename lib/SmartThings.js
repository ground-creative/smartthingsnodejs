module.exports = class SmartThings
{
	constructor( config ) 
	{
		this._config = this._checkConfig( config );
		this._dependencies =
		{
			"baseClass" 		: require( "./magic-methods" ) ,
			"Request"		: require( "./Request" ) ,
			"Caller"			: require( "./Caller" ) ,
			"Devices"			: require( "./Devices" ) ,
			"Apps"			: require( "./Apps" ) ,
			"Subscriptions"	: require( "./Subscriptions" ) ,
			"requestsHandler"	: require( "request" )
		};
	}

	_checkConfig( config )
	{
		return config;
	}
	
	devices( )
	{
		let init = this._dependencies.Devices( ).init( this._dependencies );
		return new init( this._config );
	}
	
	apps( )
	{
		let init = this._dependencies.Apps( ).init( this._dependencies );
		return new init( this._config );
	}
	
	subscriptions( )
	{
		let init = this._dependencies.Subscriptions( ).init( this._dependencies );
		return new init( this._config );
	}
};