import Product, { ProductVisible, ProductHidden } from './Product'

type ScreenSize = {
  width: string,
  height: string 
};

type PhoneCamera = {
  front: string,
  main: string 
}

export interface PhoneProps {
  size: ScreenSize;
  model: string;
  camera: PhoneCamera;
}

const categories = ['phone']

class Phone extends Product {
  props: PhoneProps
  constructor(visible: ProductVisible, hidden: ProductHidden, props: PhoneProps) {
    hidden.categories.push(...categories)
    super(visible, hidden)
    this.props = props
  }
}

export default Phone