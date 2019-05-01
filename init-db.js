const got = require('got');

const http = got.extend({
  baseUrl: 'http://localhost:3000'
});

(async () => {
  const products = require('../products.json');
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
})();
