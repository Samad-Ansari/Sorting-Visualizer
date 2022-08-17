
async function bubbleSortAlgorithm(){
	stopSort = false;
	stopButton.disabled = false;
	let els = document.querySelectorAll('.bar');
	loop1: for(let i=0; i<arraySize-1; i++){
		loop2: for(let j=0; j<arraySize-i-1; j++){
			if(stopSort){
				break loop2;
				break loop1;
			}
			els[j].style.backgroundColor = '#000';
			els[j+1].style.backgroundColor = '#000';
			if(parseInt(els[j].style.height) > parseInt(els[j+1].style.height)){
				swap(els[j], els[j+1]);
			}
			await delayTime(sortingSpeed);
			els[j].style.backgroundColor = '#395659';
			els[j+1].style.backgroundColor = '#395659';
		}
	}
        bubbleSort.disabled = false;

}
