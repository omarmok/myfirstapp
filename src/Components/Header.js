import React from 'react';

class HeaderTest extends React.Component{

    render(){
        function Header1(props){
            return(
                
                <div>{props.Alia}</div>
                
            );
        }
       function Header2(props){ return(
            <div>{props.ali} {props.age}</div>
           
        );
    }
   return(
     <Header2 ali="a2" age="35"/>
   )
}
}
class TestExport{
     testFun=(name)=>{
         return name;
        };
}
export  default HeaderTest;
export {TestExport};
