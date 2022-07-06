const { randomBytes } = require('crypto')

function getId() {
  const bytes = randomBytes(16)
  const id = bytes.toString

  console.log(bytes, id)
  return id
}

type Rating = 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5

class Product {
  title: string;
  description: string;
  categories: string[];
  rating?: Rating;
  id: string;

  constructor(title: string, description: string, categories: string[], rating?: Rating, id?: string) {
    this.title = title
    this.description = description
    this.rating = rating!
    this.categories = categories
    this.id = id ? id : getId()
  }

}

export default Product