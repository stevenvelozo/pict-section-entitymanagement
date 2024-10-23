const libPictView = require('pict-view');

const libDynamicEntityList = require(`./Pict-View-DynamicEntityList.js`);
const libDynamicEntityRecord = require(`./Pict-View-DynamicEntityRecord.js`);
const libDynamicEntityCustom = require(`./Pict-View-DynamicEntityCustom.js`);

class Hypervisor extends libPictView
{
	constructor(pFable, pOptions, pServiceHash)
	{
		super(pFable, pOptions, pServiceHash);
	}
}

module.exports = Hypervisor;


/**************************************
 *      Default View Configuration     *
 **************************************/
module.exports.default_configuration =
{
	ViewIdentifier: 'Hypervisor',

	DefaultRenderable: 'Pict-Hypervisor',
	DefaultDestinationAddress: '#Pict_Hypervisor_Container',
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
			Hash: 'Pict-Hypervisor-Template',
			Template: /*html*/`
<!--  pict view template: [Pict-Hypervisor-Template] -->
<!--  end view template:  [Pict-Hypervisor-Template] -->
`
		}
	],

	Renderables:
	[
		{
			RenderableHash: 'Pict-Hypervisor',
			TemplateHash: 'Pict-Hypervisor-Template',
			DestinationAddress: '#Pict_Hypervisor_Container',
			RenderMethod: 'replace'
		}
	],

	Manifests: {}
};
