module.exports = (
{
	"TemplatePrefix": "Pict-MT-Base",
	"Templates":
	[
		/*
		 *
		 * [ Dynamic Record List MetaTemplates ]
		 *
		 */
		// the "Header" for a dynamic view
		{
			"HashPostfix": "-Template-DynamicList-Container",
			"Template": /*HTML*/`
<!-- Pict Dynamic List View container
          /')
  ////  /' )'
 @   \/'  )'
< (  (_...)'
  \      )
   \,,,,/
     _|_
Bawk bawk bawk... -->
<div id="Pict-{~D:Context[0].UUID~}-DynamicList-Container" class="Pict-Dynamic-List"></div>`
		},


		/*
		 *
		 * BEGIN Top of List Templates
		 *
		 */
		{
			"HashPostfix": "-Template-DynamicList-Top-Prefix",
			"Template": /*HTML*/`
<div class="Top-Container">`
		},
		{
			"HashPostfix": "-Template-DynamicList-Top-Postfix",
			"Template": /*HTML*/`
</div>`
		},

		{
			"HashPostfix": "-Template-DynamicList-Title-Container",
			"Template": /*HTML*/`
<div class="Title-Container"></div>`
		},


		{
			"HashPostfix": "-Template-DynamicList-Title",
			"Template": /*HTML*/`
<h1><span id="Pict-{~D:Context[0].UUID~}-Title-Icon" class="Title-Icon"></span> <span id="Pict-{~D:Context[0].UUID~}-Title-Text" class="Title-Text"></span></h1>`
		},
		{
			"HashPostfix": "-Template-DynamicList-Title-Metadata",
			"Template": /*HTML*/`
<span id="Pict-{~D:Context[0].UUID~}-Title-Metadata" class="Title-Metadata"></span>`
		},
		/*
		 * END Top of List Templates
		 */


		/*
		 *
		 * BEGIN Top of List Controls Templates
		 *
		 */
		{
			"HashPostfix": "-Template-DynamicList-Top-Controls-Prefix",
			"Template": /*HTML*/`
<div class="Top-Controls-Container">`
		},
		{
			"HashPostfix": "-Template-DynamicList-Top-Controls-Postfix",
			"Template": /*HTML*/`
</div>`
		},

		{
			"HashPostfix": "-Template-DynamicList-Controls-Container-Prefix",
			"Template": /*HTML*/`
<div class="Title-Controls-Container">`
		},
		{
			"HashPostfix": "-Template-DynamicList-Controls-Container",
			"Template": /*HTML*/`
<div class="Title-Crud-Controls">[ <a href="#">New {~D:Context[0].EntityFriendlyName~}</a> ] [ <a href="#">Settings</a> ]</div>`
		},
		{
			"HashPostfix": "-Template-DynamicList-Controls-Container-Postfix",
			"Template": /*HTML*/`
</div>`
		},

		{
			"HashPostfix": "-Template-DynamicList-PaginationControls-Container-Prefix",
			"Template": /*HTML*/`
<div class="Title-PaginationControls-Container">`
		},
		{
			"HashPostfix": "-Template-DynamicList-PaginationControls-Container",
			"Template": /*HTML*/`
<div class="Title-Pagination-Controls">[ <a href="#">1</a> ] [ <a href="#">2</a> ]</div>`
		},
		{
			// To be used by the Pagination Controls provider
			"HashPostfix": "-Template-DynamicList-PaginationControls-PageMarker",
			"Template": /*HTML*/`[ <a href="#">1</a> ]`
		},
		{
			"HashPostfix": "-Template-DynamicList-PaginationControls-Container-Postfix",
			"Template": /*HTML*/`
</div>`
		},
		/*
		 * END Top of List Templates
		 */

		/*
		 *
		 * BEGIN List Templates
		 *
		 */
		{
			"HashPostfix": "-Template-DynamicList-Middle-Prefix",
			"Template": /*HTML*/`
<div class="Middle-Container">`
		},
		{
			"HashPostfix": "-Template-DynamicList-Middle-Postfix",
			"Template": /*HTML*/`
</div>`
		},

		{
			"HashPostfix": "-Template-DynamicList-Subrecord-View-Left-Container",
			"Template": /*HTML*/`
<div id="Pict-{~D:Context[0].UUID~}-Subrecord-View-Left"></div>`
		},

		{
			"HashPostfix": "-Template-DynamicList-Prefix",
			"Template": /*HTML*/`
<div class="List-Container">
<table>`
		},
		{
			"HashPostfix": "-Template-DynamicList-Header-Prefix",
			"Template": /*HTML*/`
<thead id="Pict-{~D:Context[0].UUID~}-List-Header">`
		},
		{
			"HashPostfix": "-Template-DynamicList-Header-Postfix",
			"Template": /*HTML*/`
</thead>`
		},
		{
			"HashPostfix": "-Template-DynamicList-Body-Prefix",
			"Template": /*HTML*/`
<tbody id="Pict-{~D:Context[0].UUID~}-List-Body">`
		},
		{
			"HashPostfix": "-Template-DynamicList-Body-Postfix",
			"Template": /*HTML*/`
</tbody>`
		},
		{
			"HashPostfix": "-Template-DynamicList-Postfix",
			"Template": /*HTML*/`
</table>
</div>`
		},


		{
			"HashPostfix": "-Template-DynamicList-Subrecord-View-Right-Container",
			"Template": /*HTML*/`
<div id="Pict-{~D:Context[0].UUID~}-Subrecord-View-Right"></div>`
		},
		/*
		 * END List Templates
		 */

	]
});