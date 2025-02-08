let arr=[1,2,[3,1,[4,2],5],7,8];         

function sumArray(arr){
    let sum=0;

    for(let i=0;i<arr.length;i++){
        let element=arr[i];

        if(Array.isArray(element)){
            sum+=sumArray(element);
        }else{
            sum+=element
        }
    }
    return sum;
}

console.log("The Sum is: "+sumArray(arr));