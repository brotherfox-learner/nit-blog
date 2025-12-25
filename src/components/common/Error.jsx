export function Error({ message = 'Something went wrong' }) {
  return (
    <div>
      <p>Error: {message}</p>
    </div>
  );
}

