
async function selectionSortAlgorithm(){
	stopSort = false;
	stopButton.disabled = false;
	let els = document.querySelectorAll('.bar');
	loop1: for(let i=0; i<arraySize-1; i++){
		loop2: for(let j=i+1; j<arraySize; j++){
			if(stopSort){
				break loop2;
				break loop1;
			}
			els[i].style.backgroundColor = '#000';
			els[j].style.backgroundColor = '#000';
			if(parseInt(els[i].style.height) > parseInt(els[j].style.height)){
				swap(els[i], els[j]);
			}
			await delayTime(sortingSpeed);
			els[i].style.backgroundColor = '#395659';
			els[j].style.backgroundColor = '#395659';
		}
	}
    
        selectionSort.disabled = false;

}
