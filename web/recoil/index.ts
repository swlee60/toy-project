import { atom } from 'recoil'

export interface Product {
  name: string
  price: number
  description: string
  phone: string
  email: string
}

export interface Category {
  name: string
  products: Product[]
}

export const categoriesAtom = atom({
  key: 'categoriesState',
  default: [
    {
      name: 'category1',
      id: 1,
      displayOrder: 3,
      products: [
        {
          id: 1,
          name: 'product1',
          price: 1000,
          description: 'description1',
          phone: '010-0000-0000',
          email: 'abc@def.com',
        },
        {
          id: 2,
          name: 'product2',
          price: 5000,
          description: 'description5',
          phone: '010-0000-0000',
          email: 'abc@def.com',
        },
      ],
    },
    {
      name: 'category2',
      id: 2,
      displayOrder: 1,
      products: [
        {
          id: 3,
          name: 'product2',
          price: 1000,
          description: 'description2',
          phone: '010-0000-0000',
          email: 'abc@def.com',
        },
      ],
    },
    {
      name: 'category3',
      id: 3,
      displayOrder: 2,
      products: [],
    },
  ],
})
