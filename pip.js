//Write a function that takes an array of numbers as input and returns the sum of all the numbers

function Array(nums);
     sum=0;
      for(let i=0;i<nums.length;i++){
        
     if(nums[i]%sum==0){
      sum+=nums[i]
} 
         return sum      

}
 console.log (Array(12,18,67,4,5,7,23,10));



//Write a function that takes two numbers as input and returns true if their sum is greater than 100,
//And false otherwise
function intergers(input,nums){

    if (nums>=100){
        return(true)

     }
    else{
    
         return(false)
       } 
 }

 let numbers=(43,13)
console.log(numbers)


 //Write a function that takes a string as input and returns the number of vowels in the string
  function string_count(vowels){

        const count =str.match(/[a,e,i,o,u]/g, "").length
        return count;
      }
      let str="Beautiful"
      console.log(vowel(str))
  


// //Write a function that takes in a array of numbers as a parameter and returns the second largest number in the array
function ArrNum(secondlargest){
     Array =(ArrNum.includes (secondlargest));

   return(numbers)


}
   
let nums=(12,10,53,25,69);
console.log(Number)



// //Write a function that takes a string as a parameter and returns true if the string is a palindrome and false otherwise
// function string(palindrome){
    function palindrome(str){
        reversedStr=str.split("").reverse().join("")
        return str===reversedStr
    }
    console.log(palindrome("dad"))