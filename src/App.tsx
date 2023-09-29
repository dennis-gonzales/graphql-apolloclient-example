import { Suspense } from 'react';
import Books from './components/Books';
import Book from './components/Book';

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading books...</div>}>
        <Books />
      </Suspense>

      <Suspense fallback={<div>Loading book details...</div>}>
        <Book />
      </Suspense>
    </>
  );
}

export default App;
