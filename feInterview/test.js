function findTimeFlagNum(Time) {
    let lastTime = new Date().getTime();

    for (var i = 1; i < 1000000; i += 2) {
        let currentTime = new Date().getTime();
        //假设该数字是质数
        var falg = true;
        //循环判断该数字是否满足质数条件
        if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0 || i % 11 == 0) {
            continue;
        }
        for (var j = 2; j < (i / 2); j++) {
            //如满足则标记该数不是质数
            if (i % j == 0) {
                falg = false;
            }
        }
        //falg为真输出质数
        if (falg) {
            console.log(i);
            if (currentTime - lastTime > Time) {
                console.log('endNum', i);
                break;
            }
        }

    }
}

findTimeFlagNum(1000);