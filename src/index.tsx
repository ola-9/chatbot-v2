import React from 'react'
import ReactDOM from 'react-dom'
import getWidget from './init.tsx';


// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

const run = (): void => {
  const Widget = getWidget();
  const root = document.getElementById('root');
  ReactDOM.render(Widget, root);

  // ReactDOM.createRoot(document.getElementById('root')!).render(
  //   <React.StrictMode>
  //     <Widget />
  //   </React.StrictMode>,
  // )

};

run();
