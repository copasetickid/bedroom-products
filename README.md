# Code Challenge: Magical Bedroom Products

You're charged with building a purchase page and mini-cart for a store that sells magical bed room products.

You'll build a product listing page and a minicart. UX sketches for the pages can be found in `designs` folder.

You'll be using [json-server](https://github.com/typicode/json-server) to mimic the backend API response. The database file is in `data`. You'll need to install the module globally with `npm install json-server -g`.

To start the sever run `json-server --watch data/db.json`.

  * http://localhost:3000/products: Products for the listing page
  * http://localhost:3000/cart_order: Use this endpoint as the "storage" for minicart.

The minicart should persist between opening and closing the browser. All updates should be made via Ajax.

We leave naming, organization, and all that jazz up to you. Our goal is to see how you would approach a feature from start to finish.

Please do not use any frameworks such as Ember, Backbone, Bootstrap or Foundation. You are free to use front-end tooling libraries such as Autoprefixer, Underscore, or Gulp. You can use jQuery, Zepto, or vanilla JS.

We recommend using an HTML templating language, such as Jade or Nunjucks, to keep your code DRY. For example, a product listing can be one template that you iterate through. A product item in the minicart could be another.

Please your a pre or post processor for your CSS.

Lastly, this product page must work in latest two versions of Firefox, Chrome, Safari, IE and support IE9.


If you have any questions along the way, reach out to claudina@casper.com.


## Feature Stories

As a Customer
I want to see a list of all the magical products
So that I can learn about them and add them to my cart to purchase

When I buy a product
Then it will be added to the minicart
And the minicart should show the product name and price (without a page refresh)
And the minicart should allow me to remove the product
And the minicart total should reflect price of the product in the cart
And the minicart count should update to reflect total number of products


When I buy a second product
Then it will be added to the minicart
And the minicart should show two products (without a page refresh)
And the minicart count should update to reflect total number of products
And the minicart total should reflect the cost of both products
And the minicart should allow me to remove each product individually

When I remove an item from the minicart
Then the total will update to reflect
And the cart count will update
And all changes should happen without page refresh



## Recommendations

* Assume you are working on this puzzle as part of the team not just an individual code puzzle
* Take care to organize your directory structure logically
* Add documentation where you think is best to help your team members understand your feature
* Create a repo with the zip file code. Treat your work like feature development, make meaningful commits.

