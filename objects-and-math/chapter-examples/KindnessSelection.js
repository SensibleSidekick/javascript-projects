function randomSelection(arr){
   let index = Math.floor(Math.random()*arr.length);
   
   return arr[index];
 }
 
 function randomArray(arr1, arr2){
  let pickOne = Math.floor(Math.random()*2)
  let arr
  if (pickOne === 1){
    arr = arr1;
  } else {
    arr = arr2;
  }
return randomSelection(arr);
 }



 let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];
 
 let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];
 

 for (i=0; i < 2; i++){
   console.log(randomSelection(happiness));
 }
 
 //Experiment with the code above. Try to:
 //a) Print 3 random selections from each array.
 //b) Have the code randomly pick one array, and then print 2 random items from it.
 //c) Create a new array, then fill it with one random item from words and happiness. Print the new array.
console.log(randomArray(happiness, words));