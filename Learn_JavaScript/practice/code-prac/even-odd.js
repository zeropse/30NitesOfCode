for (let i = 1; i <= 50; i++){
    if ( i % 2 !== 0){
        continue;
    }
    if ( i === 42){
        console.log(i);
        break;
    }
    console.log(i); 
}