aqi = 301;

if (aqi <= 50){
    console.log("Good");
} else if (aqi <= 100 || aqi <=50){
    console.log("Moderate");
} else if (aqi <= 150 || aqi <=100){
    console.log("Unhealthy(Sensitive Groups)");
} else if (aqi <= 200 || aqi <=150){
    console.log("Unhealthy");
} else if (aqi <= 300 || aqi <=200){
    console.log("Very Unhealthy");
} else{
    console.log("Hazardous!")
}