'use strict';

/**
 * paytech router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::paytech.paytech');

module.exports = {
    routes: [
      {
        method: 'POST',
        path: '/paytech/generate',
        handler: 'paytech.generate',
      },      
      {
        method: 'GET',
        path: '/paytech/complete',
        handler: 'paytech.complete',
      }
    ]
}