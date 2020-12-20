const wlan = require("Wlan");
const http = require("http");
wlan.connect("YukaCR", { password: "zwy99001837" }, () => {

    var req = http.request({
        host: "rabbithouse.igayuka.moe",
        port: 80,
        path: "/test.json",
        method: 'GET',
    }, (res) => {
        res.on('data', data => console.log(data));
        res.on('close', data => console.log('close', data))
    });
    req.end()

})