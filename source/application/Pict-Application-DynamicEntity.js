const libPictSectionForm = require('pict-section-form');

class PictDynamicEntityApplication extends libPictSectionForm.PictFormApplication
{
	constructor(pFable, pOptions, pServiceHash)
	{
		super(pFable, pOptions, pServiceHash);

		this.pict.log.trace(`PictDynamicEntityApplication.constructor()`);
	}
}

module.exports = PictDynamicEntityApplication;