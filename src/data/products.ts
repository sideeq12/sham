import shawarmaClose from '../images/An_ultra-realistic_creamy_chicken_shawarma_202605031628.jpeg'
import beefWrap from '../images/A_realistic_street-style_creamy_chicken_202605031658.jpeg'
import bowlTop from '../images/A_top-down_ultra-realistic_shot_of_202605031652.jpeg'
import { gingerDrink1, gingerDrink2, gingerDrink3, gingerDrink4 } from '../images'

export interface Product {
  id: string
  name: string
  price: number
  desc: string
  img: string
  category: 'shawarma' | 'drink'
  emoji: string
}

export const products: Product[] = [
  {
    id: 'chicken-shawarma',
    name: 'Chicken Shawarma',
    price: 13,
    desc: 'Sautéed grilled chicken with sausage, fresh salad & special sauce.',
    img: shawarmaClose,
    category: 'shawarma',
    emoji: '🫔',
  },
  {
    id: 'beef-shawarma',
    name: 'Beef Shawarma',
    price: 15,
    desc: 'Sautéed beef with special sauce, slow-marinated for deep, rich flavor.',
    img: beefWrap,
    category: 'shawarma',
    emoji: '🥩',
  },
  {
    id: 'mixed-combo',
    name: 'Mixed Combo',
    price: 18,
    desc: 'The best of both worlds — chicken & beef together with all the fixings.',
    img: bowlTop,
    category: 'shawarma',
    emoji: '🍱',
  },
  {
    id: 'mini-bottle',
    name: '4oz Mini Bottle',
    price: 4,
    desc: 'Ginger drink taster with a sharp palate, focused on flavour & spice balance.',
    img: gingerDrink1,
    category: 'drink',
    emoji: '🧴',
  },
  {
    id: 'mini-magic',
    name: 'Mini Magic – 12oz',
    price: 6,
    desc: 'On-the-go boost of ginger goodness; convenient, refreshing, and travel-ready.',
    img: gingerDrink2,
    category: 'drink',
    emoji: '🥤',
  },
  {
    id: 'pouch-it',
    name: 'Pouch It – 250ml',
    price: 8,
    desc: 'A small pouch packed with big ginger flavor in every single sip.',
    img: gingerDrink3,
    category: 'drink',
    emoji: '🧃',
  },
  {
    id: 'more-ginger',
    name: 'More Ginger More Glow – 500ml',
    price: 10,
    desc: 'On-the-go boost of ginger goodness; convenient, refreshing, and travel-ready.',
    img: gingerDrink4,
    category: 'drink',
    emoji: '🍶',
  },
  {
    id: 'bigger-sip',
    name: 'Bigger Sip, Better Kick – 1.3 Gal',
    price: 25,
    desc: 'Full ginger power; bold ginger blast in a large pouch with no holding back.',
    img: gingerDrink1,
    category: 'drink',
    emoji: '🫗',
  },
]

export const addons = [
  { id: 'extra-spicy' as const, label: 'Extra Spicy', emoji: '🌶️' },
  { id: 'extra-cheese' as const, label: 'Extra Cheese', emoji: '🧀' },
  { id: 'extra-onions' as const, label: 'Extra Onions', emoji: '🧅' },
]

export const PHONE = '(469) 264-9208'
export const PHONE_RAW = '14692649208'
export const ADDRESS = 'Balch Springs, TX'
export const EMAIL = 'hello@blicious.com'
