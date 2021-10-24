module.exports = function( )
{
	let module = { };
	
	module.init = function( dependencies )
	{
		return dependencies.baseClass.magicMethods
		( 
			class Subscriptions
			{
				constructor( config ) 
				{
					this._config = config;
					this._endpoints =
					{
						"get_list"					:	"/installedapps/{installedAppId}/subscriptions" ,
						"get_details"				:	"/installedapps/{installedAppId}/subscriptions/{subscriptionId}" ,
						"delete_all"				:	"/installedapps/{installedAppId}/subscriptions" ,
						"delete_subscription"		:	"/installedapps/{installedAppId}/subscriptions/{subscriptionId}" ,
						"post_new"				:	"/installedapps/{installedAppId}/subscriptions"
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