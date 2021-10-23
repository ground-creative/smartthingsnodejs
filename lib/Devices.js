module.exports = function( )
{
	let module = { };
	
	module.init = function( dependencies )
	{
		return dependencies.baseClass.magicMethods
		( 
			class Devices
			{
				constructor( config ) 
				{
					this._config = config;
					this._endpoints =
					{
						"get_list"					:	"devices" ,
						"get_details"				:	"/devices/{device_id}" ,
						"get_status"				:	"/devices/{device_id}/status" ,
						"get_component"			:	"/devices/{device_id}/components/{component_id}/status" ,
						"get_capability"				:	"/devices/{device_id}/components/{component_id}/capabilities/{capability_id}/status" ,
						"delete_device"				:	"/devices/{device_id}" ,
						"put_device"				:	"/devices/{device_id}" ,
						"post_commands"			:	"/devices/{device_id}/commands" ,
						"post_events"				:	"/devices/{device_id}/events"
					}
				}
				
				endpoints( )
				{
					return this._endpoints;
				}

				__get( name ) 
				{
					let caller = new dependencies.Caller( this._config , this._endpoints , dependencies );
					return caller.send( name , arguments );
				} 
			} 
		);
	};
	return module;	
};			