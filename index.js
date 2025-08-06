let products = [
    {
        id: 1,
        title: "Fjallraven Backpack",
        price: 109.95,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
        rating: 3.9
    },
    {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts",
        price: 22.3,
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
        rating: 4.1
    },
    {
        id: 3,
        title: "Mens Cotton Jacket",
        price: 55.99,
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
        rating: 4.7
    },
    {
        id: 4,
        title: "Mens Casual Slim Fit",
        price: 15.99,
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
        rating: 2.1
    },
    {
        id: 5,
        title: "John Hardy Women's Legends Naga",
        price: 695,
        image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
        rating: 4.9
    },
    {
        id: 6,
        title: "Solid Gold Petite Micropave ",
        price: 168,
        image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
        rating: 3.7
    },
    {
        id: 7,
        title: "White Gold Plated Princess",
        price: 9.99,
        image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
        rating: 4.6
    },
    {
        id: 8,
        title: "Pierced Owl Rose Gold Plated Stainless Steel",
        price: 10.99,
        image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
        rating: 4.3
    },
    {
        id: 9,
        title: "WD 2TB Elements Portable External Hard Drive",
        price: 64,
        image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
        rating: 4.5
    },
    {
        id: 10,
        title: "SanDisk SSD PLUS 1TB Internal SSD",
        price: 109,
        image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
        rating: 4.8
    },
    {
        id: 11,
        title: "Silicon Power 256GB SSD",
        price: 109,
        image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
        rating: 3.9
    },
    {
        id: 12,
        title: "WD 4TB Gaming Drive",
        price: 114,
        image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png",
        rating: 4.1
    },
    {
        id: 13,
        title: "Acer SB220Q bi 21.5 inches Full HD",
        price: 599,
        image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
        rating: 4.9
    },
    {
        id: 14,
        title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor",
        price: 999.99,
        image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
        rating: 4.7
    },
    {
        id: 15,
        title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket",
        price: 56.99,
        image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
        rating: 3.6
    },
    {
        id: 16,
        title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        price: 29.95,
        image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png",
        rating: 4.2
    },
    {
        id: 17,
        title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        price: 39.99,
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/raincoat/0/2/e/free-rain-poncho-trekking-hiking-rocksport-original-imahbpp9geewg3z8.jpeg?q=70",
        rating: 4.0
    },
    {
        id: 18,
        title: "MBJ Women's Solid Short Sleeve Boat Neck",
        price: 9.85,
        image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png",
        rating: 4.5
    },
    {
        id: 19,
        title: "Opna Women's Short Sleeve Moisture",
        price: 7.95,
        image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
        rating: 4.1
    },
    {
        id: 20,
        title: "DANVOUY Womens T Shirt Casual Cotton",
        price: 12.99,
        image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
        rating: 3.9
    },
];

let main = document.getElementById("main");

products.map(product => {
    let div = document.createElement("div");

    let title = document.createElement("h2");
    title.innerText = product.title;

    let img = document.createElement("img");
    img.src = product.image;

    let price = document.createElement("p");
    price.innerText = "Price: $" + product.price;

    let rating = document.createElement("p");
    rating.innerHTML = "Rating: " + "⭐".repeat(Math.round(product.rating));

    div.append(title);
    div.append(img);
    div.append(price);
    div.append(rating);

    main.append(div);
});
