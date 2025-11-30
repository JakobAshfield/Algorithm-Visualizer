import { useState } from 'react'
import SortingPage from './pages/SortingPage.jsx'
// import PathfindingPage, SearchingPage, DataStructuresPage later

export default function App() {
  const [page, setPage] = useState('sorting') // default page

  return (
    <div>
      {/* Simple navigation */}
      <nav style={{ marginBottom: '1rem' }}>
        <button onClick={() => setPage('sorting')}>Sorting</button>
        <button onClick={() => setPage('pathfinding')}>Pathfinding</button>
        <button onClick={() => setPage('searching')}>Searching</button>
        <button onClick={() => setPage('datastructures')}>Data Structures</button>
      </nav>

      <main>
        {page === 'sorting' && <SortingPage />}
        {/* Add other pages when ready */}
      </main>
    </div>
  )
}
