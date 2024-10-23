const libPictSectionForm = require('pict-section-form');

// The container for all the Pict-Section-EntityManagement related code.
module.exports = require(`./views/Pict-View-Hypervisor.js`);

module.exports.default_configuration = require('./views/Pict-View-Hypervisor-DefaultConfiguration.json');

// The application container
module.exports.PictEntityManagementApplication = require('./application/Pict-Application-DynamicEntity.js');

// The three dynamic entity views, for low-level use
module.exports.DynamicEntityList = require(`./views/Pict-View-DynamicEntityList.js`);
module.exports.DynamicEntityRecord = require(`./views/Pict-View-DynamicEntityRecord.js`);
module.exports.DynamicEntityCustom = require(`./views/Pict-View-DynamicEntityCustom.js`);

// The below are passed through from the PictSectionForm library, so this can continue to operate as a dynamic form underneath the entity management system.
// The base form application
module.exports.PictFormApplication = libPictSectionForm.PictFormApplication;
// The base provider class for form section templates; meant to be subclassed
module.exports.PictFormTemplateProvider = libPictSectionForm.PictFormTemplateProvider;
// The base provider class for Input Extensions
module.exports.PictInputExtensionProvider = libPictSectionForm.PictInputExtensionProvider;
// The metacontroller view
module.exports.PictFormMetacontroller = libPictSectionForm.PictFormMetacontroller;
// The ManifestFactory, for when we want to convert tabular data to configuration
module.exports.ManifestFactory = libPictSectionForm.ManifestFactory;
