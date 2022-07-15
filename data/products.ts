import Product from '../models/Product'
import Phone from '../models/Phone'

const skyPhone = new Phone({
  title: "SkyPhone 3000",
  description: "The best choice for gamers brought to us by SkyNet",
  price: 103399,
  rating: 'No'
}, {
  categories: ['budget', 'SkyNet', 'gamer', 'no bounds'],
},
  {
    camera: {
      main: "8.6",
      front: "4.9"
    },
    size: {
      width: '5.8',
      height: '14.7'
    },
    model: 'No Bounds'
  }
)

const samsos = new Phone({
  title: "Samsos A4",
  description: "A popular choice known for good design",
  price: 210199,
  rating: 'No'
}, {
  categories: ['design', 'Samsos', 'popular', 'no bounds', 'features'],
},
  {
    camera: {
      main: "10.4",
      front: "9.1"
    },
    size: {
      width: '6.1',
      height: '16.2'
    },
    model: 'No Bounds'
  }
)

const products: Product[] = [
  skyPhone,
  samsos
]

export default products