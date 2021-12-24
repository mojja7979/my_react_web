import React, { Component, Fragment } from 'react';
import './App.css'
import MyName from './MyName';
class App extends Component {
  render() {
    const name = "react";
    const value = 1;
    return (
        <Fragment>
          <div>
            Hello {name}
          </div>
          <div>
            Bye
          </div>
          <div>
            {
              1 + 1 === 3
              ? (<div>맞아요</div>)
              : (<div>틀려요</div>)
            }
          </div>
          <div>
            {
              1 + 1 === 2 && (<div>맞아요!</div>)
            }
          </div>
          <div>
            {
              (function(){
                if(value === 1) return (<div>하나</div>);
                if(value === 2) return (<div>둘</div>);
                if(value === 3) return (<div>셋</div>);
              })()
            }
          </div>
          <div>
            {
              (() => {
                if(value === 1) return (<div>하나</div>);
                if(value === 2) return (<div>둘</div>);
                if(value === 3) return (<div>셋</div>);
              })()
            }
          </div>
          <div className='App'>
            리액트
          </div>
          <MyName name="리액트"></MyName>
          <MyName />
          {/* 주석 */}
        </Fragment>
    );
  }
}

export default App;