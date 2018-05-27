/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  '/*': {
    controller: 'App',
    action: 'serve',
    skipAssets: true,
    skipRegex: /^\/api\/.*$/
  },

  'post /api/help': 'help/Help.postHelp',

  'post /api/register': 'Register.post',

  'PUT /api/login': { action: 'entrance/login' },
  'PUT /api/signup': { action: 'entrance/signup' },

  'get /api/user': 'user/UserController.get',

  'get /api/products/get': 'products/ProductsController.getProducts',

  /***************************************************************************/
  /**                                ADDED                                  **/
  /***************************************************************************/

  'get /api/events/get': 'events/EventsController.getEvents',

  'delete /api/events/delete': 'events/EventsController.deleteEvent',

  'post /api/events/add': 'events/EventsController.addEvent',

  /***************************************************************************/
  /**                                ADDED                                  **/
  /***************************************************************************/

  'post /api/user/products/product/post':
    'user/products/product/ProductController.postProduct',

  'get /api/user/products/product/get':
    'user/products/product/ProductController.getProduct',

  'patch /api/user/products/product/patch':
    'user/products/product/ProductController.patchProduct',

  'delete /api/user/products/product/delete':
    'user/products/product/ProductController.deleteProduct',

  'get /api/user/products/getProductsByUser':
    'user/products/ProductsController.getProductsByUser',

  'get /api/user/products/get': 'user/products/ProductsController.getProducts',

  'post /api/user/shop/basket/post': 'user/shop/BasketController.postBasket'

  /***************************************************************************
   *                                                                          *
   * Custom routes here...                                                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the custom routes above, it   *
   * is matched against Sails route blueprints. See `config/blueprints.js`    *
   * for configuration options and examples.                                  *
   *                                                                          *
   ***************************************************************************/
};