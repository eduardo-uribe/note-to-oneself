import React from 'react';
import ListItem from './ListItem.jsx';

function List({ items, deleteItem }) {
  let list = items.map(function (item) {
    return <ListItem item={item} deleteItem={deleteItem} key={item.id} />;
  });

  return <ul>{list}</ul>;
}

export default List;
