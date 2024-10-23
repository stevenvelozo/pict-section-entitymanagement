const libPictView = require('pict-view');

class DynamicEntityRecord extends libPictView
{
	constructor(pFable, pOptions, pServiceHash)
	{
		super(pFable, pOptions, pServiceHash);
	}
}

module.exports = DynamicEntityRecord;


/**************************************
 *      Default View Configuration     *
 **************************************/
module.exports.default_configuration =
{
	ViewIdentifier: 'DynamicEntityRecord',

	DefaultRenderable: 'Pict-DynamicEntityRecord',
	DefaultDestinationAddress: '#Pict_DynamicEntityRecord_Container',
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
			Hash: 'Pict-DynamicEntityRecord-Template',
			Template: /*html*/`
<!--  pict view template: [Pict-DynamicEntityRecord-Template] -->
<!--  end view template:  [Pict-DynamicEntityRecord-Template] -->
`
		}
	],

	Renderables:
	[
		{
			RenderableHash: 'Pict-DynamicEntityRecord',
			TemplateHash: 'Pict-DynamicEntityRecord-Template',
			DestinationAddress: '#Pict_DynamicEntityRecord_Container',
			RenderMethod: 'replace'
		}
	],

	Manifests: {}
};
