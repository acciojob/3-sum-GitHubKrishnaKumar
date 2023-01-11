function threeSum(arr, target) {
  //your code here
	let len = arr.length;
	let sum =0;
	for(let i=0;i<len;i++){
		if(arr[i]==target){
		  sum = arr[i]+arr[i-1]+arr[i-2];
		}
	}
	console.log(sum);
}
module.exports = threeSum;
