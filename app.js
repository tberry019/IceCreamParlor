

const vessels = [{
  name: 'Waffle Cone', image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg', price: 2
},
{
  name: 'Waffle Bowl', image: 'http://images.wbmason.com/350/L_JOY66050.jpg', price: 4


}]





const toppings = [{
  id: '5',
  name: 'Sprinkes',
  price: 1.00,
  imgURL: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg'
},
{
  id: '6',
  name: 'Chocolate Chips',
  price: 2.00,
  imgURL: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360'
}]


const iceCream = [{
  id: '1',
  name: 'Cookie Dough',
  price: 1.50,
  imgURL: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg'
},
{
  id: '2',
  name: 'Vanilla',
  price: 1.25,
  imgURL: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg'
},
{
  id: '3',
  name: 'Strawberry',
  price: 2.50,
  imgURL: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg'
},
{
  id: '4',
  name: 'Chocolate',
  price: 2.50,
  imgURL: 'https://www.realfoodwithjessica.com/wp-content/uploads/2018/05/PaleoDeathByChocolateIceCream-300x300.jpg'

}]

const cart = [



]

function drawiceCream() {
  let template = ''
  iceCream.forEach(iceCream => {
    template += `
    <div class="col-6 p-3 product user-select-none" oncontextmenu="disableContextClick()">
      <div class="bg-white shadow rounded" onclick="addToCart(${iceCream.id})">
        <img class="product-img rounded-top"
          src="${iceCream.imgURL}"
          alt="${iceCream.name}">
        <div class="d-flex justify-content-between p-3">
          <p><b>${iceCream.name}</b></p>
          <p>$${iceCream.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
    `
  })
  document.getElementById('iceCreamMenu').innerHTML = template
}

function drawToppings() {
  let template = ''
  toppings.forEach(toppings => {
    template += `
    <div class="col-6 p-3 product user-select-none" oncontextmenu="disableContextClick()">
      <div class="bg-white shadow rounded">
        <img class="product-img rounded-top"
          src="${toppings.imgURL}"
          alt="${toppings.name}">
        <div class="d-flex justify-content-between p-3">
          <p><b>${toppings.name}</b></p>
          <p>$${toppings.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
    `
  })
  document.getElementById('toppingsMenu').innerHTML = template
}

function drawCart() {
  let template = ''
  let total = 0
  cart.forEach((iceCream, i) => {
    total += iceCream.price
    template += `
    <div class="d-flex justify-content-between border-bottom my-1 user-select-none">
      <p>${iceCream.name}</p>
      <p>$${iceCream.price.toFixed(2)}</p>
    </div>
    `
  })

  document.getElementById('cart').innerHTML = template

  document.getElementById('total').innerHTML = total.toFixed(2)
}

function addToCart(id) {

  const screams = iceCream.find(icy => icy.id == id)
  cart.push(screams)

}








drawiceCream()
drawToppings()
