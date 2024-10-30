const libPictDynamicLayout = require('pict-section-form').PictDynamicLayoutProvider;

class ListLayoutDynamic extends libPictDynamicLayout
{
	constructor(pFable, pOptions, pServiceHash)
	{
		super(pFable, pOptions, pServiceHash);
	}

	/**
	 * Generate a single record layout template for a Configuration-based record.
	 * 
	 * @param {object} pView - The view to generate the dynamic group layout for
	 * @param {object} pGroup - The group to generate and inject dynamic layout templates
	 * @returns {string} - The template for the group
	 */
	generateGroupLayoutTemplate(pView, pGroup)
	{
		let tmpMetatemplateGenerator = this.pict.providers.MetatemplateGenerator;
		let tmpTemplate = '';

		tmpTemplate += tmpMetatemplateGenerator.getMetatemplateTemplateReference(pView, "-Template-DynamicList-Prefix", `getGroup(${pGroup.GroupIndex})`);

		tmpTemplate += tmpMetatemplateGenerator.getMetatemplateTemplateReference(pView, "-Template-DynamicList-Top-Prefix", `getGroup(${pGroup.GroupIndex})`);
		tmpTemplate += tmpMetatemplateGenerator.getMetatemplateTemplateReference(pView, "-Template-DynamicList-Title-Container", `getGroup(${pGroup.GroupIndex})`);
		tmpTemplate += tmpMetatemplateGenerator.getMetatemplateTemplateReference(pView, "-Template-DynamicList-Title", `getGroup(${pGroup.GroupIndex})`);
		tmpTemplate += tmpMetatemplateGenerator.getMetatemplateTemplateReference(pView, "-Template-DynamicList-Title-Metadata", `getGroup(${pGroup.GroupIndex})`);
		tmpTemplate += tmpMetatemplateGenerator.getMetatemplateTemplateReference(pView, "-Template-DynamicList-Top-Postfix", `getGroup(${pGroup.GroupIndex})`);

		tmpTemplate += tmpMetatemplateGenerator.getMetatemplateTemplateReference(pView, "-Template-DynamicList-Top-Controls-Prefix", `getGroup(${pGroup.GroupIndex})`);
		tmpTemplate += tmpMetatemplateGenerator.getMetatemplateTemplateReference(pView, "-Template-DynamicList-Controls-Container-Prefix", `getGroup(${pGroup.GroupIndex})`);
		tmpTemplate += tmpMetatemplateGenerator.getMetatemplateTemplateReference(pView, "-Template-DynamicList-Controls-Container", `getGroup(${pGroup.GroupIndex})`);
		tmpTemplate += tmpMetatemplateGenerator.getMetatemplateTemplateReference(pView, "-Template-DynamicList-Controls-Container-Postfix", `getGroup(${pGroup.GroupIndex})`);
		tmpTemplate += tmpMetatemplateGenerator.getMetatemplateTemplateReference(pView, "-Template-DynamicList-PaginationControls-Container-Prefix", `getGroup(${pGroup.GroupIndex})`);
		tmpTemplate += tmpMetatemplateGenerator.getMetatemplateTemplateReference(pView, "-Template-DynamicList-PaginationControls-Container", `getGroup(${pGroup.GroupIndex})`);
		tmpTemplate += tmpMetatemplateGenerator.getMetatemplateTemplateReference(pView, "-Template-DynamicList-PaginationControls-PageMarker", `getGroup(${pGroup.GroupIndex})`);
		tmpTemplate += tmpMetatemplateGenerator.getMetatemplateTemplateReference(pView, "-Template-DynamicList-PaginationControls-Container-Postfix", `getGroup(${pGroup.GroupIndex})`);
		tmpTemplate += tmpMetatemplateGenerator.getMetatemplateTemplateReference(pView, "-Template-DynamicList-Top-Controls-Postfix", `getGroup(${pGroup.GroupIndex})`);


		tmpTemplate += tmpMetatemplateGenerator.getMetatemplateTemplateReference(pView, "-Template-DynamicList-Subrecord-View-Left-Container", `getGroup(${pGroup.GroupIndex})`);

		tmpTemplate += tmpMetatemplateGenerator.getMetatemplateTemplateReference(pView, "-Template-DynamicList-Middle-Prefix", `getGroup(${pGroup.GroupIndex})`);
		tmpTemplate += tmpMetatemplateGenerator.getMetatemplateTemplateReference(pView, "-Template-DynamicList-Header-Prefix", `getGroup(${pGroup.GroupIndex})`);
		tmpTemplate += tmpMetatemplateGenerator.getMetatemplateTemplateReference(pView, "-Template-DynamicList-Header-Postfix", `getGroup(${pGroup.GroupIndex})`);
		tmpTemplate += tmpMetatemplateGenerator.getMetatemplateTemplateReference(pView, "-Template-DynamicList-Body-Prefix", `getGroup(${pGroup.GroupIndex})`);
		tmpTemplate += tmpMetatemplateGenerator.getMetatemplateTemplateReference(pView, "-Template-DynamicList-Body-Postfix", `getGroup(${pGroup.GroupIndex})`);
		tmpTemplate += tmpMetatemplateGenerator.getMetatemplateTemplateReference(pView, "-Template-DynamicList-Middle-Postfix", `getGroup(${pGroup.GroupIndex})`);

		tmpTemplate += tmpMetatemplateGenerator.getMetatemplateTemplateReference(pView, "-Template-DynamicList-Subrecord-View-Right-Container", `getGroup(${pGroup.GroupIndex})`);

		tmpTemplate += tmpMetatemplateGenerator.getMetatemplateTemplateReference(pView, "-Template-DynamicList-Postfix", `getGroup(${pGroup.GroupIndex})`);

		return tmpTemplate;
	}
}

module.exports = ListLayoutDynamic;