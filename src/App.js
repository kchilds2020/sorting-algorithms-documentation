import React from 'react';
import './App.css';

function App() {

  const header = {
    fontSize: '32px',
    fontWeight: 'bold',
    padding: '20px',
    textAlign: 'center'
  }

  const left = {
    backgroundColor: '#f4f4f4',
    position: 'fixed',
    width: '200px',
    height: '100vh',
    left: '0',
    top: '0'
  }

  const right = {
    marginLeft: '200px',
    padding: '20px',
    fontSize: '20px'
  }

  return (
    <>
      <div style={header}>Sorting Alogorithms</div>
      <div style={left} ></div>
      <div style={right} >
        <p>This page will demonstrate the various different kinds of sorting algorithms and their time complexities. There will also be coding examples in C for each of the coding algorithms. </p>
        <br/>
        <div id="bubblesort">
          <h2 style={{marginBottom: '5px'}}>Bubble Sort</h2>
          <div>Time Complexity: O( n<sup>2</sup> )</div>
          <p>Bubble Sort is a sorting algorithm that loops through the array and any time that the previous element is a smaller value than the the next element, they switch those positions in the array.</p>
          <pre><code className="c">{`
#include<stdio.h>
#include<print_array.h>

int main(){

  int array[10] = {8,5,4,3,2,6,5,4,3,2};
  int arrayCount = 10;

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

int main(){

  int array[10] = {8,5,4,3,2,6,5,4,3,2};
  int arrayCount = 10;

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
