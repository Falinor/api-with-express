const got = require('got');

const http = got.extend({
  baseUrl: 'http://localhost:3000'
});

async function seedProducts() {
  const products = require('./products.json');
  try {
    const promises = products.map(product =>
      http.post('products', {
        body: product,
        json: true
      })
    );
    await Promise.all(promises);
  } catch (err) {
    console.log(err.response);
    throw err;
  }
}

async function seedOrders() {
  const orders = require('./orders.json');
  try {
    const promises = orders.map(order =>
      http.post('orders', {
        body: order,
        json: true
      })
    );
    await Promise.all(promises);
  } catch (err) {
    console.log(err.response);
    throw err;
  }

}

(async () => {
  await seedProducts();
  await seedOrders();
})();
