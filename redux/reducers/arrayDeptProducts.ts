/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { DeptProduct } from '../../types';

const initialState: DeptProduct = {
  arrayOfDepartments: [
    {
      iconSrc: 'null',
      name: "Today's Deals",
      imgSrc: '/images/department_images/today_deals.png',
      categories: ['null'],
    },
    {
      iconSrc: '/images/department_icons/alcohol.svg',
      name: 'Alcohol',
      imgSrc: '/images/department_images/alcohol.png',
      categories: ['Sake & Soju', 'Beer', 'Wine'],
    },
    {
      iconSrc: '/images/department_icons/beverage.svg',
      name: 'Beverage',
      imgSrc: '/images/department_images/beverage.jpeg',
      categories: ['Soft Drink', 'Soy Milk', 'Water', 'Health Drink'],
    },
    {
      iconSrc: '/images/department_icons/bread_bakery.svg',
      name: 'Bread & Bakery',
      imgSrc: '/images/department_images/bread_bakery.jpeg',
      categories: [
        'Bread',
        'Tortilla & Tostada',
        'Peanut Butter & Jelly',
        'Dessert',
        'Baking',
      ],
    },
    {
      iconSrc: '/images/department_icons/canned_products.svg',
      name: 'Canned Products',
      imgSrc: '/images/department_images/canned_products.jpeg',
      categories: [
        'Coconut & Condensed Milk',
        'Fish & Meat',
        'Bean',
        'Pickled',
        'Vegetable',
        'Fruits',
        'Soup',
        'Sauce',
      ],
    },
    {
      iconSrc: '/images/department_icons/cooking_wine_oil_vinegar.svg',
      name: 'Cooking Wine & Oil & Vinegar',
      imgSrc: '/images/department_images/cooking_wine_oil_vinegar.jpg',
      categories: ['Oil', 'Vinegar', 'Cooking Wine', 'Cooking Syrup'],
    },
    {
      iconSrc: '/images/department_icons/dairy_eggs.svg',
      name: 'Dairy & Eggs',
      imgSrc: '/images/department_images/dairy_eggs.jpg',
      categories: [
        'Milk',
        'Egg',
        'Cheese',
        'Butter & Margarine',
        'Yogurt',
        'Sour Cream',
      ],
    },
    {
      iconSrc: '/images/department_icons/dried_vegetable.svg',
      name: 'Dried Vegetables',
      imgSrc: '/images/department_images/dried_vegetable.jpg',
      categories: ['Vegetable', 'Health Herbs', 'Fruits'],
    },
    {
      iconSrc: '/images/department_icons/frozen.svg',
      name: 'Frozen',
      imgSrc: '/images/department_images/frozen.jpeg',
      categories: [
        'Dumpling & Spring Roll',
        'Dumpling Wrapper',
        'Steamed Bun',
        'Ice Cream',
        'Mochi',
        'Natto',
        'Imitation Crab Meat',
        'Fish Cake',
        'Sausage',
        'Fish &  Meat Ball',
        'Noodle',
        'Instant',
        'Asian Vegetable & Fruits',
        'Frozen Drinks',
        'Indian',
        'European',
        'Hispanic',
        'Vegan',
        'Misc',
      ],
    },
    {
      iconSrc: '/images/department_icons/grain.svg',
      name: 'Grain',
      imgSrc: '/images/department_images/grain.jpg',
      categories: [
        'Rice & Grain',
        'Bulk Rice',
        'Cooked Rice',
        'Flour',
        'Bean',
        'Tapioca Pearl',
        'Misc',
      ],
    },
    {
      iconSrc: '/images/department_icons/housewares.svg',
      name: 'Housewares',
      imgSrc: '/images/department_images/housewares.jpeg',
      categories: [
        'Household Essentials',
        'Kitchen Appliances',
        'Cookware',
        'Tableware',
        'Utensils',
        'Food Storage',
      ],
    },
    {
      iconSrc: '/images/department_icons/meat_seafood.svg',
      name: 'Meat & Seafood',
      imgSrc: '/images/department_images/meat_seafood.png',
      categories: [
        'Beef',
        'Chicken',
        'Pork',
        'Turkey',
        'Goat & Lamb',
        'Meat Misc',
        'Frozen Seafood',
        'Dried Seafood',
        'Seafood Misc',
      ],
    },
    {
      iconSrc: '/images/department_icons/noodle.svg',
      name: 'Noodle',
      imgSrc: '/images/department_images/noodle.jpg',
      categories: ['Ramen', 'Ramen Cup', 'Dried Noodle', 'Rice Paper', 'Pasta'],
    },
    {
      iconSrc: '/images/department_icons/produce.svg',
      name: 'Produce',
      imgSrc: '/images/department_images/produce.png',
      categories: [
        'Fresh Vegetable',
        'Fresh Herbs',
        'Fresh Fruits',
        'Box Vegetable & Fruits',
        'Packaged Vegetable & Fruits',
        'Packaged Nuts & Candy',
      ],
    },
    {
      iconSrc: '/images/department_icons/refrigerated.svg',
      name: 'Refrigerated',
      imgSrc: '/images/department_images/refrigerated.jpeg',
      categories: [
        'Fresh noodle',
        'Kimchi & Side Dish',
        'Rice Cake',
        'Tofu',
        'Pickled',
        'Paste',
        'Instant Noodle',
        'Soup & Stew',
        'Sausage & Meats',
        'Misc',
        'Juice & Beverage',
      ],
    },
    {
      iconSrc: '/images/department_icons/sauce_paste.svg',
      name: 'Sauce & Paste',
      imgSrc: '/images/department_images/sauce_paste.jpg',
      categories: [
        'Soy Sauce',
        'Paste',
        'Fish Sauce',
        'Dipping Sauce',
        'Asian BBQ Sauce',
        'Hot Sauce',
        'Marinade Sauce',
        'Noodle Sauce',
        'Condiments',
        'Hot Pot Soup Base',
        'Sauce Misc',
      ],
    },
    {
      iconSrc: '/images/department_icons/seasoning_spices.svg',
      name: 'Seasoning & Spices',
      imgSrc: '/images/department_images/seasoning_spices.jpg',
      categories: [
        'Salt & Sugar',
        'Seasoning',
        'Spices',
        'Wasabi & Mustard',
        'Curry',
        'Soup Base',
        'Broth',
      ],
    },
    {
      iconSrc: '/images/department_icons/seaweed.svg',
      name: 'Seaweed',
      imgSrc: '/images/department_images/seaweed.jpg',
      categories: ['Seasoned Laver', 'Dried Seaweed', 'Kelp'],
    },
    {
      iconSrc: '/images/department_icons/snack_candy.svg',
      name: 'Snack & Candy',
      imgSrc: '/images/department_images/snack_candy.jpeg',
      categories: ['Chips', 'Cookies', 'Snack', 'Candy & Gum', 'Nuts'],
    },
    {
      iconSrc: '/images/department_icons/tea_coffee_breakfast.svg',
      name: 'Tea & Coffee & Breakfast',
      imgSrc: '/images/department_images/tea_coffee_breakfast.jpg',
      categories: ['Tea', 'Coffee & Mix', 'Honey', 'Cereal'],
    },
  ],
  arrayOfProducts: [
    {
      pic: 'url(/images/products/shinblack.jpg)',
      price: 5.99,
      productID: 101,
      title: 'Shin Black Ramen!',
      unit: '5 x 3.59 oz',
    },
    {
      pic: 'url(/images/products/shin.jpg)',
      price: 4.99,
      productID: 102,
      title: 'Shin Ramen!',
      unit: '5 x 3.59 oz',
    },
    {
      pic: 'url(/images/products/shinkimchi.jpg)',
      price: 3.99,
      productID: 103,
      title: 'Shin Kimchi Soup Ramen!',
      unit: '5 x 3.59 oz',
    },
    {
      pic: 'url(/images/products/sapporo.jpg)',
      price: 2.99,
      productID: 104,
      title: 'Sapporo Ramen!',
      unit: '5 x 3.59 oz',
    },
    {
      pic: 'url(/images/products/neoguri.jpg)',
      price: 6.99,
      productID: 105,
      title: 'Neoguri Ramen!',
      unit: '5 x 3.59 oz',
    },
    {
      pic: 'url(/images/products/shinKarmystew.jpg)',
      price: 9.99,
      productID: 106,
      title: 'Shin K Army Stew Ramen!',
      unit: '5 x 3.59 oz',
    },
    {
      pic: 'url(/images/products/shinblack.jpg)',
      price: 5.99,
      productID: 107,
      title: 'Shin Black Ramen!',
      unit: '5 x 3.59 oz',
    },
    {
      pic: 'url(/images/products/shinblack.jpg)',
      price: 5.99,
      productID: 108,
      title: 'Shin Black Ramen!',
      unit: '5 x 3.59 oz',
    },
    {
      pic: 'url(/images/products/shinblack.jpg)',
      price: 5.99,
      productID: 109,
      title: 'Shin Black Ramen!',
      unit: '5 x 3.59 oz',
    },
    {
      pic: 'url(/images/products/shinblack.jpg)',
      price: 5.99,
      productID: 110,
      title: 'Shin Black Ramen!',
      unit: '5 x 3.59 oz',
    },
    {
      pic: 'url(/images/products/shinblack.jpg)',
      price: 5.99,
      productID: 111,
      title: 'Shin Black Ramen!',
      unit: '5 x 3.59 oz',
    },
    {
      pic: 'url(/images/products/shinblack.jpg)',
      price: 5.99,
      productID: 112,
      title: 'Shin Black Ramen!',
      unit: '5 x 3.59 oz',
    },
    {
      pic: 'url(/images/products/shinblack.jpg)',
      price: 5.99,
      productID: 113,
      title: 'Shin Black Ramen!',
      unit: '5 x 3.59 oz',
    },
    {
      pic: 'url(/images/products/shinblack.jpg)',
      price: 5.99,
      productID: 114,
      title: 'Shin Black Ramen!',
      unit: '5 x 3.59 oz',
    },
    {
      pic: 'url(/images/products/shinblack.jpg)',
      price: 5.99,
      productID: 115,
      title: 'Shin Black Ramen!',
      unit: '5 x 3.59 oz',
    },
    {
      pic: 'url(/images/products/shinblack.jpg)',
      price: 5.99,
      productID: 116,
      title: 'Shin Black Ramen!',
      unit: '5 x 3.59 oz',
    },
    {
      pic: 'url(/images/products/shinblack.jpg)',
      price: 5.99,
      productID: 117,
      title: 'Shin Black Ramen!',
      unit: '5 x 3.59 oz',
    },
    {
      pic: 'url(/images/products/shinblack.jpg)',
      price: 5.99,
      productID: 118,
      title: 'Shin Black Ramen!',
      unit: '5 x 3.59 oz',
    },
    {
      pic: 'url(/images/products/shinblack.jpg)',
      price: 5.99,
      productID: 119,
      title: 'Shin Black Ramen!',
      unit: '5 x 3.59 oz',
    },
    {
      pic: 'url(/images/products/shinblack.jpg)',
      price: 5.99,
      productID: 120,
      title: 'Shin Black Ramen!',
      unit: '5 x 3.59 oz',
    },
    {
      pic: 'url(/images/products/shinblack.jpg)',
      price: 5.99,
      productID: 121,
      title: 'Shin Black Ramen!',
      unit: '5 x 3.59 oz',
    },
    {
      pic: 'url(/images/products/shinblack.jpg)',
      price: 5.99,
      productID: 122,
      title: 'Shin Black Ramen!',
      unit: '5 x 3.59 oz',
    },
    {
      pic: 'url(/images/products/shinblack.jpg)',
      price: 5.99,
      productID: 123,
      title: 'Shin Black Ramen!',
      unit: '5 x 3.59 oz',
    },
    {
      pic: 'url(/images/products/shinblack.jpg)',
      price: 5.99,
      productID: 124,
      title: 'Shin Black Ramen!',
      unit: '5 x 3.59 oz',
    },
    {
      pic: 'url(/images/products/shinblack.jpg)',
      price: 5.99,
      productID: 125,
      title: 'Shin Black Ramen!',
      unit: '5 x 3.59 oz',
    },
  ],
};
// Array of Products should be under each category, for each department, but for testing purposes will be stored separately.
const arrayDeptProductsSlice = createSlice({
  name: 'departments',
  initialState,
  reducers: {},
});

export const departmentsActions = arrayDeptProductsSlice.actions;
export default arrayDeptProductsSlice.reducer;
