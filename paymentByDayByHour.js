 const paymentByDayByHour = {
    MO: {
        schedule: ["00:01","09:00","09:01","18:00","18:01","00:00"],
        payment: [25,15,20]
    },
    TU: {
        schedule: ["00:01","09:00","09:01","18:00","18:01","00:00"],
        payment: [25,15,20]
    },
};

function printValues(){

    const work = "MO10:00-12:00";
    let reDay = /[A-Z][A-Z]/g
    const day = work.match(reDay);
    let reStart = /[0-9][0-9]:[0-9][0-9]/g
    const start = work.match(reStart).toString();
    console.error(typeof start);
    console.error(start);
    document.getElementById("demo").innerHTML = day + start[0] + start[1];

    console.error("10:00-11:00",getHourPayment("10:00","11:00"));
    console.error("18:00-19:00",getHourPayment("18:00","19:00"));
    console.error("01:00-02:00",getHourPayment("01:00","02:00"));

    document.getElementById("payment").innerHTML = paymentByDayByHour[day].schedule;

    //document.getElementById("demo").innerHTML = paymentByDayByHour.MO.schedule;
}

function getHourPayment(startTime, endTime){
    if(startTime > "00:01" && endTime < "09:00"){
        return 25;
    }else if(startTime > "09:01" && endTime < "18:00"){
        return 15;
    }else {
        return 20;
    }
}