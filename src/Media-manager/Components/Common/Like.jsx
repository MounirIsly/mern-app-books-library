import React from 'react';

const Like = (props) => {
  let classes;
  classes = props.liked ? "fas fa-heart" : "far fa-heart"
    return ( 
      <div>
       
       <i onClick={props.onClick} className={classes} style={{cursor: 'pointer'}}></i>
       </div>
     );
}
 
export default Like;