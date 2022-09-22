function TrainDetails() {

    let trainName = document.getElementById("trainName").value;
    let train_name = document.getElementById("train_name");
    let train_number = document.getElementById("trainNumber");
    let train_from = document.getElementById("trainFrom");
    let train_to = document.getElementById("trainTo");
    let availability = document.getElementById("availability");
    let arrive_time = document.getElementById("arriveTime");
    let depart_time = document.getElementById("departTime");
    let mon = document.getElementById("mon");
    let tue = document.getElementById("tue");
    let wed = document.getElementById("wed");
    let thu = document.getElementById("thu");
    let fri = document.getElementById("fri");
    let sat = document.getElementById("sat");
    let sun = document.getElementById("sun");




    const data = JSON.stringify({
        "search": trainName,
    });

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            document.getElementById("invoice").style.display = "none";
            let jsonData = JSON.parse(this.responseText);
            // train_name.innerHTML = jsonData[0].name;
            if(jsonData.length == 0){
                console.log("No data available");
                document.getElementById("warning").innerHTML = "No data available, We will Update Soon."
            }else{
                train_number.innerHTML = "Train Number: " + jsonData[0].train_num;
                train_from.innerHTML = "Train from: " + jsonData[0].train_from;
                train_to.innerHTML = "Train to: " + jsonData[0].train_to;
                arrive_time.innerHTML = "Arrive Time: " + jsonData[0].data.arriveTime;
                depart_time.innerHTML = "Depart Time: " + jsonData[0].data.departTime;
                let Monday = jsonData[0].data.days.Mon;
                let Tuesday = jsonData[0].data.days.Tue;
                let Wednesday = jsonData[0].data.days.Wed;
                let Thursday = jsonData[0].data.days.Thu;
                let Friday = jsonData[0].data.days.Fri;
                let Saturday = jsonData[0].data.days.Sat;
                let Sunday = jsonData[0].data.days.Sun;
                let availability = [Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday];
                let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                let inText = [sun, mon, tue, wed, thu, fri, sat];
                let av = "Availability: "
                document.getElementById("av").innerHTML = av;
                for (let i = 0; i < availability.length; i++) {
                    if (availability[i] == 1) {
                        inText[i].innerHTML = days[i] + " || "
                    }
                }



                console.log("Data shown ---<<")
            }

        }
    });

    xhr.open("POST", "https://trains.p.rapidapi.com/");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("x-rapidapi-host", "trains.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "d34bd06ac3msha7d91b22be57ab6p14efbbjsn16290e0979a8");

    xhr.send(data);
    console.log("Data send to cloud ---<<");
    document.getElementById("invoice").innerHTML="Fetching data";


}