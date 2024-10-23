const libPictSectionForm = require('pict-section-form');

const libDynamicEntityRouterProvider = require(`../providers/Pict-Provider-DynamicEntityRouter.js`);

const libHypervisor = require(`../views/Pict-View-Hypervisor.js`);

class PictDynamicEntityApplication extends libPictSectionForm.PictFormApplication
{
	constructor(pFable, pOptions, pServiceHash)
	{
		super(pFable, pOptions, pServiceHash);

		this.pict.log.trace(`PictDynamicEntityApplication.constructor()`);

		// Initialize the dynamic entity router
		this.pict.addProvider('DynamicEntityRouter', {}, libDynamicEntityRouterProvider);

		// Initialize the hypervisor
		this.pict.addView('Hypervisor', {}, libHypervisor);
	}
}

module.exports = PictDynamicEntityApplication;