import "./App.css";
import Header from "./components/header";
import bookreviews from "./reviews";
import Books from "./components/books";

function App() {
  const bookElements = bookreviews.map((review) => {
    return (
      <Books
        key={review.id}
        img={review.img}
        title={review.title}
        author={review.author}
        rating={review.rating}
        text={review.text}
      />
    );
  });
  return (
    <>
      <Header />
      {bookElements}
    </>
  );
}

export default App;
