import { gql } from '../__generated__';
import { useSuspenseQuery } from '@apollo/client';

const GET_BOOKS = gql(/* GraphQL */ `
  query AllBooks {
    books {
      id
      title
      characters
    }
  }
`);

export default function Books() {
  const { data, refetch, error } = useSuspenseQuery(GET_BOOKS);

  if (error) return <p>Error : {error.message}</p>;
  if (!data || !Array.isArray(data.books)) return <p>There was a problem loading the data</p>;

  return (
    <div>
      <h1>My Books</h1>
      {data.books.map(book => (
        <div key={book.id}>
          <h3>Book: {book.title}</h3>
          <br />
          <b>characters:</b>
          <p>{book.characters.join(', ')}</p>
          <br />
          
        </div>  
      ))}

      <button onClick={() => refetch()}>refetch</button>
    </div>
  );
}
