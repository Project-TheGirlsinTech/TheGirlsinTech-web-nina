const fulfillmentData = {
    fulfillments: [
      {
        _id: 1,
        customerName: "Joe",
        customerEmail: "Joe@email.com",
        product: {
          productName: "Shirt",
          quantity: 1,
        },
        shippingStatus: "Shipped",
      },
      {
        _id: 2,
        customerName: "Jessica",
        customerEmail: "Jessica@email.com",
        product: {
          productName: "Pants",
          quantity: 2,
        },
        shippingStatus: "Unshipped",
      },
      {
        _id: 3,
        customerName: "Veronica",
        customerEmail: "Veronicae@email.com",
        product: {
          productName: "Shirt",
          quantity: 1,
        },
        shippingStatus: "Shipped",
      },
    ],
  };
  
  export default fulfillmentData;