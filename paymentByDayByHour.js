 const paymentByDayByHour = {
    MO: {
        schedule: ["00:01","09:00","09:01","18:00","18:01","00:00"],
        payment: [25,15,20]
    },
    TU: {
        schedule: ["00:01","09:00","09:01","18:00","18:01","00:00"],
        payment: [25,15,20]
    },
    MO: {
        schedule: ["00:01","09:00","09:01","18:00","18:01","00:00"],
        payment: [25,15,20]
    },
    TU: {
        schedule: ["00:01","09:00","09:01","18:00","18:01","00:00"],
        payment: [25,15,20]
    },
    MO: {
        schedule: ["00:01","09:00","09:01","18:00","18:01","00:00"],
        payment: [25,15,20]
    },
    TU: {
        schedule: ["00:01","09:00","09:01","18:00","18:01","00:00"],
        payment: [25,15,20]
    },
    WE: {
        schedule: ["00:01","09:00","09:01","18:00","18:01","00:00"],
        payment: [25,15,20]
    },
    TH: {
        schedule: ["00:01","09:00","09:01","18:00","18:01","00:00"],
        payment: [25,15,20]
    },
    FR: {
        schedule: ["00:01","09:00","09:01","18:00","18:01","00:00"],
        payment: [25,15,20]
    },
    SA: {
        schedule: ["00:01","09:00","09:01","18:00","18:01","00:00"],
        payment: [30,20,25]
    },
    SU: {
        schedule: ["00:01","09:00","09:01","18:00","18:01","00:00"],
        payment: [30,20,25]
    },
    TU: {
        schedule: ["00:01","09:00","09:01","18:00","18:01","00:00"],
        payment: [25,15,20]
    },
};


function printValues(){

   // const work = "MO10:00-12:00";
   const work = "MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00";
    let reDay = /[A-Z][A-Z]/g
    const day = work.match(reDay);
    let reStart = /[0-9][0-9]:[0-9][0-9]/g
    const start = work.match(reStart);
    console.error(typeof start);
    console.error(start);
    console.error("length of day array", day.length );
    console.error("length of start array", start.length);
    document.getElementById("demo").innerHTML = "LOL" + day + start;

    // console.error("10:00-11:00",getHourPayment("10:00","11:00"));
    // console.error("18:00-19:00",getHourPayment("18:00","19:00"));
    // console.error("01:00-02:00",getHourPayment("01:00","02:00"));
    console.error(paymentByDayByHour);

    document.getElementById("payment").innerHTML = paymentByDayByHour[day].schedule;
    document.getElementById("startTime").innerHTML = paymentByDayByHour[day].schedule;
    document.getElementById("endTime").innerHTML = paymentByDayByHour[day].schedule;

    document.getElementById("testData").innerHTML = "RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00";
    document.getElementById("testDataStartTime").innerHTML = start[0];
    document.getElementById("testDataEndTime").innerHTML = start[1];

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