import React from 'react';
import ListItem from './ListItem';

function List({ items }) {
  let list = items.map(function (item) {
    return <ListItem item={item} />;
  });

  return <ol>{list}</ol>;
}

export default List;
