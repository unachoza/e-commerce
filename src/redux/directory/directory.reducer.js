const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1594757933/hats.png',
      id: 1,
      linkUrl: 'shop/hats',
    },
    {
      title: 'jackets',
      imageUrl: 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1594757978/jackets.png',
      id: 2,
      linkUrl: 'shop/jackets',
    },
    {
      title: 'sneakers',
      imageUrl: 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1594757461/sneakers.png',
      id: 3,
      linkUrl: 'shop/sneakers',
    },
    {
      title: 'womens',
      imageUrl: 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1594757892/womens.png',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens',
    },
    {
      title: 'mens',
      imageUrl: 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1594757851/men.png',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
