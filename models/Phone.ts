type ScreenSize = {
  width: string,
  height: string
};

type PhoneCamera = {
  front: string,
  main: string
}

export default interface PhoneProps {
  size: ScreenSize;
  model: string;
  camera: PhoneCamera;
}

export const phoneCategories = ['phone']