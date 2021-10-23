module.exports = function( config , dependencies )
{
	let module = { };
		
	module.call = function( uri , method , payload )
	{
		payload = ( payload ) ? payload : '';
		let obj = 
		{
			uri: config.server + uri ,
			method: method ,
			json: true ,
			body: payload ,
			headers: { 'Authorization': 'Bearer ' + config.authToken }
		};
		return new Promise( function( resolve , reject ) 
		{
			dependencies.requestsHandler( obj , function ( error , res , body ) 
			{
				if ( !error && res.statusCode == 200 ) 
				{
					resolve( body );
				} 
				else 
				{
					resolve( error );
					//reject( error );
				}
			} );
		} );
	};

	return module;
};