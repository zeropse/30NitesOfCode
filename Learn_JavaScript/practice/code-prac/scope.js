const recentTikTokViews = [1932, 2300, 453, 5222, 6733, 7402, 8334];
const recentInstagramViews = [936, 2576, 453, 7013, 5489, 7402, 3921];
const recentYouTubeViews = [2300, 453, 5222, 989, 6733, 7402, 2789];

function mean(viewsArray){
    let views = 0;
    for (i = 0 ; i < viewsArray.length; i++){
        views += viewsArray[i];
    }
    console.log(views/viewsArray.length);
}

function median(viewsArray){
    let sortedStats = viewsArray.sort((a, b) => a - b);
    let middleIndex = Math.floor(sortedStats.length / 2);
    let middleValue = viewsArray[middleIndex];

    console.log(middleValue)
}


function final(){
    console.log("Tiktok");
    mean(recentTikTokViews);
    median(recentTikTokViews)

    console.log();

    console.log("Instagram");
    mean(recentInstagramViews);
    median(recentInstagramViews);

    console.log();

    console.log("Youtube");
    mean(recentYouTubeViews);
    median(recentYouTubeViews);
}

final();