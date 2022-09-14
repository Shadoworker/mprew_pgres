'use strict';

/**
 *  order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order');

// module.exports = createCoreController("api::order.order", ({ strapi }) => ({
//     create(ctx) {
//       ctx.request.body = {
//         data: {
//           ...ctx.request.body.data,
//           user: ctx.state.user.id,
//         },
//       };
  
//       return super.create(ctx);
//     },
//   }));