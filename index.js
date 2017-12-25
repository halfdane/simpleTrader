const express = require('express');
const path = require('path');
const api = require('binance');

const PORT = process.env.PORT || 5000;

const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;

const binanceRest = new api.BinanceRest({
    key: API_KEY,
    secret: API_SECRET,
//    timeout: 15000, // Optional, defaults to 15000, is the request time out in milliseconds
//    recvWindow: 10000, // Optional, defaults to 5000, increase if you're getting timestamp errors
    disableBeautification: false
    /*
     * Optional, default is false. Binance's API returns objects with lots of one letter keys.  By
     * default those keys will be replaced with more descriptive, longer ones.
     */
});

const binanceWS = new api.BinanceWS();
binanceWS.onAggTrade('BNBBTC', (data) => {
    //console.log(data);
});


express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
