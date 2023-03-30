import * as mods from './mods/index'; // clear import and syntax

function App() {
  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <mods.Navbar />
        <mods.Welcome />
      </div>
    </div>
  )
}

export default App