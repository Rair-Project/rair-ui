import React from 'react'
import Layout from './components/Layout'
import MainTabs from './components/MainTabs'
import HexEditor from './components/HexEditor'

const tabsData = [
  {
    label: 'Welcome',
    children: (
      <div>
        <h1>Welcome to React</h1>
        <h4> Also, you <i>shoudl</i> know that kinda hot patching works! &lt;= fix should and hit refresh</h4>
        Advantages:
         <ul>
          <li>BS Free.. 2 dependencies which are react and react-dom. </li>
          <li>BS Free (continued).. 10 Dev dependencies.</li>
          <li>Completely written in typescript.</li>
          <li>Supporting JSX without Babel.. (continuation of being BS Free).</li>
          <li> Hot warm reloading :P. Edit then go to react and do ctrl + R </li>
        </ul>
      </div>
    )
  },
  {
    label: 'Hex Editor',
    children: HexEditor
  },
  {
    label: 'Graph',
    children: 'Graph is here'
  }
]

function App() {
  return (
    <Layout>
      <MainTabs data={tabsData}></MainTabs>
    </Layout>
  )
}
export default App
