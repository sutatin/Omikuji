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
}