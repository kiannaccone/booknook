function BookCard ({book : {title, author, summary, image, date}}) {
    return (
        <div>
            <img src={image} alt={title} /> 
            <h4>{title}</h4> 
            <p>{author}</p>
            <p>{date}</p>
            <p>{summary}</p>
        </div>
    );
}

export default BookCard;