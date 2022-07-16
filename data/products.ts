import Product from '../models/Product'

const skyPhone = new Product(
  'phone',
  {
    title: "SkyPhone 3000",
    description: "The best choice for gamers brought to us by SkyNet",
    price: 103399,
    rating: 4
  }, {
  categories: ['budget', 'SkyNet', 'gamer', 'no bounds'],
},
  {
    camera: {
      main: "8.6 mp",
      front: "4.9 mp"
    },
    size: {
      width: '5.8 cm',
      height: '14.7 cm'
    },
    model: 'No Bounds'
  },
  "bbb0aff740faec558fa968aa"
)

const samsos = new Product(
  'phone',
  {
    title: "Samsos A4",
    description: "A popular choice known for good design",
    price: 210199,
    rating: 4.5
  },
  {
    categories: ['design', 'Samsos', 'popular', 'no bounds', 'features'],
  },
  {
    camera: {
      main: "10.4 mp",
      front: "9.1 mp"
    },
    size: {
      width: '6.1 cm',
      height: '16.2 cm'
    },
    model: 'No Bounds'
  },
  "09d488d903c5376be067bf92"
)

const products: Product[] = [
  skyPhone,
  samsos
]

export default products