const libPictSectionForm = require('../../source/Pict-Section-EntityManagement.js');
//const libPictSectionForm = require('pict-section-entitymanagement');

module.exports = libPictSectionForm.PictFormApplication;

module.exports.default_configuration.pict_configuration = (
		{
			"Product": "Simple",
			"DefaultFormManifest": require("../schema/Bookstore-Model-Extended.json")
		});