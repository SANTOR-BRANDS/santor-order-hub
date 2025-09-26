export type Restaurant = 'restory' | 'nirvana';

export interface Dish {
  id: string;
  name: string;
  price: number;
  category: string;
  restaurant: Restaurant;
  description?: string;
  isSpecial?: boolean;
  spicyRequired?: boolean;
  image?: string;
  // Premium beef switching logic
  hasPremiumBeefSwitch?: boolean;
  normalBeefPrice?: number;
  // Combo dishes
  isCombo?: boolean;
  // Dish variants (for consolidated options like pork + add-ons)
  variants?: DishVariant[];
}

export interface DishVariant {
  id: string;
  name: string;
  price: number;
  priceModifier: number; // +10, +20, etc.
}

export interface AddOn {
  id: string;
  name: string;
  price: number;
  category: 'meat' | 'egg' | 'sauce' | 'other' | 'thai-omelette' | 'creamy-omelette' | 'soft-omelette';
  // For premium beef logic
  isPremiumBeef?: boolean;
  isNormalBeef?: boolean;
}

export interface BasketItem {
  id: string;
  dish: Dish;
  addOns: AddOn[];
  spicyLevel?: number;
  sauce: string;
  needsCutlery: boolean;
  quantity: number;
  // Premium beef switching state
  isPremiumBeefSwitched?: boolean;
  // Selected variant for dishes with variants
  selectedVariant?: DishVariant;
  // Combo configuration for 2x dishes
  comboConfig?: {
    dish1: any;
    dish2: any;
  };
}

export interface SpicyLevel {
  level: number;
  label: string;
  emoji: string;
}

export const SPICY_LEVELS: SpicyLevel[] = [
  { level: 0, label: 'Not Spicy', emoji: '' },
  { level: 1, label: 'Little', emoji: '🌶️' },
  { level: 2, label: 'Medium (Signature)', emoji: '🌶️🌶️' },
  { level: 3, label: 'Spicy', emoji: '🌶️🌶️🌶️' },
  { level: 4, label: 'Extra Spicy', emoji: '🌶️🌶️🌶️🌶️' },
];

export const SAUCES = [
  { id: 'ketchup', name: 'Ketchup', price: 0 },
  { id: 'chilli-fish', name: 'Chilli Fish Sauce', price: 0 },
  { id: 'chilli', name: 'Chilli Sauce', price: 0 },
  { id: 'maggie', name: 'Maggie Sauce', price: 0 },
  { id: 'no-sauce', name: '🚫 NO SAUCE', price: 0 },
  { id: 'sweet-chilli', name: 'Sweet Chilli Fish Sauce', price: 10 },
  { id: 'isaan', name: '🔴 Isaan Dipping Sauce', price: 15 },
  { id: 'seafood', name: '🟢 Seafood Sauce', price: 20 },
];