const libPictProvider = require('pict-provider');
const libPictRouter = require('pict-router');

class DynamicEntityRouter extends libPictProvider
{
	constructor(pFable, pOptions, pServiceHash)
	{
		super(pFable, pOptions, pServiceHash);

		if (!this.pict.providers.hasOwnProperty('PictRouter'))
		{
			this.pict.addProvider('PictRouter', {}, libPictRouter);
		}
	}

/*
		# Prototype routes from Meadow:

		// if (this._EnabledBehaviorSets.Schema)
		// {
		// 	this.connectRoute(pServiceServer, 'get', `/Schema`, this._Endpoints.Schema, `the internal behavior _Endpoints.Schema`);
		// }
		// if (this._EnabledBehaviorSets.New)
		// {
		// 	this.connectRoute(pServiceServer, 'get', `/Schema/New`, this._Endpoints.New, `the internal behavior _Endpoints.New`);
		// }
		// if (this._EnabledBehaviorSets.Validate)
		// {
		// 	this.connectRoute(pServiceServer, 'postWithBodyParser', `/Schema/Validate`, this._Endpoints.Validate, `the internal behavior _Endpoints.Validate`);
		// }

		// // Standard CRUD and Count endpoints
		// if (this._EnabledBehaviorSets.Create)
		// {
		// 	this.connectRoute(pServiceServer, 'postWithBodyParser', ``, this._Endpoints.Create, `the internal behavior _Endpoints.Create`);
		// 	this.connectRoute(pServiceServer, 'postWithBodyParser', `s`, this._Endpoints.Creates, `the internal behavior _Endpoints.Creates`);
		// }
		// if (this._EnabledBehaviorSets.Read)
		// {
		// 	this.connectRoute(pServiceServer, 'get', `/Max/:ColumnName`, this._Endpoints.ReadMax, `the internal behavior _Endpoints.ReadMax`);
		// }
		// if (this._EnabledBehaviorSets.Reads)
		// {
		// 	this.connectRoute(pServiceServer, 'get', `s/By/:ByField/:ByValue`, this._Endpoints.ReadsBy, `the internal behavior _Endpoints.ReadsBy`);
		// 	this.connectRoute(pServiceServer, 'get', `s/By/:ByField/:ByValue/:Begin/:Cap`, this._Endpoints.ReadsBy, `the internal behavior _Endpoints.ReadsBy`);
		// 	this.connectRoute(pServiceServer, 'get', `s/FilteredTo/:Filter`, this._Endpoints.Reads, `the internal behavior _Endpoints.Reads`);
		// 	this.connectRoute(pServiceServer, 'get', `s/FilteredTo/:Filter/:Begin/:Cap`, this._Endpoints.Reads, `the internal behavior _Endpoints.Reads`);
		// 	this.connectRoute(pServiceServer, 'get', `Select`, this._Endpoints.ReadSelectList, `the internal behavior _Endpoints.ReadSelectList`);
		// 	this.connectRoute(pServiceServer, 'get', `Select/FilteredTo/:Filter`, this._Endpoints.ReadSelectList, `the internal behavior _Endpoints.ReadSelectList`);
		// 	this.connectRoute(pServiceServer, 'get', `Select/FilteredTo/:Filter/:Begin/:Cap`, this._Endpoints.ReadSelectList, `the internal behavior _Endpoints.ReadSelectList`);
		// 	this.connectRoute(pServiceServer, 'get', `Select/:Begin/:Cap`, this._Endpoints.ReadSelectList, `the internal behavior _Endpoints.ReadSelectList`);
		// 	this.connectRoute(pServiceServer, 'get', `s/Lite`, this._Endpoints.ReadLiteList, `the internal behavior _Endpoints.ReadLiteList`);
		// 	this.connectRoute(pServiceServer, 'get', `s/Lite/FilteredTo/:Filter`, this._Endpoints.ReadLiteList, `the internal behavior _Endpoints.ReadLiteList`);
		// 	this.connectRoute(pServiceServer, 'get', `s/Lite/FilteredTo/:Filter/:Begin/:Cap`, this._Endpoints.ReadLiteList, `the internal behavior _Endpoints.ReadLiteList`);
		// 	this.connectRoute(pServiceServer, 'get', `s/Lite/:Begin/:Cap`, this._Endpoints.ReadLiteList, `the internal behavior _Endpoints.ReadLiteList`);
		// 	this.connectRoute(pServiceServer, 'get', `s/LiteExtended/:ExtraColumns`, this._Endpoints.ReadLiteList, `the internal behavior _Endpoints.ReadLiteList`);
		// 	this.connectRoute(pServiceServer, 'get', `s/LiteExtended/:ExtraColumns/FilteredTo/:Filter`, this._Endpoints.ReadLiteList, `the internal behavior _Endpoints.ReadLiteList`);
		// 	this.connectRoute(pServiceServer, 'get', `s/LiteExtended/:ExtraColumns/FilteredTo/:Filter/:Begin/:Cap`, this._Endpoints.ReadLiteList, `the internal behavior _Endpoints.ReadLiteList`);
		// 	this.connectRoute(pServiceServer, 'get', `s/LiteExtended/:ExtraColumns/:Begin/:Cap`, this._Endpoints.ReadLiteList, `the internal behavior _Endpoints.ReadLiteList`);
		// 	this.connectRoute(pServiceServer, 'get', `s/Distinct/:Columns`, this._Endpoints.ReadDistinctList, `the internal behavior _Endpoints.ReadDistinctList`);
		// 	this.connectRoute(pServiceServer, 'get', `s/Distinct/:Columns/FilteredTo/:Filter`, this._Endpoints.ReadDistinctList, `the internal behavior _Endpoints.ReadDistinctList`);
		// 	this.connectRoute(pServiceServer, 'get', `s/Distinct/:Columns/FilteredTo/:Filter/:Begin/:Cap`, this._Endpoints.ReadDistinctList, `the internal behavior _Endpoints.ReadDistinctList`);
		// 	this.connectRoute(pServiceServer, 'get', `s/Distinct/:Columns/:Begin/:Cap`, this._Endpoints.ReadDistinctList, `the internal behavior _Endpoints.ReadDistinctList`);
		// 	this.connectRoute(pServiceServer, 'get', `s/:Begin/:Cap`, this._Endpoints.Reads, `the internal behavior _Endpoints.Reads`);
		// }
		// if (this._EnabledBehaviorSets.Update)
		// {
		// 	this.connectRoute(pServiceServer, 'putWithBodyParser', ``, this._Endpoints.Update, `the internal behavior _Endpoints.Update`);
		// 	this.connectRoute(pServiceServer, 'putWithBodyParser', `s`, this._Endpoints.Updates, `the internal behavior _Endpoints.Updates`);
		// 	this.connectRoute(pServiceServer, 'putWithBodyParser', `/Upsert`, this._Endpoints.Upsert, `the internal behavior _Endpoints.Upsert`);
		// 	this.connectRoute(pServiceServer, 'putWithBodyParser', `/Upserts`, this._Endpoints.Upserts, `the internal behavior _Endpoints.Upserts`);
		// }
		// if (this._EnabledBehaviorSets.Delete)
		// {
		// 	this.connectRoute(pServiceServer, 'del', ``, this._Endpoints.Delete, `the internal behavior _Endpoints.Delete`);
		// 	this.connectRoute(pServiceServer, 'del', `/:IDRecord`, this._Endpoints.Delete, `the internal behavior _Endpoints.Delete`);
		// 	this.connectRoute(pServiceServer, 'get', `/Undelete/:IDRecord`, this._Endpoints.Undelete, `the internal behavior _Endpoints.Undelete`);
		// }
		// if (this._EnabledBehaviorSets.Count)
		// {
		// 	this.connectRoute(pServiceServer, 'get', `s/Count`, this._Endpoints.Count, `the internal behavior _Endpoints.Count`);
		// 	this.connectRoute(pServiceServer, 'get', `s/Count/By/:ByField/:ByValue`, this._Endpoints.CountBy, `the internal behavior _Endpoints.CountBy`);
		// 	this.connectRoute(pServiceServer, 'get', `s/Count/FilteredTo/:Filter`, this._Endpoints.Count, `the internal behavior _Endpoints.Count`);
		// }
*/
	addEntityRoutes(pEntityName, pHypervisor)
	{
		let tmpHypervisor = pHypervisor;

		if ((typeof(pHypervisor) === 'undefined') && (!this.pict.views.hasOwnProperty('Hypervisor')))
		{
			this.pict.log.error(`DynamicEntityRouter.addEntityRoutes(${pEntityName}): No Hypervisor view found.`);
			return false;
		}
		else if (typeof(pHypervisor) === 'undefined')
		{
			tmpHypervisor = this.pict.views['Hypervisor'];
		}

		// Now map the basic GET and LIST routes

		// 	this.connectRoute(pServiceServer, 'get', `s`, this._Endpoints.Reads, `the internal behavior _Endpoints.Reads`);
		this.pict.providers.PictRouter.addRoute(`/${pEntityName}s`,
			(pData) =>
			{
				tmpHypervisor.renderList.call(tmpHypervisor, pEntityName, pData);
			});
		// 	this.connectRoute(pServiceServer, 'get', `/:IDRecord`, this._Endpoints.Read, `the internal behavior _Endpoints.Read`);
	}
	onAfterInitialize()
	{
		// TODO: Pulled from the disaster ... as simple starting point documentation
        // this.pict.providers.PictRouter.addRoute('/Disaster/:DisasterType', (pData) => {
        //     this.pict.views.DisasterNatural.disaster(pData.data.DisasterType);
        // });

		this.pict.providers.PictRouter.router.resolve();

		return super.onAfterInitialize();
	}
		
}

module.exports = DynamicEntityRouter;


/**************************************
 *      Default Provider Configuration     *
 **************************************/
module.exports.default_configuration =
{
	ViewIdentifier: 'DynamicEntityRouter',

	DefaultRenderable: 'Pict-DynamicEntityRouter',
	DefaultDestinationAddress: '#Pict_DynamicEntityRouter_Container',
	DefaultTemplateRecordAddress: false,

	// If this is set to true, when the App initializes this will.
	// While the App initializes, initialize will be called.
	AutoInitialize: true,
	AutoInitializeOrdinal: 0,

	Manifests: {}
};
