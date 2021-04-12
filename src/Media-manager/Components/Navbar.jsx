import React from 'react';

const Navbar = ({bookLength}) => {
    return ( 
        <div className="navbar navbar-expand-lg navbar-dark bg-secondary">
            <div className="container-fluid">
            <i className="fas fa-book-reader p-2"><span className="m-2">Library</span></i>
           
           </div>
        </div>
     );
}
export default Navbar;