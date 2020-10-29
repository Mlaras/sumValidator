exports.twoNumberSum = (array, targetSum) => {
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
