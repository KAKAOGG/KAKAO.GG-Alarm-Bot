const axios = require("axios");

require("dotenv").config();

exports.handler = async (event) => {
  // TODO implement
  try {
    const groupOne = {
      content:
        "```떠돌이 상인 04시 출현 가능성이 있습니다. 등장 시 5시간 30분 동안 물품을 판매합니다.```",
    };

    const groupTwo = {
      content:
        "```떠돌이 상인 10시 출현 가능성이 있습니다. 등장 시 5시간 30분 동안 물품을 판매합니다.```",
    };

    const groupThree = {
      content:
        "```떠돌이 상인 16시 출현 가능성이 있습니다. 등장 시 5시간 30분 동안 물품을 판매합니다.```",
    };

    const groupFour = {
      content:
        "```떠돌이 상인 22시 출현 가능성이 있습니다. 등장 시 5시간 30분 동안 물품을 판매합니다.```",
    };

    const discordUrl = "WEB_HOOK";

    if (event.bot === "groupOne") {
      const result = await axios.post(discordUrl, groupOne);
    }

    if (event.bot === "groupTwo") {
      const result = await axios.post(discordUrl, groupTwo);
    }

    if (event.bot === "groupThree") {
      const result = await axios.post(discordUrl, groupThree);
    }

    if (event.bot === "groupFour") {
      const result = await axios.post(discordUrl, groupFour);
    }

    console.log("정상 작동");
  } catch (err) {
    console.err("디스코드 봇 에러 발생");
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!"),
  };
  return response;
};
