import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Component } from 'react';
import Header  from './Components/Header'
import {TestExport} from './Components/Header'

class Test extends TestExport{
  MyVar=12;
  MyName='';
  MyAge=20;
  
   callme=name=>{

     return 'welcome ' + this.testFun(name);
  }
   constructor(name,age,props){
     super(props);
       this.MyVar=50;
       this.MyName=name;
       this.MyAge=age;

   }
   testFun(x){

    let data=30;
    this.MyVar=x+10;
    var testFromImport=new TestExport();
    //return this.MyVar;

  }
  testFunc2(){
    return this.MyVar;
  }

  

}

class App extends React.Component{
   //state={data: [{name:'Ali',age:31},{name:'Ali2', age:50}]};
   testJson={name:'testwqweqw'};
   class1=new Test();
   constructor (props){

    super(props);
     let x=10;
   }
 
render(){
 {/*const ArrowFun=()=>{
    return this.testJson.name;
  }*/}
  //var x=this.testFun1();
 
  {/*function ReturnData(){
  return(
    <div className="App">
    
      
      <h1>{this.testJson.name}</h1>
    </div>
  );
}*/}
return(<div><h1>{this.testJson.name}</h1><div>{this.class1.callme('ghdhgsdhg')}</div></div>)

  
}
}


class App2 extends React.Component{
  //state={data: [{name:'Ali',age:31},{name:'Ali2', age:50}]};
  testJson={name:'I am app2'};
  constructor(props){
    super(props);
    let x=20;
  }

render(){
{/*const ArrowFun=()=>{
   return this.testJson.name;
 }*/}
 //var x=this.testFun1();

 {/*function ReturnData(){
 return(
   <div className="App">
   
     
     <h1>{this.testJson.name}</h1>
   </div>
 );
}*/}
return(<div><h1>{this.testJson.name}</h1><div></div></div>)

 
}
}


export default App;
//export  {Test};

