// Javascript accordion
let displayContent = document.querySelector('.body_content');
let btnClick = document.getElementById('btn');

btnClick.addEventListener('click', () => {
    if (displayContent.style.opacity === "0") {
        displayContent.style.opacity = "1";
        displayContent.style.transition = ".5s";
    } else {
        displayContent.style.opacity = "0";
    }
})

// Javascript sorting Array using flat method
let sortArray = (array1, array2, ...CollectArray) => {
    let flatArray = CollectArray.flat();
    let combineArray = array1.concat(array2, flatArray);
    let sortingArray = combineArray.sort((a, b) => { return a - b });
    return sortingArray;
}
arr1 = [1, 2, 5, 6];
arr2 = [7, 3, 5, 9];
arr3 = [8, 2, 11, 6];
arr4 = [11, 4, 18, 1];
arr5 = [14, 2, 5, 2];
arr6 = [6, 4, 5, 9];
arr7 = [3, 8, 5, 16];
console.log(sortArray(arr1, arr2, arr3, arr4, arr5, arr6, arr7));