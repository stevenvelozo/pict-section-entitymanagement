const libPictView = require('pict-view');

class DynamicEntityCustom extends libPictView
{
	constructor(pFable, pOptions, pServiceHash)
	{
		super(pFable, pOptions, pServiceHash);
	}
}

module.exports = DynamicEntityCustom;


/**************************************
 *      Default View Configuration     *
 **************************************/
module.exports.default_configuration =
{
	ViewIdentifier: 'DynamicEntityCustom',

	DefaultRenderable: 'Pict-DynamicEntityCustom',
	DefaultDestinationAddress: '#Pict_DynamicEntityCustom_Container',
	DefaultTemplateRecordAddress: false,

	AutoInitialize: true,
	AutoRender: false,
	AutoSolveWithApp: false,

	Templates:
	[
		{
			Hash: 'Pict-DynamicEntityCustom-Template',
			Template: /*html*/`
<!--  pict view template: [Pict-DynamicEntityCustom-Template] -->
<!--  end view template:  [Pict-DynamicEntityCustom-Template] -->
`
		}
	],

	Renderables:
	[
		{
			RenderableHash: 'Pict-DynamicEntityCustom',
			TemplateHash: 'Pict-DynamicEntityCustom-Template',
			DestinationAddress: '#Pict_DynamicEntityCustom_Container',
			RenderMethod: 'replace'
		}
	],

	Manifests: {}
};
