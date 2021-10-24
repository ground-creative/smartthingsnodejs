const SmartThings = require( '../lib/SmartThings.js' );

let Cloud = new SmartThings
( {
	"authToken"	: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" ,
	"server"		: "https://api.smartthings.com/v1/"
} );

( async function( )
{
	// set some variables for the example
	let result = '';
	let device_id = 'XXXXXXXXXXXXXXXXXXX';
	
	// get list of devices
	result = await Cloud.devices( ).get_list( );
	
	// get device details
	result = await Cloud.devices( ).get_details( device_id );
	
	// get installed apps list
	result = await Cloud.apps( ).get_installed_list( );

	// post device commands ( turn off the tv )
	let commands = [ { "command": "off" , "capability": "switch" ,"component": "main" , "arguments": [ ] } ];
	result = await Cloud.devices( ).post_commands( device_id , commands );

} )( );
