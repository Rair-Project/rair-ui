import * as React from 'react';

function App() {
   return (
      <div>
         <h1>Welcome to React</h1>
         <h4> Also, you <i>shoudl</i> know that kinda hot patching works! &lt;= fix should and hit refresh</h4>
         Advantages:
         <ul>
            <li>BS Free.. 2 dependencies which are react and react-dom. </li>
            <li>BS Free (continued).. 10 Dev dependencies.</li>
            <li>Completely written in typescript.</li>
            <li>Supporting JSX without Babel.. (continuation of being BS Free).</li>
            <li> <text style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>
               Hot</text> warm reloading :P. Edit then go to react and do ctrl + R </li>
         </ul>
      </div>
   );
}
export default App;
