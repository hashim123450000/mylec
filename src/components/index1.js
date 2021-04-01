import { useCallback } from "react";
export default function Fck(){
console.log("before prparing food")

function preparefood(callback){
    setTimeout(() => {
        console.log("preparefood")
        callback("foodisready")
    }, (20));
} 
preparefood(function(value){
console.log("food is =",value)
})
console.log("enjoy")
return<div></div>
}