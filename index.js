const axios = require("axios");

exports.handler = async (event) => {

    try{
        const btcresult = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");
        btcresult.data.bpi.USD.rate

        const result = await axios.post("https://discord.com/api/webhooks/929083189895516191/bU-waoMb_9lbRG10nI3QmA5IGnD-ACc-AdtcXwn7ozEBMLRI2_KeZxOSQXoGlRWSQgwN", {
            "content": "----------------------------------------" + btcresult.data.bpi.USD.rate
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
