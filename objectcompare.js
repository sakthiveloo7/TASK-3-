let obj1={name:"Person1",age:"8"};
let obj2={age:"8",name:"Person1"};
if (Object.keys(obj1).length==Object.keys(obj2).length){

    console.log("Length is same");
    for(let key in obj1){
        if(obj1[key]===obj2[key]){
            console.log("Values are same..");
        
        }else{
            console.log("Values Does not same..");

        }
        
    }
     
}else{
    console.log("Object length are different..")
}