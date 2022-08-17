const main = document.querySelector('.main');

const bubbleSort = document.querySelector('.bubbleSort');
const selectionSort = document.querySelector('.selectionSort');
const newArray = document.querySelector('.newArray');
const stopButton = document.querySelector('.stop');
const sortingBars = document.getElementById('sortingBars');

const sizeSlider = document.getElementById('sizeSlider')
const speedSlider = document.getElementById('speedSlider')

const speedValue = document.getElementById('speedValue');
const sizeValue = document.getElementById('sizeValue');

let bars = [];
stopSort = false;
arraySize = 30;
sortingSpeed = 40;

// delay time
function delayTime(time){
	return new Promise(resolve => {
		setTimeout(()=>{ resolve('')}, time)
	})
}

// swap two element
function swap(el1, el2){
	let temp = el1.style.height;
	el1.style.height = el2.style.height;
	el2.style.height = temp;
}

// stop button
stopButton.addEventListener('click', ()=> {
	stopSort = true;
	stopButton.disabled = true;
	bubbleSort.disabled = false;
	selectionSort.disabled = false;
	quickSort.disabled = false;
	mergeSort.disabled = false;
})

// speed slider
speedSlider.addEventListener('change', ()=>{
	speedValue.innerHTML = speedSlider.value
	sortingSpeed = 100 - speedSlider.value
})

// size slider
sizeSlider.addEventListener('change', ()=>{
	sizeValue.innerHTML = sizeSlider.value;
	arraySize = sizeSlider.value;
})

// bubble sort 
bubbleSort.addEventListener('click', () => {
	bubbleSort.disabled = true;
	stopButton.disabled = false;

	bubbleSortAlgorithm();
})

// selection sort
selectionSort.addEventListener('click', ()=> {
	selectionSort.disabled = true;
	stopButton.disabled = false;

	selectionSortAlgorithm();
})


// new array button
newArray.addEventListener('click', () => {
	createNewArray(arraySize)
})

// delete old array
function deleteOldArray(){
	sortingBars.innerHTML = '';
}

createNewArray(arraySize);

async function createNewArray(noOfBars = 50){
	deleteOldArray();
	bubbleSort.disabled = false;
        selectionSort.disabled = false;
	for(let i=0; i<noOfBars; i++){
		bars.push(Math.floor(Math.random()*250));
	}

	for(let i=0; i<noOfBars; i++){
		await delayTime(30);
		let bar = document.createElement('div');
		bar.style.height = `${bars[i]}px`
		bar.classList.add('bar')
		sortingBars.appendChild(bar);
	}
}
