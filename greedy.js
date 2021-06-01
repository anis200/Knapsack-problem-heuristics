function get_optimal_value_score (capacity, weights, values)
{
    var numItems = values.length ,
    x= new Array() ,
    maxi = 0 ,
    i = 0 ,
    j=0 ,
    optimVal = 0 ;
   var ValPerWeight = [...Array(numItems)].map(() => Array(2).fill("0"));
   
   for (i=0 ; i<numItems ;i++){
     ValPerWeight[i][0] = values[i]/weights[i];
     ValPerWeight[i][1] = weights[i];
   }
   ValPerWeight.sort((a,b) => b[0]-a[0]);
   console.log(ValPerWeight);
   for (i=0; i<numItems; i++){
     if (ValPerWeight[i][1] <= capacity){
       maxi += ValPerWeight[i][1] ;
       capacity -= ValPerWeight[i][1] ;
       weight = ValPerWeight[i][1] ;
       j = weights.indexOf(weight) ;
       optimVal += values[j] ;
       x.push(j+1);
     }
     
   }
   return [optimVal,x] ;
}
/***********************************************************************************************/

function get_optimal_value_weight (capacity, weights, values)
{
    var numItems = values.length ,
    x= new Array() ,
    maxi = 0 ,
    i = 0 ,
    j=0 ,
    optimVal = 0 ,
    valWeight = [...Array(numItems)].map(() => Array(2).fill("0"));
   
   for (i=0 ; i<numItems ;i++){
     valWeight[i][0] = weights[i];
     valWeight[i][1] = values[i];
   }
   valWeight.sort((a,b) => b[0]-a[0]); // Here we modify, it's not weights.sort but valWeight.sort
   console.log(valWeight);
   for (i=0; i<numItems; i++){
     if (valWeight[i][0] <= capacity){
       maxi += valWeight[i][0] ;
       capacity -= valWeight[i][0] ;
       optimVal += valWeight[i][1] ;
       x.push(values.indexOf(valWeight[i][1])+1);
     }
     
   }
   return [optimVal,x] ;
}

/**********************************************************************************************/

function get_optimal_value_profit (capacity, weights, values)
{
    var numItems = values.length ,
    x= new Array() ,
    maxi = 0 ,
    i = 0 ,
    j=0 ,
    optimVal = 0 ,
    valWeight = [...Array(numItems)].map(() => Array(2).fill("0"));
   
   for (i=0 ; i<numItems ;i++){
     valWeight[i][1] = weights[i];
     valWeight[i][0] = values[i];
   }
   valWeight.sort((a,b) => b[0]-a[0]); // Here we modify, it's not values.sort but valWeight.sort .
   console.log(valWeight);
   for (i=0; i<numItems; i++){
     if (valWeight[i][1] <= capacity){
       maxi += valWeight[i][1] ;
       capacity -= valWeight[i][1] ;
       optimVal += valWeight[i][0] ;
       x.push(values.indexOf(valWeight[i][0])+1);
     }
     
   }
   return [optimVal,x] ;
}





var n =3 , capacity =50 , 
values = [60,100,120] ,
weights = [20,50,30],
[opt_value,objList] = get_optimal_value_weight(capacity,weights,values) ;
console.log("the optimal value is: "+opt_value+" and the list of objects is: ["+objList+"]\n");