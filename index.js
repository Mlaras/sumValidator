function twoNumberSum(array, targetSum){
    var result=[];
    for(const i in array){
        for(var j in array){
            if(array[i]+array[j]==targetSum & i!=j){
                result[0]=array[i];
                result[1]=array[j];
                return result;
            }
        }
    }
    console.log("No hay coincidencias");
    return result;
}
const array = [3, 5, -4, 8, 11, 1, -1, 6]
const targetSum = 10
const result = twoNumberSum(array, targetSum)
console.log(`${result}`)