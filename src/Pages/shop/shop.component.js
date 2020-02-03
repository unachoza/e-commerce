import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CollectionsPreview from '../../Components/collections-preview/collections-preview.component';
import {selectCollections} from '../../redux/shop/shop.selectors'

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionsPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})
export default connect(mapStateToProps)(ShopPage);
