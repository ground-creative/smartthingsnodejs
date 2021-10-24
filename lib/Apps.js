module.exports = function( )
{
	let module = { };
	
	module.init = function( dependencies )
	{
		return dependencies.baseClass.magicMethods
		( 
			class Apps
			{
				constructor( config ) 
				{
					this._config = config;
					this._endpoints =
					{
						"get_list"					:	"/apps" ,
						"get_installed_list"			:	"/installedapps" ,
						"get_details"				:	"/apps/{appNameOrId}" ,
						"get_installed_details"		:	"/installedapps/{installedAppId}" ,
						"get_settings"				:	"/apps/{appNameOrId}/settings" ,
						"get_oauth_settings"		:	"/apps/{appNameOrId}/oauth" ,
						"get_installed_list_config"	:	"/installedapps/{installedAppId}/configs" ,
						"get_installed_details_config"	:	"/installedapps/{installedAppId}/configs/{configurationId}" ,
						"delete_app"				:	"/apps/{appNameOrId}" ,
						"delete_installed_app"		:	"/installedapps/{installedAppId}" ,
						"put_update"				:	"/apps/{appNameOrId}" ,
						"put_oauth_settings"		:	"/apps/{appNameOrId}/oauth" ,
						"put_confirmation_request"	:	"/apps/{appNameOrId}/register" ,
						"put_signature_type"		:	"/apps/{appNameOrId}/signature-type" ,
						"post_new"				:	"/apps" ,
						"post_generate_oauth"		:	"/apps/{appNameOrId}/oauth/generate" ,
						"post_installed_events"		:	"/installedapps/{installedAppId}/events"
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