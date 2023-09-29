import { gql } from '../__generated__';
import { useSuspenseQuery } from '@apollo/client';

const GET_BOOK = gql(/* GraphQL */ `
  query GetBook($bookId: ID!) {
    book(bookId: $bookId) {
      characters
      title
    }
  }
`);

export default function Book() {
  const { data,refetch, error } = useSuspenseQuery(GET_BOOK, {
    variables: {
      bookId: '1'
    }
  });

  if (error) return <p>Error : {error.message}</p>;
  if (!data || !data.book) return <p>Book not found</p>;

  return (
    <div>
      <h1>Book Details</h1>
      <h3>{data.book.title}</h3>

      <br />
      <b>characters:</b>
      <p>{data.book.characters.join(', ')}</p>

      <br />
      <button onClick={() => refetch()}>refetch</button>
    </div>
  )
}
