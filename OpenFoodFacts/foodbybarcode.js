// API URL https://openfoodfacts.github.io/openfoodfacts-server/api/
const url = 'https://world.openfoodfacts.net/api/v2/product/{4003586105134}'
// https://world.openfoodfacts.net/api/v2/product/3017624010701?fields=product_name,nutriscore_data

// Fetch data from Open Food Facts API
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the JSON response
  })
  .then(data => {
    console.log('Products:', data);
    // Process and display the products
    if (data.products) {
      data.products.forEach(product => {
        console.log(`Code: ${product.code}`);
        console.log(`Product Name: ${product.product_name || 'N/A'}`);
      });
    } else {
      console.log('No products found');
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
