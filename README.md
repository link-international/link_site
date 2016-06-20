The link-site project has been moved and can be found [here](https://github.com/link-international/link_site).


# Link International
Link International is Australia's leading motorcycle parts importer and distributor; this is the repository for linkint.com.au.

## Table of contents
1. [About](#about)
2. [Maintenance](#maintenance)
	1. [Updating pages and area formats](#updating-pages-and-area-formats)
	2. [Using SCSS to edit the styling](#using-SCSS-to-edit-the-styling)
3. [Key global areas](#key-global-areas)
	1. [Navigation](#navigation)
		1. [Top Bar](#top-bar)
		2. [Products drop down](#products-drop-down)
		3. [Mobile Nav](#mobile-nav)
		4. [Side bar](#side-bar)
4. [Media](#media)
	1. [Thumbnails](#thumbnails)
5. [Category Trees](#category-trees)
	1. [Adding a category](#adding-a-category)
	2. [Importing categories](#importing-categories)
	3. [Adding products to a category](#adding-products-to-a-category)
	4. [Importing Products to a category](#importing-products-to-a-category)




## About
The Link site is created using:
* [TOTECS CMS](http://www.totecs.com/index_page.html)
* [Foundation 5](http://foundation.zurb.com/sites/docs/v/5.5.3/) with [SCSS](http://sass-lang.com/)
* [Font Awesome](http://fontawesome.io/icons/)
* [Slick Image Slider](http://kenwheeler.github.io/slick/)
* [DataTables](https://datatables.net/)
* [Stacktable](http://johnpolacek.github.io/stacktable.js/)


## Maintenance

### Updating pages and area formats
The **.html** files under **/pages/** are snippets. These files do not get displayed directly in the browser. The snippets are pasted into the TOTECS CMS page areas or format libraries.

### Using SCSS to edit the styling
This project uses **.scss** files which can be compiled into the **.css** file using [Grunt](http://gruntjs.com/getting-started). A Grunt extension should be available for most major text editors and makes compiling the CSS a one button task.

- **_Never_** edit the **app.css** file
- Make all styling changes in the **app.scss** file
- Foundation core styling changes can be made in the **_settings.scss** file

## Key global areas

### Navigation

#### Top bar

Official top bar documentation can be found on the [here](http://foundation.zurb.com/sites/docs/v/5.5.3/components/topbar.html) on the Foundation docs.

Coming soon

#### Products Drop Down

__Files:__ *Global Products Drop Down.html*, *Global Nav.html*

The Products Drop Down navigation is *only used on medium and up screens*, it is not used for mobile devices. When editing the Products Drop Down area, the Global Nav area *must* also be edited for the mobile styles.


__Open:__ *Global Products Drop Down.html*

Example HTML for each brand option:

```html
<li><a href="BRAND-PAGE-URL"><img alt="" src="BRAND-LOGO-IMAGE"></a></li>
```

- To remove a brand, delete the corresponding list item.
- To add a brand, add a list item using the HTML above, where ```BRAND-PAGE-URL``` is replaced with the URL of the brand page, and ```BRAND-LOGO-IMAGE``` is replaced with the URL of the logo.
- The logo image must be a *PNG* file with the dimensions *250* x *130*.

The changes made in the Global Product Drop Down area must also be made in the Global Nav area. Use the same methods listed in the [Top Bar](#top-bar) section to edit the *mobile* navigation.

#### Mobile nav

__Open:__ *Global Nav.html*

Example HTML for Top Bar navigation:

```html
<li><a href="BRAND-PAGE-URL">BRAND-NAME</a></li>
```

- To remove a brand, delete the corresponding list item.
- To add a brand, add a list item using the HTML above, where ```BRAND-PAGE-URL``` is replaced with the URL of the brand page, and ```BRAND-NAME``` is replaced with the name of the brand.


#### Side bar

__File:__ *Global Sidebar.html*

Example HTML for the side bar navigation, this example is using the **JT Sprockets** page:

```html
<li class="heading jt-nav">JT Sprockets</li>
<li class="jt-nav"><a href="http://www.linkint.com.au/jt-sprockets.html">About</a></li>
``` 

To add content to the side bar, add a list item with the class ```BRAND-NAME-nav```, where ```BRAND-NAME``` is replaced with an abbreviated name of the brand that the side bar belongs to.

Add the class ```heading``` to the list item that contains the heading.

Make all changes to the side bar in the **_Global Product Side Nav.html_** file, then paste the entire HTML into the **_Global Product Side Nav_** global area.

To get a specific side nav to appear on a page, add this code to the pages local side bar area, replacing ```BRAND-NAME``` with the same name used in the relevant list items.

```html
<style type="text/css">
	.BRAND-NAME-nav {
		display: list-item!important;
	}
</style>
```

## Media

### Thumbnails
__Area:__ *Spare field*

Example HTML for media thumbnails

```html
<p><img src="IMAGE-URL"></p>
```

There must be *no* inline styling in the thumbnail. Check the source code of the field before submitting for any inline styling that was automatically added.

Example of HTML to delete

```html
style="width:____px;height:____px;"
```

- The thumbnail images **must** be 16:9 ratio.
- The best size for thumbnail images is **1008x567**.




## Category Trees

__Go to:__ *TOTECS Platform* > *Inventory* > *Category Trees*

__Open:__ *Category Trees* > *Products* folder > *Brands* folder

Inside the Brands folder will be folders for each individual brand.

### Adding a category

To add a category, right click the folder you wish to add the category to and click *Add*
- __Code:__ example-category
- __Name:__ Example Category
- __Description:__ example *(This will be changed later)*

Right click the folder that was just created, *Example Category*, and click *Edit*

The *Description 1* field contains the header for that category page, go into *source* mode and input the following HTML, replacing ```LOGO-URL``` with the relevant 800px wide logo from the *product-logos* library. The ```style``` is the same as in the [Side bar](#side-bar), replace ```BRAND-NAME``` with the name used in the relevant brands side bar.

```html
<div class="product-page-logo">
	<hr class="show-for-small-only">
	<img alt="" src="LOGO-URL" />
</div>
<style type="text/css">
	.BRAND-NAME-nav {
		display: list-item!important;
	}
</style>
```

The *Description 2* field can be used to add notes or information about the category.

In the *Images* tab, choose the image you wish to be displayed as the categories thumbnail image.

### Importing categories

__Go to:__ *TOTECS Platform* > *Data* > *Data Imports*

The most efficient way of adding multiple categories is to do a *Data Import*. Details of how to import categories can be found on the *Data Imports* page under the Import Type *Categories* Text File Format Details.

It is important to ensure that the description field, in the CSV file to be imported, contains the correct HTML from the [Adding a category](#adding-a-category) section.

### Adding products to a category

__Open:__ *Category Trees* > *Products* folder > *Brands* folder > *Navigate to the relevant category*

In the *Child Products* tab, products can be manually added to the category by entering the product code and clicking *Add*.

### Importing Products to a category

__Go to:__ *TOTECS Platform* > *Data* > *Data Imports*

The most efficient way of adding products to categories is to do a  *Data Import*. Details of how to import products can be found on the *Data Imports* page under the Import Type *Category Products* Text File Format Details.