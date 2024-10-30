const libPictProvider = require('pict-provider');

class DynamicEntityData extends libPictProvider
{
	constructor(pFable, pOptions, pServiceHash)
	{
		super(pFable, pOptions, pServiceHash);

		this.currentFilter = {};
	}

	getCurrentFilter()
	{
		return this.currentFilter;
	}

	getRecordCount(pFilter)
	{
		let tmpFilter = (typeof(pFilter) === 'undefined') ? this.currentFilter
				// TODO: Maybe allow passing in a meadow filter string as the filter in stead of the object.
				: pFilter;
			
		return 0;
	}

	getRecords(pFilter, pBegin, pCap)
	{
		return [];
	}

	getRecord(pFilter)
	{
		return {};
	}
}

module.exports = DynamicEntityData;


/**************************************
 *      Default Provider Configuration     *
 **************************************/
module.exports.default_configuration =
{
	ProviderIdentifier: 'DynamicEntityData',

	// If this is set to true, when the App initializes this will.
	// While the App initializes, initialize will be called.
	AutoInitialize: true,
	AutoInitializeOrdinal: 0,

	Manifests: {}
};
