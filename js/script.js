// Variables para manejar el carrito y el total
const carrito = [];
let total = 0;

// Función para agregar un producto al carrito
function agregarAlCarrito(producto, precio) {
    carrito.push({ producto, precio });
    total += precio;
    actualizarCarrito();
}

// Función para actualizar la vista del carrito
function actualizarCarrito() {
    const listaCarrito = document.querySelector('.lista-carrito');
    const totalCarrito = document.querySelector('.total');

    // Limpiar la lista del carrito
    listaCarrito.innerHTML = '';

    // Recorrer el carrito y agregar cada producto a la lista
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.producto} - $${item.precio}`;
        listaCarrito.appendChild(li);
    });

    // Actualizar el total
    totalCarrito.textContent = `$${total.toFixed(2)}`;
}

// Event listener para los botones de agregar producto
const botonesAgregar = document.querySelectorAll('.card__footer button');
botonesAgregar.forEach((boton, index) => {
    boton.addEventListener('click', () => {
        const producto = document.querySelectorAll('.card__title')[index].textContent;
        const precio = parseFloat(document.querySelectorAll('.card__price')[index].textContent.replace('$', ''));
        agregarAlCarrito(producto, precio);
    });
});