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
        <p>This page will demonstrate the various different kinds of sorting algorithms and their time complexities. There will also be coding expamples in C for each of the coding algorithms. </p>
        <br/>
        <div id="bubblesort">
          <h2 style={{marginBottom: '5px'}}>Bubble Sort</h2>
          <div>Time Complexity: O( n<sup>2</sup> )</div>
          <pre><code>{`
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
        </div>

        <div id="mergesort">
          <h2 style={{marginBottom: '5px'}}>Merge Sort</h2>
          <div>Time Complexity: O( nlog(n) )</div>
        </div>
        
      </div>
    </>
  );
}

export default App;
