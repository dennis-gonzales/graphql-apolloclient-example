import { useQuery } from '@apollo/client';
import { gql } from '../src/__generated__/gql';

const GET_BOOKS = gql(`
  query AllBooksQuery {
    books {
      id,
      title,
      characters,
    }
  }

`);



function App() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data && data.books?.map(book => (
    <div key={book.id}>
      <h3>{book.title}</h3>
      <br />
      <b>About this location:</b>
      <p>{book.characters.join(', ')}</p>
      <br />
    </div>
  ));
}

export default App
