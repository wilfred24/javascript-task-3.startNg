//myNum is an 'array'

function divider(nums){
	let myNum=[];
	for (var i = 1; i<= nums; i++) {
		 if(i%2==0 && i%3==0 && i%5==0)
      			{myNum.push('yu-gi-oh')}
      		else if (i%2==0 &&i%3==0){myNum.push('yu-gi')}
      			else if (i%3==0 && i%5==0){ myNum.push('gi-oh')}
      				else if (i%2==0 && i%5==0){ myNum.push('yu-oh')}
		 else if(i%2==0){ myNum.push('yu')}
		 	else if (i%5==0){ myNum.push('oh')}
      else if(i%3==0){ myNum.push('gi')}	
      		else {myNum.push(i)}};
      				  return myNum
      			
	console.log (myNum);
}