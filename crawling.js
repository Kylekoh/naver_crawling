const request = require('request');
const express = require('express');
const app  = express();

const crypto = require('crypto');
const api_key = '0100000000509c9d1f7ee362d1adb639983214131b17cfc07768c57afee2951afcf4530215'
const client_key = 'AQAAAACMi/RyVIV+oKKb3B555Pcc56lxF8yI0Y5NQ8WClK3j8A=='
const client = '1295182'
const time_stamp = new Date().getTime()
const base_url = 'https://api.naver.com/keywordstool';

const request_body = {
    "includeHintKeywords" : 0,
    "showDetail" : 1,
    "hintKeywords" : "주식투자",
}

function GenerateHMAC(clientKey) {
    let method = "GET";
    // 암호화 객체 생성, sha256 알고리즘 선택
    const path = "/keywordstool"

    const hmac = crypto.createHmac('sha256', clientKey);

    const result = hmac.update(time_stamp + "." + method + "." + path).digest('base64');

    return result;
}

let signature = GenerateHMAC(client_key)

request.get({
        url: 'https://api.naver.com/keywordstool',
        body: JSON.stringify(request_body),
        headers: {
            'X-API-KEY': api_key,
            'X-Customer': client,
            'X-Timestamp': time_stamp,
            'X-Signature': signature,
            'Content-Type': 'application/json'
        },
        qs: {
            "includeHintKeywords" : 0,
            "showDetail" : 0,
            "hintKeywords" : "주식투자",      
        }
    },
    function (error, response, body) {
        if(error) {
            console.log(error);
        }
        console.log(response);
        console.log(body);
    });