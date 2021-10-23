const SmartThings = require( 'smartthings' );

let Cloud = new SmartThings
( {
	"authToken"	 : "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" ,
	"server"		: "https://api.smartthings.com/v1/"
} );

( async function( )
{
	// set some variables for the example
	let result = '';
	let device_id = 'XXXXXXXXXXXXXXXXXXX';
	
	// get device details
	result = await Cloud.devices( ).get_details( device_id );
	
	// post device commands ( turn off the tv )
	let commands = [ {	"command": "off", "capability": "switch","component": "main", "arguments": [] } ];
	result = await Cloud.devices( ).post_commands( device_id , commands );
	
	// get list of devices
	result = await Cloud.devices( token ).get_list( );

} )( );