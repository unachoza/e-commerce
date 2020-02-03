import React from 'react';
import { connect } from 'react-redux';

import {  selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
  console.log(collection)
  return (
  
    <div className="collection-page">
      <h2>colleciton Plage</h2>
    </div>
  )
}
const mapStateToProps = (state, ownProps) => ({
  collections: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)