# SmartThings Cloud Api Nodejs Client

This is a simple nodejs client to interact with devices that support the tuya api over the cloud.

## Requirements

I believe all is needed is php curl for the requests.

## Installation

```
npm install smartthingsnodejs
```

## Basic Usage

### Create new instance

```
const TuyaCloud = require( 'tuyacloudnodejs' );

let Cloud = new SmartThings
( {
	"authToken"	: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" ,
	"server"		: "https://api.smartthings.com/v1/"
} );
```

### Example operations

```
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
```
## Show all methods

```
// call one of the main components (devices)
// example call to show all methods for devices component
endpoints = Cloud.devices( ).endpoints( );
	
```

