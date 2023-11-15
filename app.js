const ProductManager = require('./ProductManager');

const productManager = new ProductManager('products.json');

// Agregar un nuevo producto
const product1 = {
  title: 'Pasacables',
  description: 'Pasacables con alma de acero de 5m',
  price: 3500,
  thumbnail: 'path/to/product1.jpg',
  code: 'P1',
  stock: 15,
};

const product2 = {
  title: 'Pelacables',
  description: 'Pelacables hasta 6mm',
  price: 8000,
  thumbnail: 'path/to/product2.jpg',
  code: 'P2',
  stock: 20,
};

// Agregar productos
const addedProduct1 = productManager.addProduct(product1);
const addedProduct2 = productManager.addProduct(product2);

console.log('Product 1 added:', addedProduct1);
console.log('Product 2 added:', addedProduct2);

// Obtener todos los productos después de agregar más productos
const allProductsAfterAddition = productManager.getProducts();
console.log('All products after addition:', allProductsAfterAddition);

// Eliminar un producto por su ID
const productIdToDelete = 2; // Reemplaza con el ID del producto que deseas eliminar
productManager.deleteProduct(productIdToDelete);
console.log(`Product with ID ${productIdToDelete} deleted.`);

// Actualizar un producto por su ID
const productIdToUpdate = 1; // Reemplaza con el ID del producto que deseas actualizar
const updatedFields = {
  stock: 20,
  // Agrega otros campos que deseas actualizar
};

const updatedProduct = productManager.updateProduct(productIdToUpdate, updatedFields);
if (updatedProduct) {
  console.log('Product updated:', updatedProduct);
} else {
  console.log(`Product with ID ${productIdToUpdate} not found.`);
}