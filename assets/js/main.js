const bar =document.getElementById('bar');
const close =document.getElementById('close');
const nav = document.getElementById('navbar');


if (bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    }
    )
}
if (close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
    }
    )
}
const products_two=[
  {
    id:9,
    name: 'Rayban',
    price: 3899,
    image: 'assets/img/lentos15.png',
    descripcion: 'Rayban Sun'
  },
  {
    id:10,
    name: 'Rayban',
    price: 2999,
    image: 'assets/img/lentes16.png',
    descripcion: 'Rayban Flat Sun'
  },
  {
    id:11,
    name: 'Rayban',
    price: 2200,
    image: 'assets/img/lentes17.png',
    descripcion: 'Rayban Oftalmicos'
  },
  {
    id:12,
    name: 'Hawkers',
    price: 1829,
    image: 'assets/img/lento14.jpg',
    descripcion: 'Hawkers Oftalmicos Flat'
  }
]

const products = [
  {
    id: 1,
    name: 'Rayban',
    price: 2200,
    image: 'assets/img/lento14.jpg',
    descripcion: 'Rayban Round Fleck'
    
  },
  {
    id: 2,
    name: 'Merrys',
    price: 1859,
    image: 'assets/img/lentes2.jpg',
    descripcion: 'Merrys Round Fleck'
    
  },
  {
    id: 3,
    name: 'CCspace',
    price: 1549,
    image: 'assets/img/lentes3.jpg',
    descripcion: 'CCspace Oftalmicos Fleck'
   
  },
  {
    id: 4,
    name: 'Didi Biu',
    price: 1829,
    image: 'assets/img/lentes4.jpg',
    descripcion: 'DidiBiu Oftalmicos Round'
   
  },
  {
    id: 5,
    name: 'Rayban',
    price: 1949,
    image: 'assets/img/lentes5.jpg',
    descripcion: 'Rayban Round'
   
  },
  {
    id: 6,
    name: 'Hawkers',
    price: 1499,
    image: 'assets/img/lentes6.jpg',
    descripcion: 'Hawkers Sun Flat'
   
  },
  {
    id: 7,
    name: 'Hawkers',
    price: 1299,
    image: 'assets/img/lentes10.png',
    descripcion: 'Hawkers Sun Round Mica Azul'
   
  },
  {
    id: 8,
    name: 'Zegache',
    price: 899,
    image: 'assets/img/lentes.png',
    descripcion: 'Zegache Oficina'
   
  }
]

const wrapperProducts = document.getElementById('productos')
const wrapperProducts_2 = document.getElementById('productos2')

let productsHTML = ''
let productsHTML_2 = ''

// Bucle
// for (let i = 0; i < products.length; i++) {
//   console.log('bucle: ',products[i])
// }

// Iteradores for of
for (let product of products) {
  productsHTML += `
  <div class="pro">
                <img src="${product.image}" alt="" >
                <div class="des">
                    <span>${product.name}</span>
                    <h5>${product.descripcion}</h5>
                    <h4>${product.price}</h4>
                </div>
                <button class="normal-tienda" data-id="${product.id}">
          <i class='bx bx-shopping-bag'></i>
          <span class="wrapper__product-btn-text">Add to Cart</span>
      </div>
    
  `
}
for (let product of products_two) {
  productsHTML_2 += `
  <div class="pro">
                <img src="${product.image}" alt="" >
                <div class="des">
                    <span>${product.name}</span>
                    <h5>${product.descripcion}</h5>
                    <h4>${product.price}</h4>
                </div>
                <button class="normal-tienda" data-id="${product.id}">
          <i class='bx bx-shopping-bag'></i>
          <span class="wrapper__product-btn-text">Add to Cart</span>
      </div>
    
  `
}

wrapperProducts.insertAdjacentHTML('beforeend', productsHTML)
wrapperProducts_2.insertAdjacentHTML('beforeend',productsHTML_2)

let cart = []

function find(id) {
  for (let product of products) {
    if (product.id === id) {
      return product
    }
  for(let product of products_two){
    if(product.id === id){
      return product
    }
  }
  }
}

function addToCart(id) {
  const product = find(id)
  cart.push(product)
}

wrapperProducts.addEventListener('click', function (e) {
  if (e.target.closest('.normal-tienda')) {
    const id = e.target.closest('.normal-tienda').dataset.id
    addToCart(+id)
    renderCart()
  }
})
wrapperProducts_2.addEventListener('click', function (e) {
  if (e.target.closest('.normal-tienda')) {
    const id = e.target.closest('.normal-tienda').dataset.id
    addToCart(+id)
    renderCart()
  }
})

const wrapperCart = document.getElementById('tienda')

function renderCart() {
  let cartHTML = ''

  for (let product of cart) {
    cartHTML += `
    <div class="cont">
                <img src="${product.image}" alt="" >
                <div class="des">
                    <span>${product.name}</span>
                    <h5>${product.descripcion}</h5>
                    <h4>${product.price}</h4>
                </div>
                <button class="cart__item-btn-item" data-id="${product.id}">
                <i class='bx bx-x'></i>
                </button>
    </div>
    `
  }
  
  const cartTotal = document.getElementById('cart-total')

  wrapperCart.innerHTML = cartHTML.length > 0 ? cartHTML : '<p>No hay productos</p>'
  cartTotal.innerHTML = `$ ${sumTotal()}`
}

renderCart()

function sumTotal() {
  let sum = 0
  for (let product of cart) {
    sum += product.price
  }
  return sum/2
}

function removeFromCart (id) {
  let newArr = []
  for (let product of cart) {
    if(product.id !== id) {
      newArr.push(product)
    }
  }
  cart = newArr
}

wrapperCart.addEventListener('click', function (e) {
  if (e.target.closest('.cart__item-btn-item')) {
    const id = e.target.closest('.cart__item-btn-item').dataset.id
    removeFromCart(+id)
    renderCart()
  }
})

const checkout = document.getElementById('pagar')

checkout.addEventListener('click', function (e) {
  if(e.target.closest('.normal-tienda')) {
    alert('Gracias por tu compra')
    cart = []
    renderCart()
  }
})