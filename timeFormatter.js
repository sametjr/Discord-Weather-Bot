export default function formatter(t) {

    var ts_ms = t * 1000;
    var date_ob = new Date(ts_ms);
    var hours = ("0" + date_ob.getHours()).slice(-2);
    var minutes = ("0" + date_ob.getMinutes()).slice(-2);
    var seconds = ("0" + date_ob.getSeconds()).slice(-2);
    
    return [hours, minutes, seconds];
}

