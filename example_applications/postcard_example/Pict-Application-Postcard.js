const libPictApplication = require('pict-application');

const libMainApplicationView = require('./views/PictView-Postcard-MainApplication.js');

const libPictSectionEntityManagement = require('../../source/Pict-Section-Entitymanagement.js');

class PostcardApplication extends libPictApplication
{
	constructor(pFable, pOptions, pServiceHash)
	{
		super(pFable, pOptions, pServiceHash);

		this.pict.addProvider('Postcard-Default-Theme-Provider', {}, require('./providers/PictProvider-BestPostcardTheme.js'));

		this.pict.addView('PostcardNavigation', require('./views/PictView-Postcard-Navigation.json'));
		this.pict.addView('PostcardAbout', require('./views/PictView-Postcard-Content-About.json'));
		this.pict.addView('PostcardLegal', require('./views/PictView-Postcard-Content-Legal.json'));

		this.pict.addView('PictSectionEntityManagement, libPictSectionEntityManagement.default_configuration, libPictSectionEntityManagement');

		this.pict.addView('PostcardMainApplication', libMainApplicationView.default_configuration, libMainApplicationView);
	}

	onAfterInitializeAsync(fCallback)
	{
		this.pict.views.PostcardNavigation.render()
		this.pict.views.PostcardMainApplication.render();
		return super.onAfterInitialize(fCallback);
	}
};

module.exports = PostcardApplication

module.exports.default_configuration = require('./Pict-Application-Postcard-Configuration.json');
module.exports.default_configuration.DefaultMeadowSchema = require(`../schema/Bookstore-Model-Extended.json`);