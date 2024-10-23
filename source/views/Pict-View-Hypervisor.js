const libPictView = require('pict-view');

const libDynamicEntityList = require(`./Pict-View-DynamicEntityList.js`);
const libDynamicEntityRecord = require(`./Pict-View-DynamicEntityRecord.js`);
const libDynamicEntityCustom = require(`./Pict-View-DynamicEntityCustom.js`);

class Hypervisor extends libPictView
{
	constructor(pFable, pOptions, pServiceHash)
	{
		super(pFable, pOptions, pServiceHash);

		// Check to see if there is a passed-in schema
		if ('MeadowSchema' in this.options)
		{
			this.meadowSchema = this.options.MeadowSchema;
		}
		else if ('DefaultMeadowSchema' in this.pict.settings)
		{
			this.meadowSchema = this.pict.settings.DefaultMeadowSchema;
		}
		else
		{
			this.log.warn(`No Meadow Schema found for Hypervisor.  Using empty schema.`);
			this.meadowSchema = { Tables: {} };
		}

		// Check to see if there is a default entity
		if ('DefaultEntity' in this.options)
		{
			this.defaultEntity = this.options.DefaultEntity;
		}
		else if ('DefaultEntity' in this.pict.settings)
		{
			this.defaultEntity = this.pict.settings.DefaultEntity;
		}
		else
		{
			this.log.warn(`No Default Entity found for Hypervisor.  Checking to see if there are entities in the schema and choosing first if there are...`);

			let tmpSchemaEntities = Object.keys(this.meadowSchema.Tables);
			if (tmpSchemaEntities.length > 0)
			{
				this.defaultEntity = tmpSchemaEntities[0];
			}
			else
			{
				this.log.error(`No entities found in schema.  No further initialization possible.`);
				this.defaultEntity = false;
			}
		}

		// Initialize the router for the known entity/entities
		// TODO:  Add a mechanism for the plural above to be meaningful
		
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
