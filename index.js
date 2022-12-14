const express = require("express");
const app = express();
const pokeData = require("./data.js");

//get 요청 응답 접속을 받으면 평션안에있는것을 실행하는것
app.get("/", (요청, 응답) => {
  응답.send(`홈페이지 `);
  //send텍스트로보임
});

// API 요청
app.get("/api/:id", (req, res) => {
  //   res.json(pokeData);
  //json데이터로 보임
  console.log(req.params.id);
  if (req.params.id == "all") {
    res.json(pokeData);
  } else {
    //요청한 변수 (prams.id)의 포케몬 데이터보내기
    res.json(pokeData[req.params.id]);
  }
});

//서버 오픈
app.listen(3000, function () {
  console.log("서버가 열림");
});
