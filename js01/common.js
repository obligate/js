/**
 * 获取指定格式的时间
 * @param dt 日期的对象
 * @returns {string} 返回的是字符串的日期时间
 */
function getDate(dt){
    // var dt = new Date(); // 创建日期的对象
    var year = dt.getFullYear();
    var month = dt.getMonth();
    var day = dt.getDate();
    var hour = dt.getHours();
    var minute = dt.getMinutes();
    var second = dt.getSeconds();
    month = month<10?"0"+month :month;
    day = day<10 ?"0"+day:day;
    hour =hour<10?"0"+hour:hour;
    minute=minute<10?"0"+minute:minute;
    second=second<10?"0"+second:second;
    return  year + "年" + month + "月" + day + "日 " + hour +":" + minute + ":" + second;
}