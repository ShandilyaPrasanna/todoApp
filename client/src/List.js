import React from 'react';

const List = props => (
  <ul>
    {
      props.items.map((item, index) => 
      <li key={item.id}>{item.text}<button onClick={()=>{props.deleteTODO(item.id)}}>DELETE</button></li>
      )
    }
  </ul>
);

export default List;