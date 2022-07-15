import Product, { Rating, ProductId } from './Product'

type ScreenSize = {
  width: number,
  height: number
};

type PhoneCamera = {
  front: number,
  main: number
}


class Phone extends Product {
  size: ScreenSize;
  model: string;
  camera: PhoneCamera;

  constructor(title: string, description: string, price: number, categories: string[], size: ScreenSize, model: string, camera: PhoneCamera, id?: ProductId, rating?: Rating) {
    super(title, description, price, categories, id, rating)
    this.size = size
    this.model = model
    this.camera = camera
  }
}

export default Phone