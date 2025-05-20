export default function Books(props) {
  return (
    <div className="book-card">
      <img className="book-cover" src={props.img.src} alt={props.img.alt} />
      <div className="book-info">
        <h2 className="book-title">{props.title}</h2>
        <p className="book-author">{props.author}</p>
        <p className="book-rating">{props.rating}</p>
        <p className="book-text">{props.text}</p>
      </div>
    </div>
  );
}