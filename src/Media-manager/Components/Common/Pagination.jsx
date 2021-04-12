import React from 'react';
import _ from 'lodash'
import PropTypes from 'prop-types'
const Pagination = (props) => {
    const {pageSize, booksCount, onPageChange, currentPage} = props;
    
    const pageCount = Math.ceil(booksCount / pageSize);
    if(pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);

    return ( 
        <nav className="Page navigation example">
            <ul className="pagination">
                {pages.map(page=>(
                <li key={page} className={page === currentPage ? "page-item active": "page-item"}>
                    <a className="page-link" onClick={()=>onPageChange(page)}> {page} </a> 
                </li>

                ))}
            </ul>
        </nav>
        
        );
}
Pagination.propTypes = {
    pageSize: PropTypes.number.isRequired, 
    booksCount: PropTypes.number.isRequired, 
    onPageChange: PropTypes.func.isRequired, 
    currentPage: PropTypes.number.isRequired
}
 
export default Pagination;