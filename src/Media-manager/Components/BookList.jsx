import React, {Component} from 'react';
import books from '../API/List'
import Like from './Common/Like';
import Pagination from './Common/Pagination';
import {paginate} from '../utils/paginate'
import ListGroup from './Common/listGroup';
import genres from '../API/Genres'

class BookList extends Component {
    state = { 
        books: [],
        genres: [],
       
        pageSize: 4,
        currentPage: 1
     }
     componentDidMount() {
         this.setState({books: books, genres: genres})
     }
    handleDelete = book =>{
       const books = this.state.books.filter(c => c.id !== book.id);
       this.setState({books})
    }
    handleLike = (book)=>{
        const books = [...this.state.books];
        const index = books.indexOf(book);
        books[index] = {...books[index]};
        books[index].liked = !books[index].liked
        this.setState({books})
    }
    handlePageChange = (page) => {
        this.setState({currentPage: page})
    }
    handleGenreSelect = genre => {
        this.setState({selectedGenre: genre})
    }
    
    render() { 
        const {length} = this.state.books;
        const {pageSize, currentPage, books: allBooks} = this.state;
        if(length === 0) return "There are no movies in the DB";
        const books = paginate(allBooks, currentPage, pageSize)
        return ( 
            <div className="container mt-3 row">
                <div className="col-2">
                <ListGroup 
                genres={this.state.genres}
                onGenreSelect={this.handleGenreSelect}
                selectedGenre={this.state.selectedGenre}
               
                />
                </div>
                <div className="col">
                <div className=" ">
               
                <p>Showing {length} books </p>
            <table className="table table-hover">
                <thead>
                   <tr>
                       <th>Title</th>
                       <th>Genre</th>
                       <th>Disponibilité</th>
                       <th></th>
                       <th></th>
                   </tr>
                </thead>
    
                <tbody>
                  {books.map(book=>(
                      <tr key={book.id}>                    
                        <td> {book.title} </td>
                        <td> {book.genre} </td>
                        <td> {book.disponible ? <span className="badge bg-info">Dsipo</span> : <span className="badge bg-warning btn-sm">Non Dispo</span>} </td>
                        <td> <Like 
                        liked={book.liked}
                        onClick={()=>this.handleLike(book)} 
                         /> </td>
                        <td> <button onClick={()=>this.handleDelete(book)} className="btn btn-danger btn-sm">Delete</button> </td>
                      </tr>
                  ))}
                </tbody>
            </table>
            <Pagination 
            pageSize={pageSize} 
            booksCount={this.state.books.length} 
            currentPage={currentPage}
            
            onPageChange={this.handlePageChange}/>
            </div>
           
                </div>
            </div>
            
         );
    }
}
 
export default BookList;
