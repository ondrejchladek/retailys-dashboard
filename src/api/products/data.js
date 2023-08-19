import { subDays, subHours } from 'date-fns';

const now = new Date();

export const products = [
  {
    id: '5ece2c077e39da27658aa8a9',
    attributes: ['Healthcare'],
    category: 'healthcare',
    createdAt: subDays(now, 1).getTime(),
    currency: '$',
    image: '/assets/products/product-1.png',
    inStock: true,
    isAvailable: true,
    isShippable: false,
    name: 'Product 1',
    price: 23.99,
    quantity: 85,
    sku: '401_1BBXBK',
    status: 'published',
    updatedAt: subHours(now, 6).getTime(),
    variants: 2
  },
  {
    id: '5ece2c0d16f70bff2cf86cd8',
    attributes: ['Makeup'],
    category: 'makeup',
    createdAt: subDays(now, 3).getTime(),
    currency: '$',
    image: '/assets/products/product-2.png',
    inStock: false,
    isAvailable: false,
    isShippable: true,
    name: 'Product 2',
    price: 95.00,
    quantity: 0,
    sku: '978_UBFGJC',
    status: 'published',
    updatedAt: subDays(subHours(now, 8), 2).getTime(),
    variants: 1
  },
  {
    id: '5ece2c123fad30cbbff8d060',
    attributes: ['Variety of styles'],
    category: 'jewelry',
    createdAt: subDays(now, 6).getTime(),
    currency: '$',
    image: null,
    inStock: true,
    isAvailable: true,
    isShippable: false,
    name: 'Product 3',
    price: 155.00,
    quantity: 48,
    sku: '211_QFEXJO',
    status: 'draft',
    updatedAt: subDays(subHours(now, 2), 1).getTime(),
    variants: 5
  },
  {
    id: '5ece2c1be7996d1549d94e34',
    attributes: ['Skincare'],
    category: 'skincare',
    createdAt: subDays(now, 12).getTime(),
    currency: '$',
    image: '/assets/products/product-4.png',
    inStock: true,
    isAvailable: false,
    isShippable: true,
    name: 'Product 4',
    price: 17.99,
    quantity: 5,
    sku: '321_UWEAJT',
    status: 'published',
    updatedAt: subDays(subHours(now, 7), 1).getTime(),
    variants: 1
  },
  {
    id: 'b393ce1b09c1254c3a92c827',
    attributes: ['Skincare'],
    category: 'skincare',
    createdAt: subDays(now, 4).getTime(),
    currency: '$',
    image: '/assets/products/product-5.png',
    inStock: true,
    isAvailable: false,
    isShippable: true,
    name: 'Product 5',
    price: 65.99,
    quantity: 10,
    sku: '592_LDKDI',
    status: 'draft',
    updatedAt: subDays(subHours(now, 1), 1).getTime(),
    variants: 1
  },
  {
    id: 'a6ede15670da63f49f752c89',
    attributes: ['Makeup'],
    category: 'makeup',
    createdAt: subDays(now, 6).getTime(),
    currency: '$',
    image: '/assets/products/product-6.png',
    inStock: true,
    isAvailable: false,
    isShippable: true,
    name: 'Product 6',
    price: 76.99,
    quantity: 22,
    sku: '324_DKSEKD',
    status: 'draft',
    updatedAt: subDays(subHours(now, 3), 3).getTime(),
    variants: 1
  },
  {
    id: 'bcad5524fe3a2f8f8620ceda',
    attributes: ['Healthcare'],
    category: 'healthcare',
    createdAt: subDays(now, 7).getTime(),
    currency: '$',
    image: '/assets/products/product-7.png',
    inStock: true,
    isAvailable: false,
    isShippable: true,
    name: 'Product 7',
    price: 115.20,
    quantity: 15,
    sku: '598_DOKEII',
    status: 'published',
    updatedAt: subDays(subHours(now, 5), 6).getTime(),
    variants: 1
  }
];
