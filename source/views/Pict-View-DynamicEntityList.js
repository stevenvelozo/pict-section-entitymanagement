const libPictView = require('pict-view');

class DynamicEntityList extends libPictView
{
	constructor(pFable, pOptions, pServiceHash)
	{
		super(pFable, pOptions, pServiceHash);
	}
}

module.exports = DynamicEntityList;


/**************************************
 *      Default View Configuration     *
 **************************************/
module.exports.default_configuration =
{
	ViewIdentifier: 'DynamicEntityList',

	DefaultRenderable: 'Pict-DynamicEntityList',
	DefaultDestinationAddress: '#Pict_DynamicEntityList_Container',
	DefaultTemplateRecordAddress: false,

	// If this is set to true, when the App initializes this will.
	// While the App initializes, initialize will be called.
	AutoInitialize: true,
	AutoInitializeOrdinal: 0,

	// If this is set to true, when the App autorenders (on load) this will.
	// After the App initializes, render will be called.
	AutoRender: true,
	AutoRenderOrdinal: 0,

	AutoSolveWithApp: true,
	AutoSolveOrdinal: 0,

	CSS: false,
	CSSPriority: 500,

	Templates:
	[
		{
			Hash: 'Pict-DynamicEntityList-Template',
			Template: /*html*/`
<!--  pict view template: [Pict-DynamicEntityList-Template] -->
<!--  end view template:  [Pict-DynamicEntityList-Template] -->
`
		}
	],

	Renderables:
	[
		{
			RenderableHash: 'Pict-DynamicEntityList',
			TemplateHash: 'Pict-DynamicEntityList-Template',
			DestinationAddress: '#Pict_DynamicEntityList_Container',
			RenderMethod: 'replace'
		}
	],

	Manifests: {}
};
