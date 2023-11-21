import React from 'react';
import ListItem from './ListItem.jsx';

function List({ items }) {
  let list = items.map(function (item, index) {
    return <ListItem item={item} key={index} />;
  });

  return <ol>{list}</ol>;
}

export default List;
