import React, { Component } from 'react';
import SHOP_DATA from '../../redux/shop/shop.data';
import CollectionsPreview from '../../Components/collections-preview/collections-preview.component';

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (<div className="shop-page">
      {collections.map(({id, ...otherCollectionProps} )=> (
        <CollectionsPreview key={id} {...otherCollectionProps}/>
      ))}
    </div>);
  }
}

export default ShopPage;
