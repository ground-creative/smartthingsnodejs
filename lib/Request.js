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
				if ( !error ) 
				{
					resolve( { "code": res.statusCode , "data": res.body , "error": false } );
				} 
				else 
				{
					resolve( { "code": res.statusCode , "data": res.body , "error": error } );
					//reject( error );
				}
			} );
		} );
	};

	return module;
};