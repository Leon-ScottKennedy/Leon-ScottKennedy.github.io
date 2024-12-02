const 奖品 = ["一等奖", "二等奖", "三等奖", "没有奖"];

function 抽奖() {
  const 后台抽奖 = Math.floor(Math.random() * 奖品.length);
  const 用户抽奖结果 = 奖品[后台抽奖];
  document.getElementById('结果').innerText=`恭喜你获得：${用户抽奖结果}`;
}