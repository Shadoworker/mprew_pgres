/**
 * paytech controller
 */

 const { createCoreController } = require('@strapi/strapi').factories;

//  import { factories } from '@strapi/strapi'
const axios  = require("axios");
const viewModule = require('../content-types/view');
 
  
module.exports = createCoreController('api::paytech.paytech', ({ strapi }) =>  ({
   
     async generate(ctx) { // paytech MAIN generate : called by GET /generate
 
  
        // Params
        var params = ctx.request.body;
        // console.log(params);

        var _ref = "mprew_"+ new Date().getTime().toString()+ (Math.floor(Math.random() * (1000 - 0 + 1) + 0));

        let paymentRequestUrl = "https://paytech.sn/api/payment/request-payment";
        let body = {
          item_name:params.name,
          item_price:params.price,
          currency:"XOF",
          ref_command: _ref,
          command_name:"Paiement "+params.name+" via PayTech",
          env:"test",
          ipn_url:"https://domaine.com/ipn",
          success_url: params.success_url,
          cancel_url: params.cancel_url,
          custom_field:JSON.stringify({
            custom_fiel1:"value_1",
            custom_fiel2:"value_2",
          })
        };
    
        console.log(body);


        let config = {
            headers:{
                Accept: "application/json",
                'Content-Type': "application/json",
                API_KEY:"adb487c8a4309866be63228c200013c77e42e6d56601d324b56d9284fb8b60d2",
                API_SECRET:"0d711b31b2adaf710f58f5cc90e37c9fdc3f1abdee90927048573f1e0e92e9e7",
            }
        };
         // Get Token
         try {
 
           const { data } = await axios.post(paymentRequestUrl, body, config)

          //  console.log("DATA")

          //  console.log(data)

           ctx.body = data;
            
 
         } catch (err) {
           ctx.body = err;
           console.log(err)

         }
  
 
 
       },


       async complete(ctx) { // paytech MAIN complete : called by GET /complete
  
        var url_string = 'http://51.38.165.24/'+ ctx.originalUrl;
 
        var paramsEncoded = url_string.split('?')[1];
        var paramsDecoded = Buffer.from(paramsEncoded, 'base64').toString('ascii');
        var sections = paramsDecoded.split('&');

        var isPayed = (sections[0].split('=')[1] === 'true');
        var orderId =  sections[1].split('=')[1];

        const entry = await strapi.entityService.update('api::order.order', orderId , {
          data: {
            payed: isPayed,
          },
        });

        if(entry || isPayed)
        {
          var mess = " a été bien effectué."
          ctx.body = viewModule.view(mess, orderId);
        }
        else
        {
          var mess = " n'a pas été complété."
          ctx.body = viewModule.view(mess, orderId);
        }


       },





  
   }));
    