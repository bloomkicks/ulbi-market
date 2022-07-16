import PhoneProps, { phoneCategories } from './phone'
const { randomBytes } = require('crypto')

export type Rating = "No" | 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5
export type ProductId = string

function getId(): ProductId {
  const bytes = randomBytes(12)
  const id = bytes.toString('hex')

  return id
}

export type ProductVisible = {
  title: string,
  description: string,
  price: number,
  rating: Rating
}

export type ProductHidden = {
  categories: string[],
}

export type ProductType = 'phone' | 'notebook'

export type ProductProps = PhoneProps

class Product {
  type: ProductType
  visible: ProductVisible
  hidden: ProductHidden
  props: ProductProps
  id: ProductId

  constructor(
    type: ProductType,
    visible: ProductVisible,
    hidden: ProductHidden,
    props: ProductProps,
    id?: ProductId,
  ) {
    this.id = id ? id : getId()

    switch (type) {
      case 'phone':
        hidden.categories.push(...phoneCategories)
        break
    }

    this.type = type
    this.visible = visible
    this.hidden = hidden
    this.props = props
  }
}

export default Product