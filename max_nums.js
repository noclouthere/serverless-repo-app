export default function find_max(arr){
    
    var arrayCopy = arr.toArray();
    let maxNum = 0;

    for(let i = 0; i < arrayCopy.length() - 1; i++){
        if(arrayCopy[i] > arrayCopy[i+1]){
            maxNum = arrayCopy[i];
        }
    }

    return maxNum;
}