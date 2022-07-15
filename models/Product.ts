const { randomBytes } = require('crypto')

export type Rating = "No" | 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5
export type ProductId = string

function getId(): ProductId {
  const bytes = randomBytes(12)
  const id = bytes.toString('hex')

  return id
}

export interface ProductVisible {
  title: string,
  description: string,
  price: number,
  rating: Rating
}

export interface ProductHidden {
  categories: string[],
}

class Product {
  visible: ProductVisible
  hidden: ProductHidden
  id: ProductId

  constructor(
    visible: ProductVisible,
    hidden: ProductHidden
  ) {
    this.id = getId()

    this.visible = visible
    this.hidden = hidden
  }
}

export default Product