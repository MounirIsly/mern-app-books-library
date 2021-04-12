import React, {Component} from 'react';
import BookList from './Components/BookList';
import Navbar from './Components/Navbar';

class App extends Component {
    state = { 
     }
   
    render() { 
        return ( 
            <div>
            <Navbar />
            <BookList />
        </div>
         );
    }
}
 
export default App;