const axios = require("axios");

exports.handler = async (event) => {

    // 카제로스 서버 시작
    try{
        const btcresult = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");
        btcresult.data.bpi.USD.rate

        const result = await axios.post("https://discord.com/api/webhooks/929104254822658118/fZ2GVMQE6ZQDGdSpckhFMLQGyc3K4KUbcilGT9qSC1Uo0b3WuYXZ9vhoVGVLqA5-dPVO", {
            "content": "---------------카제로스 떠돌이 상인 마감--------------------"
        });
        console.info("디스코드 작동 중");
    }
    catch(err){
        console.log("디스코드 작동 중 에러", err);
    };

    // 루페온 서버 시작
    try{
        const btcresult = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");
        btcresult.data.bpi.USD.rate

        const result = await axios.post("https://discord.com/api/webhooks/929104684235509861/AB_1y9coA_BleT7W__sBJVYepVFrH67eqL3cBwan0LIdMNUa6GwKsId1qcfcMYC7dn2g", {
            "content": "---------------루페온 떠돌이 상인 마감--------------------"
        });
        console.info("디스코드 작동 중");
    }
    catch(err){
        console.log("디스코드 작동 중 에러", err);
    };

    // 카단 서버 시작
    try{
        const btcresult = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");
        btcresult.data.bpi.USD.rate

        const result = await axios.post("https://discord.com/api/webhooks/929104816003776602/eSWbxySmr0dDa3UR_u2VxOlhJSUw1w-d15qQT9FUq8l6o1KM1bOcXhUl6AH_QYxrcQW3", {
            "content": "---------------카단 떠돌이 상인 마감--------------------"
        });
        console.info("디스코드 작동 중");
    }
    catch(err){
        console.log("디스코드 작동 중 에러", err);
    };

    // 아브렐슈드 서버 시작
    try{
        const btcresult = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");
        btcresult.data.bpi.USD.rate

        const result = await axios.post("https://discord.com/api/webhooks/929104926557229087/b9pJUkRkhYu3IYrSixfvIXVwIybbJQobBln0yzVVgHdyDPYUXlw0kkNvUnWRC2TqtzyN", {
            "content": "---------------아브렐슈드 떠돌이 상인 마감--------------------"
        });
        console.info("디스코드 작동 중");
    }
    catch(err){
        console.log("디스코드 작동 중 에러", err);
    };

    // 아만 서버 시작
    try{
        const btcresult = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");
        btcresult.data.bpi.USD.rate

        const result = await axios.post("https://discord.com/api/webhooks/929105044157112330/yPpmAhh_k62o52zUQz2rSvVXORq9ZIatUYLoF6ko5so1guUGYlccCHZe-AMr5yWKTGHK", {
            "content": "---------------아만 떠돌이 상인 마감--------------------"
        });
        console.info("디스코드 작동 중");
    }
    catch(err){
        console.log("디스코드 작동 중 에러", err);
    };

    // 실리안 서버 시작
    try{
        const btcresult = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");
        btcresult.data.bpi.USD.rate

        const result = await axios.post("https://discord.com/api/webhooks/929105152286265344/HkHovmi5g4VZPknBuUq59OqYgFM-VhinRcYjaVOuYMyfYscht1ri5lnYdpqqpOqiJwoi", {
            "content": "---------------실리안 떠돌이 상인 마감--------------------"
        });
        console.info("디스코드 작동 중");
    }
    catch(err){
        console.log("디스코드 작동 중 에러", err);
    };

    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
