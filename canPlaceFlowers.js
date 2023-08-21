
/**
You have a long flowerbed in which some of the plots are planted, 
and some are not. However, flowers cannot be planted in adjacent 
plots.

Given an integer array flowerbed containing 0's and 1's, 
where 0 means empty and 1 means not empty, and an integer n, 
return true if n new flowers can be planted in the flowerbed 
without violating the no-adjacent-flowers rule and false otherwise.


Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
Example 2:

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
 */

var canPlaceFlowers = function(flowerbed, n) {
    for (let i = 0; i<flowerbed.length;i++){
        if (flowerbed[i]==0 && flowerbed[i-1]==0&& flowerbed[i+1]==0){ // looping through to check the conditions 
            flowerbed[i]=1 // this is planting the flower
            n-- // this takes out 1 flower from the flowers that need to be planted
            i++ // this skips the next index because flower cannot be planted nect to each other
        }
    }
    return n<=0 // check if all flowers have been planted
};