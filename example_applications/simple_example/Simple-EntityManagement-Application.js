const libPictSectionEntityManagement = require('../../source/Pict-Section-EntityManagement.js');
//const libPictSectionForm = require('pict-section-entitymanagement');

class SimpleApplication extends libPictSectionEntityManagement.PictEntityManagementApplication
{
	constructor(pFable, pOptions, pServiceHash)
	{
		super(pFable, pOptions, pServiceHash);
	}
};

module.exports = SimpleApplication

module.exports.default_configuration.pict_configuration = (
		{
			"Product": "Simple",
			"DefaultMeadowSchema": require("../schema/Bookstore-Model-Extended.json"),
			"DefaultEntity": "Book"
		});