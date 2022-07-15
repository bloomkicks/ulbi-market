const { randomBytes } = require('crypto')

export type Rating = 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5
export type ProductId = string

function getId(): ProductId {
  const bytes = randomBytes(16)
  const id = bytes.toString()

  return id
}

class Product {
  title: string;
  description: string;
  price: number
  categories: string[];
  id: ProductId;
  rating?: Rating;

  constructor(
    title: string,
    description: string,
    price: number,
    categories: string[],
    id?: ProductId,
    rating?: Rating,
  ) {
    this.title = title
    this.description = description
    this.price = price
    this.categories = categories
    this.rating = rating!
    this.id = id ? id : getId()
  }
}

export default Product