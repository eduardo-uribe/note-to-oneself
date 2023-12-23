import React from 'react';

function ListItem({ item, deleteItem }) {
  return (
    <li>
      <p contentEditable={'true'} suppressContentEditableWarning='true'>
        {item.note}
      </p>
      <button
        onClick={() => {
          deleteItem(item.id);
        }}
        type='button'
      >
        remove
      </button>
    </li>
  );
}

export default ListItem;
