import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collections-preview.styles.scss'

const CollectionsPreview = ({ title, items }) => {
  console.log('on collection preview', items, title)
  
  return (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, i) => i < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
)}

export default CollectionsPreview;
