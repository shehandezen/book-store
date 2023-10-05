const Book = ({ id, name, author, image, date }) => {
  return (
    <div className="card-container">
      <div className="card">
        <span className="card-badge">{`#${id}`}</span>
        <img src={image} alt="Book" className="card-image" />
        <span className="card-date">{date}</span>
        <div className="card-text-content">
          <h4 className="card-title">{name}</h4>
          <p className="card-author">{author}</p>
        </div>
      </div>
    </div>
  );
};

export default Book;
