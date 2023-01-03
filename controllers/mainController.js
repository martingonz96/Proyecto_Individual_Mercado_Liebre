


let products = [
    
    {
    id: 1,
    descripcion:'Cafetera Moulinex',
    precio:6770,
    descuento:40,
    imagen: "images/img-cafetera-moulinex.jpg"
    },

    {
        id: 2,
        descripcion:'MacBook Pro 2019',
        precio:230000,
        descuento:20,
        imagen: "images/img-macbook-pro-2019.jpg"
    },
        
    {
        id: 3,
        descripcion:'Samsung Galaxy S10',
        precio:70500,
        descuento:10,
        imagen: "images/img-samsung-galaxy-s10.jpg"
    },

    {
        id: 4,
        descripcion:'SmartTv Samsung 43"',
        precio:23200,
        descuento:5,
        imagen: "images/img-tv-samsung-smart.jpg"
    }

]

module.exports = {
    index: (req, res) => {
        res.render('home', {products: products})
    },

    login: (req, res) => {
        res.render('login')
    },

    register: (req, res) => {
        res.render('register')
    }
}