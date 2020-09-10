import React, {useState} from 'react';
import './App.css';

function App() {
  const[active, setActive] = useState('');

  return (
    <>
      <div className = "left" >
        <ul>
          <li><a href="#bubblesort" className={ active === 'bubblesort' ? 'active' : '' } onClick ={() => setActive('bubblesort')}>Bubble Sort</a></li>
          <li><a href="#selectionsort" className={ active === 'selectionsort' ? 'active' : '' } onClick ={() => setActive('selectionsort')}>Selection Sort</a></li>
          <li><a href="#mergesort" className={ active === 'mergesort' ? 'active' : '' } onClick ={() => setActive('mergesort')}>Merge Sort</a></li>
        </ul>
      </div>
      <div className="right" >
      <div className="header">Sorting Alogorithms</div>
        <p>This page will demonstrate the various different kinds of sorting algorithms and their time complexities. There will also be coding examples in C for each of the coding algorithms. </p>
        <br/>
        <div id="bubblesort">
          <h2 style={{marginBottom: '5px'}}>Bubble Sort</h2>
          <div>Time Complexity: O( n<sup>2</sup> )</div>
          <p>Bubble Sort is a sorting algorithm that loops through the array and any time that the previous element is a smaller value than the the next element, they switch those positions in the array.</p>
          <pre><code className="c">{`
#include<stdio.h>
#include<print_array.h>

void bubbleSort(array, arrayCount){
  for(int i = 0; i < arrayCount - 1){
    for(int j = 0; j < arrayCount - i - j; j++){
      //if the next number is larger than the previous number in the array, swap
      if(array[j] > array[j+1]){

        int temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;

        printArr(array, arrayCount);
      }
    }
  }
}

int main(){
  int array[10] = {8,5,4,3,2,6,5,4,3,2};
  int arrayCount = 10;

  bubbleSort(array, arrayCount);

  return 0;
}
          `}
          </code></pre>
        </div>

        <div id="selectionsort">
          <h2 style={{marginBottom: '5px'}}>Selection Sort</h2>
          <div>Time Complexity: O( n<sup>2</sup> )</div>
          <p>This is a sorting algorithim that keeps track of the lowest number in the array and then places it at the beginning of the array. Once the lowest value has been placed, it will search for the next lowest value. </p>
          <pre><code className="c">{`
#include<stdio.h>
#include<print_array.h>

void selectionSort(int arr[], int n){
  int i, j, min_idx;

  for(i = 0; i < n - 1; i++){
    min_idx = i;
    for(j = i + 1; j < n; j++) {
      if(arr[j] < arr[min_idx]){
        min_idx = j;
      }
    }
    printArr(arr, n);
    
    int temp = arr[min_idx];
    arr[min_idx] = arr[i];
    arra[i] = temp;
  }
}

int main(){
  int arr[10] = {4,2,67,8,3,2,6,8,9,10};
  selectionSort(arr, 10);

  return 0;
}
          `}
          </code></pre>
        </div>

        <div id="mergesort">
          <h2 style={{marginBottom: '5px'}}>Merge Sort</h2>
          <div>Time Complexity: O( nlog(n) )</div>
          <pre><code className="c">{`
#include<stdio.h>
#include<print_array.h>

void merge(){
  int i, j, k;
  int n1 = m-l + 1;
  int n2 = r - m;
  int L[n1], R[n2];

  for(i = 0; i < n1; i++)
    L[i] = arr[l+i];

  for(j = 0; j < n2; j++)
    R[j] = arr[m + 1 + j];

  j = 0;
  i = 0;
  k = l;

  while(i < n1 && j < n2){
    if(L[i] <= R[j]){
      arr[k] = L[i];
      i++;
    } else{
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  while(i < n1){
    arr[k] = L[i];
    i++;
    k++;
  }

  while(j < n2){
    arr[k] = R[j];
    j++;
    k++;
  }

}

void mergeSort(int arr[], int l, int r){
  if(l < r){
    let m = l + (r - l) / 2;
    int len = r + 1 - l;
    mergeSort(arr, l, m);
    mergeSort(arr, m+1, r);

    merge(arr, l, m ,r);
  }
}

int main(){
  int array[10] = {8,5,4,3,2,6,5,4,3,2};
  int arrayCount = 10;

  mergeSort(array, 0, arrayCount - 1);

  return 0;
}
          `}
          </code></pre>
        </div>
        
      </div>
    </>
  );
}

export default App;
