const axios = require("axios");

require("dotenv").config();

exports.handler = async (event) => {
  // TODO implement
  try {
    const groupOne = {
      content:
        "```아르테미스, 욘, 베른 북부, 베른 남부, 엘가시아 5개 지역입니다```",
    };

    const groupTwo = {
      content:
        "```페이튼, 루테란 동부, 유디아, 애니츠, 슈샤이어 5개 지역입니다```",
    };

    const groupThree = {
      content:
        "```루테란 서부, 루테란 동부, 토토이크, 아르데타인, 로헨델, 파푸니카 6개 지역입니다```",
    };

    const groupOneTwo = {
      content:
        "```아르테미스, 욘, 베른 북부, 베른 남부, 엘가시아, 페이튼, 루테란 동부, 유디아, 애니츠, 슈샤이어 9개 지역입니다```",
    };

    const groupOneThree = {
      content:
        "```아르테미스, 욘, 베른 북부, 베른 남부, 엘가시아, 루테란 서부, 루테란 동부, 토토이크, 아르데타인, 로헨델, 파푸니카 10개 지역입니다```",
    };

    const groupOneFour = {
      content:
        "```아르테미스, 욘, 베른 북부, 베른 남부, 로웬, 엘가시아 6개 지역입니다``` \n > NAGI4:'의도치 않은 구라핑'에 너무 예민하게 반응하지는 말아주세요. 저도 여러 번 식겁했습니다.",
    };

    const groupTwoThree = {
      content:
        "```페이튼, 루테란 동부, 유디아, 애니츠, 슈샤이어, 루테란 서부, 루테란 동부, 토토이크, 아르데타인, 로헨델, 파푸니카 11개 지역입니다```",
    };

    const groupTwoFour = {
      content:
        "```페이튼, 루테란 동부, 유디아, 애니츠, 슈샤이어, 로웬 6개 지역입니다``` \n > NAGI4:'의도치 않은 구라핑'에 너무 예민하게 반응하지는 말아주세요. 저도 여러 번 식겁했습니다.",
    };

    const groupThreeFour = {
      content:
        "```루테란 서부, 루테란 동부, 토토이크, 아르데타인, 로헨델, 파푸니카, 로웬 7개 지역입니다``` \n > NAGI4:'의도치 않은 구라핑'에 너무 예민하게 반응하지는 말아주세요. 저도 여러 번 식겁했습니다.",
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

    if (event.bot === "groupOneTwo") {
      const result = await axios.post(discordUrl, groupOneTwo);
    }

    if (event.bot === "groupOneThree") {
      const result = await axios.post(discordUrl, groupOneThree);
    }

    if (event.bot === "groupOneFour") {
      const result = await axios.post(discordUrl, groupOneFour);
    }

    if (event.bot === "groupTwoThree") {
      const result = await axios.post(discordUrl, groupTwoThree);
    }

    if (event.bot === "groupTwoFour") {
      const result = await axios.post(discordUrl, groupTwoFour);
    }

    if (event.bot === "groupThreeFour") {
      const result = await axios.post(discordUrl, groupThreeFour);
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
