import * as components from './components/Components.js'; // clear import and syntax

function App() {
  return (
    <div className='min-h-screen'>
      <main>
        <components.Navbar />
        <components.Hero />
      </main>
      <components.Services />
      <components.Transactions />
      <components.Footer />
    </div>
  )
}

export default App