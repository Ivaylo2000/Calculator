const clearAll = document.querySelector('.clearAll');
const ravno = document.querySelector('.equal');
let buttons =document.querySelectorAll('.nums');
const clearOne = document.querySelector('.clearOne');
let result ="";
let povt = ['/','+','*','.','-'];
let povt2 = ['/','+','*','.'];

buttons.forEach((nums)=>{
nums.addEventListener('click',(e)=>{
result=result + e.currentTarget.value;
console.log(result);
console.log(povt);


//da ne se izpolzva znak za purvi simvol(osven - )
if(povt2.includes(result[0])){
    result= result.substring(0,result.length-1);
}

// da ne se izpolzva znak sled minus(-)
for(let i=0;i<=result.length;i++){
    if(result[i-1]==="-" && povt.includes(result[i])){
        result= result.substring(0,result.length-1);
    }
}

//da ne se izpolzvat 2 razlichni znaka posledovatelno
for(let i=0;i<=result.length;i++){
    if(povt2.includes(result[i]) && povt2.includes(result[i-1])){
        result= result.substring(0, result.length - 1);  
    }  
}
 document.querySelector('input').value=result;
})
})

//Izcislqva inputa
ravno.addEventListener('click', ()=>{
    
    document.querySelector('input').value=(eval(result));
    result=eval(result);
})

//Triene na vsichko
clearAll.addEventListener('click', ()=>{   
    document.querySelector('input').value="";
    result="";
})

//Triene na 1 znak
clearOne.addEventListener('click', ()=>{
   result= document.querySelector('input').value;
   result= result.substring(0,result.length-1);
   document.querySelector('input').value=result;
})