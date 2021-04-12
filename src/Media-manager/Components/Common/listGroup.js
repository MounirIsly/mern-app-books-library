import React from 'react';

const ListGroup = (props) => {
    const {textProperty, valueProperty, onGenreSelect, selectedGenre } = props;
    return ( 
        <ul className="list-group">
            {props.genres.map(genre=>(
                <li 
                    style={{cursor: "pointer"}}
                    key={genre[valueProperty]} 
                    className= {genre === selectedGenre ? "list-group-item active" : "list-group-item" }
                    onClick={()=>onGenreSelect(genre)}>
                    {genre[textProperty]}
                </li>
            ))}
        </ul>
     );
}
 ListGroup.defaultProps = {
    textProperty: "genre", valueProperty: "id"
 }
export default ListGroup;