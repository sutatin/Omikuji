/**
 * Created with JetBrains WebStorm.
 * User: Owner
 * Date: 13/08/13
 * Time: 7:59
 * To change this template use File | Settings | File Templates.
 */


document.getElementById("omikuji").onclick = function(){
    run();
};

function run(){
    var omikujiArray = ["大吉","中吉","小吉","凶"];
    var result = Math.floor(Math.random() * omikujiArray.length);
    document.getElementById("result").innerHTML  =omikujiArray[result];
    switch (omikujiArray[result]){
        case "大吉":
            document.getElementById("comment").innerHTML = "今日は一日絶好調！！";
            break;
        case "中吉":
            document.getElementById("comment").innerHTML = "普通が一番だよね！";
            break;
        case "小吉":
            document.getElementById("comment").innerHTML = "そつない一日を過ごしてね！";
            break;
        case "凶":
            document.getElementById("comment").innerHTML = "気をつければ大丈夫！！";
            break;
    }
}