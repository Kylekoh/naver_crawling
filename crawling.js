const request = require('request');
const api_key = '0100000000509c9d1f7ee362d1adb639983214131b17cfc07768c57afee2951afcf4530215'
const client_secret = 'AQAAAACMi/RyVIV+oKKb3B555Pcc56lxF8yI0Y5NQ8WClK3j8A=='
const client = '1295182'
const time_stamp = new Date().getTime()
const api_url = 'https://api.naver.com/keywordstool';
let request_body = {
    "hintKeywords":"주식투자",
    "includeHintKeywords": 1,
    "showDetail": 1 
}
console.log(time_stamp);

request.post({
        url: api_url,
        body: JSON.stringify(request_body),
        headers: {
            'X-API-KEY': api_key,
            'X-Customer': client,
            'X-Signature': client_secret,
            'X-Timestamp': time_stamp
        }
    },
    function (error, response, body) {
        console.log(error);
        console.log(response);
        console.log(body);
    });