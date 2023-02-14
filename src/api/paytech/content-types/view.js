module.exports = {
  view : function(_mess, _orderId){

    return `
            <html>
                <head>
                <meta http-equiv=Content-Type content="text/html; charset=utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                </head>
                <style>
                  .box
                  {
                    display:flex; 
                    width:100%;
                    align-items:center;
                    justify-content:center;
                    flex-direction : column;
                  }
                  .title
                  {
                    font-family : Arial;
                  }
                  .btn {
                    display: block;
                    height: 25px;
                    background: #4E9CAF;
                    padding: 10px;
                    text-align: center;
                    border-radius: 5px;
                    color: white;
                    font-weight: bold;
                    line-height: 25px;
                    text-decoration:none;
                    font-family:Arial;
                    font-size:14px;
                    padding:8px 20px;
                  }
                  @media screen and (max-width: 600px) {
                    #copy {
                      display: none;
                    }
                  }
                </style>
                <body >
                <div class="box">
                <h3 class="title" > PAIEMENT </h3>
                <span>  </span>
                <div style="width: 80%; max-height: 250px;font-weight:normal ; margin: 10px 0px; text-align:center"> 
                    Le paiement de votre commande <strong> ${_orderId} </strong> ${_mess} <br>
                    Fermez cette page et retournez à l'application.
                </div> 
                </div>
  

                </body>
            </html>
            `;
 
  }
}
