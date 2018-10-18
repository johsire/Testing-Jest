
module.exports = {
 add(a, b) {
   if(typeof a === 'number' && typeof b === 'number') {
     return (a + b)
   }
   else {
     throw new Error('please give me numbers')
   }
 }
};
