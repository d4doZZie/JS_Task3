


function anyNumber(n){
  var results = []; // declaration of results variable(Array). i.e where the results wiil be stored in
  
  for(var i=1; i<=n; i++){  // This will increment our number by 1, Starting from 1, to the given number.
      
      if (i%2===0 && i%3===0 && i%5===0){  // checks if the given number is divisble by all three given numbers 2,3,& 5.
          results.push("yu-gi-oh") // pushes results back to our array
      }
         else if (i%2===0 && i%3===0){ // checks if the given number is divisble by 2 & 3.
                results.push("yu-gi")

         }
                   else if (i%2===0 && i%5===0){ // checks if the given number is divisble by 2 & 5.
                        results.push("yu-oh")
        }
                          else if (i%3===0 && i%5===0){ //checks if the given number is divisble by 3 & 5.
                             results.push("gi-oh")
         }
           else if (i%2===0){ // checks if the given number is divisble by 2
             results.push("yu")
           }
                    else if (i%3===0){  // checks if the given number is divisble by 3.
                     results.push("gi")
            }
     else if (i%5===0){ // checks if the given number is divisble by 5.
     results.push("oh")
             }
             
             else {
             results.push(i) // if the number is not divisible by our given numbers, it returns back the number, unchaged
             }
             
          }
          return results; // returns our results, and terminates the function.
      }
      anyNumber(100) // Function call and passing of 100 as argument.
        anyNumber(67) //  Function called and passed any random number (37 in this case as argument)

    