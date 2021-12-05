const CryptoJS = require('crypto-js');
const { default: axios } = require('axios');
let base_url  = 'https://api.binance.com/api/v3/';
let keys = {
  'aKey':'',
  'sKey':''
};

async function connectivity() {
  return axios.get(base_url+'ping').then(res => (JSON.stringify(res.data) == '{}' ? true : false))
}
// connectivity().then(info => { console.log(info); })

async function availability() {
  return axios.get(base_url+'exchangeInfo').then(res => res.data.symbols)
}
// availability().then(info => { console.log(info); })

