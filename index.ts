//objects
const obj1={a:1,b:"Hello"};
const obj2={b:"Welcome",c:false};
const obj3={c:true,d:[1,2,3]};
//function to merge objects
function merge(obj1:{a:number,b:string},
                obj2:{b:string,c:boolean},
                obj3:{c:boolean, d:number[]},){
                    const objects=
                    {
                        ...obj1,
                        ...obj2,
                        ...obj3,
                    }
                    return objects;
}
const mergedObjects= merge(obj1,obj2,obj3);
console.log(mergedObjects);
            