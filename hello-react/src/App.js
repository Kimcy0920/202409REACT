import React from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import Counter2 from './Counter2';
import EventPractice from './EventPractice';

const App = () => {
  return (
    <div>
      <MyComponent>리액트</MyComponent><hr/>
      <Counter /><hr/>
      <Say /><hr/>
      <Counter2 /><hr/>
      <EventPractice />
    </div>
  )
}

export default App; // <div id="root">이곳에 들어감</div>
