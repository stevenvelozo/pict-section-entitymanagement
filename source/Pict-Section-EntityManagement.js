const libPictView = require('pict-view');

class PictSectionEntitymanagementDefault extends libPictView
{
	constructor(pFable, pOptions, pServiceHash)
	{
		super(pFable, pOptions, pServiceHash);
	}
}

module.exports = PictSectionEntitymanagementDefault;


/**************************************
 *      Default View Configuration     *
 **************************************/
module.exports.default_configuration =
{
	ViewIdentifier: 'PictSectionEntitymanagementDefault',

	DefaultRenderable: 'PictSectionEntitymanagement-Default',
	DefaultDestinationAddress: '#PictSectionEntitymanagement_Default_Container',
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
			Hash: 'PictSectionEntitymanagement-Default-Template',
			Template: /*html*/`
<!-- PictSectionEntitymanagement pict view template: [PictSectionEntitymanagement-Default-Template] -->
<!-- PictSectionEntitymanagement end view template:  [PictSectionEntitymanagement-Default-Template] -->
`
		}
	],

	Renderables:
	[
		{
			RenderableHash: 'PictSectionEntitymanagement-Default',
			TemplateHash: 'PictSectionEntitymanagement-Default-Template',
			DestinationAddress: '#PictSectionEntitymanagement_Default_Container',
			RenderMethod: 'replace'
		}
	],

	Manifests: {}
};
