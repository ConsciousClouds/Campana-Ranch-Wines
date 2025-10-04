import { Wine } from '../types'

// Campana Ranch - Working Horse Ranch & Boutique Winery
// Small-lot production: 2-4 barrels per release (48-96 bottles)
export const mockWines: Wine[] = [
  {
    id: '1',
    name: 'Estate Cabernet Sauvignon',
    vintage: 2021,
    varietal: 'Cabernet Sauvignon',
    price: 85,
    image: '/campana-bottle.png',
    description: 'Hand-picked from our hillside vineyard. Bold and structured with notes of blackberry, cedar, and a hint of the dusty ranch road.',
    category: 'red',
    featured: true,
    inStock: true,
    clubOnly: false,
    vineyard: 'Estate Vineyard',
    alcohol: '14.2%',
    production: '3 barrels (72 bottles)',
    harvestDate: 'October 12, 2021',
    productionFrequency: 'annual',
    story: "From our working horse ranch in Sonoma. We make wine the way we run the ranch - small, careful, and with respect for the land.",
    tastingNotes: {
      aroma: ['blackberry', 'cedar', 'dried herbs', 'leather'],
      flavor: ['dark cherry', 'tobacco', 'vanilla', 'cocoa'],
      finish: 'Long and dusty with grippy tannins',
      pairings: ['Grilled ribeye', 'Aged cheddar', 'Wild mushroom risotto']
    },
    vintages: [
      {
        vintage: 2021,
        price: 85,
        inStock: true,
        alcohol: '14.2%',
        production: '3 barrels (72 bottles)',
        harvestDate: 'October 12, 2021',
        tastingNotes: {
          aroma: ['blackberry', 'cedar', 'dried herbs', 'leather'],
          flavor: ['dark cherry', 'tobacco', 'vanilla', 'cocoa'],
          finish: 'Long and dusty with grippy tannins',
          pairings: ['Grilled ribeye', 'Aged cheddar', 'Wild mushroom risotto']
        },
        story: "From our working horse ranch in Sonoma. We make wine the way we run the ranch - small, careful, and with respect for the land."
      },
      {
        vintage: 2020,
        price: 80,
        inStock: true,
        alcohol: '14.3%',
        production: '4 barrels (96 bottles)',
        harvestDate: 'October 15, 2020',
        tastingNotes: {
          aroma: ['cassis', 'tobacco leaf', 'bay leaf', 'vanilla'],
          flavor: ['plum', 'mocha', 'black pepper', 'leather'],
          finish: 'Balanced with silky tannins and bright acidity',
          pairings: ['Braised short ribs', 'Blue cheese', 'Grilled portobello']
        },
        story: "A challenging year with the fires, but we got the fruit in clean. Small batch means we could be selective."
      },
      {
        vintage: 2019,
        price: 75,
        inStock: false,
        alcohol: '14.0%',
        production: '2 barrels (48 bottles)',
        harvestDate: 'October 18, 2019',
        tastingNotes: {
          aroma: ['blackberry', 'sage', 'dried earth', 'oak'],
          flavor: ['dark cherry', 'coffee', 'herbs', 'mineral'],
          finish: 'Elegant with fine tannins',
          pairings: ['Lamb chops', 'Aged cheeses', 'Roasted vegetables']
        },
        story: "Our smallest production year. Every bottle tells the story of this special vintage."
      }
    ],
    accolades: [
      {
        score: "93 Points",
        publication: "Wine Spectator",
        year: "2023"
      },
      {
        score: "Gold Medal",
        publication: "Sonoma County Harvest Fair",
        year: "2022"
      },
      {
        score: "91 Points",
        publication: "Robert Parker",
        year: "2023"
      }
    ]
  },
  {
    id: '2',
    name: 'Estate Chardonnay',
    vintage: 2022,
    varietal: 'Chardonnay',
    price: 65,
    image: '/campana-bottle.png',
    description: 'Crisp and bright with notes of green apple and citrus. Aged in neutral oak barrels right here on the ranch.',
    category: 'white',
    featured: true,
    inStock: true,
    clubOnly: false,
    vineyard: 'Estate Vineyard',
    alcohol: '13.5%',
    production: '2 barrels (48 bottles)',
    harvestDate: 'September 8, 2022',
    story: "Early morning harvest when it's cool. Small production means every bottle gets our full attention.",
    tastingNotes: {
      aroma: ['green apple', 'pear', 'honeysuckle', 'wet stone'],
      flavor: ['citrus', 'white peach', 'almond', 'butter'],
      finish: 'Clean and bright with lingering minerality',
      pairings: ['Roasted chicken', 'Fresh oysters', 'Goat cheese salad']
    }
  },
  {
    id: '3',
    name: 'Estate Pinot Noir',
    vintage: 2021,
    varietal: 'Pinot Noir',
    price: 75,
    image: '/campana-bottle.png',
    description: 'Elegant and earthy with notes of cherry, sage, and a touch of the ranch soil. Light on its feet but full of character.',
    category: 'red',
    featured: false,
    inStock: true,
    clubOnly: false,
    vineyard: 'Estate Vineyard',
    alcohol: '13.8%',
    production: '3 barrels (72 bottles)',
    story: 'Pinot is finicky, but when it works on our ranch, it really works. This is one of those years.',
    tastingNotes: {
      aroma: ['wild strawberry', 'sage', 'forest floor', 'rose petals'],
      flavor: ['cherry', 'raspberry', 'mushroom', 'black tea'],
      finish: 'Silky with hints of spice and earth',
      pairings: ['Duck confit', 'Salmon', 'Mushroom pasta']
    }
  },
  {
    id: '4',
    name: 'Ranch Rosé',
    vintage: 2022,
    varietal: 'Grenache',
    price: 55,
    image: '/campana-bottle.png',
    description: 'Light and refreshing with notes of strawberry and citrus. Perfect for warm afternoons on the ranch.',
    category: 'rose',
    featured: true,
    inStock: true,
    clubOnly: false,
    vineyard: 'Estate Vineyard',
    alcohol: '12.8%',
    production: '4 barrels (96 bottles)',
    story: 'Our summer wine. We make just enough to get us through the season and share with friends who stop by.',
    tastingNotes: {
      aroma: ['strawberry', 'watermelon', 'white flowers', 'citrus zest'],
      flavor: ['raspberry', 'peach', 'cantaloupe', 'herbs'],
      finish: 'Crisp and refreshing with a hint of minerality',
      pairings: ['Grilled vegetables', 'Fresh salads', 'Soft cheeses']
    }
  },
  {
    id: '5',
    name: 'Estate Zinfandel',
    vintage: 2020,
    varietal: 'Zinfandel',
    price: 70,
    image: '/campana-bottle.png',
    description: 'Bold and spicy with notes of blackberry, pepper, and a hint of the ranch dust. Pure Sonoma character.',
    category: 'red',
    featured: false,
    inStock: true,
    clubOnly: false,
    vineyard: 'Estate Vineyard',
    alcohol: '14.8%',
    production: '2 barrels (48 bottles)',
    harvestDate: 'October 22, 2020',
    story: "Zin grows well here. It likes the heat and doesn't mind a little struggle. Just like us.",
    tastingNotes: {
      aroma: ['blackberry jam', 'black pepper', 'baking spices', 'vanilla'],
      flavor: ['brambleberry', 'fig', 'chocolate', 'cinnamon'],
      finish: 'Bold and spicy with velvety tannins',
      pairings: ['BBQ ribs', 'Aged gouda', 'Dark chocolate']
    }
  },
  {
    id: '6',
    name: 'Ranch Red Blend',
    vintage: 2021,
    varietal: 'Red Blend',
    price: 60,
    image: '/campana-bottle.png',
    description: 'Our everyday ranch red - Cab, Merlot, and a touch of Syrah. The wine we pour when neighbors stop by.',
    category: 'red',
    featured: false,
    inStock: true,
    clubOnly: false,
    vineyard: 'Estate Vineyard',
    alcohol: '14.0%',
    production: '4 barrels (96 bottles)',
    story: "This is what we drink with dinner. Honest wine from our working ranch - no fuss, just good.",
    tastingNotes: {
      aroma: ['plum', 'blackcurrant', 'cedar', 'vanilla'],
      flavor: ['black cherry', 'mocha', 'herbs', 'spice'],
      finish: 'Smooth and approachable with soft tannins',
      pairings: ['Pot roast', 'Pizza', 'Sharp cheddar']
    },
    accolades: [
      {
        score: "89 Points",
        publication: "Wine Enthusiast",
        year: "2023"
      },
      {
        score: "Best Value",
        publication: "Local Wine Guide",
        year: "2023"
      },
      {
        score: "★★★★",
        publication: "Sonoma Magazine",
        year: "2022"
      }
    ]
  },
  {
    id: '7',
    name: 'Estate Sauvignon Blanc',
    vintage: 2022,
    varietal: 'Sauvignon Blanc',
    price: 58,
    image: '/campana-bottle.png',
    description: 'Crisp and refreshing with notes of citrus and fresh-cut grass. Bright and clean, just like a ranch morning.',
    category: 'white',
    featured: false,
    inStock: true,
    clubOnly: false,
    vineyard: 'Estate Vineyard',
    alcohol: '13.2%',
    production: '3 barrels (72 bottles)',
    story: 'Our white wine for summer. Light, easy-drinking, and perfect for the porch after a long day.',
    tastingNotes: {
      aroma: ['grapefruit', 'lime', 'fresh grass', 'herbs'],
      flavor: ['citrus', 'green apple', 'melon', 'mineral'],
      finish: 'Zesty and clean with bright acidity',
      pairings: ['Fresh seafood', 'Goat cheese', 'Summer salads']
    }
  },
  {
    id: '8',
    name: 'Reserve Merlot',
    vintage: 2019,
    varietal: 'Merlot',
    price: 90,
    image: '/campana-bottle.png',
    description: "Smooth and elegant with notes of plum, chocolate, and a touch of oak. Our special occasion wine.",
    category: 'red',
    featured: false,
    inStock: false,
    clubOnly: true,
    vineyard: 'Estate Vineyard',
    alcohol: '14.5%',
    production: '2 barrels (48 bottles)',
    story: 'We only make Merlot in the best years. This one spent extra time in barrel and shows it.',
    tastingNotes: {
      aroma: ['black plum', 'tobacco', 'leather', 'dried herbs'],
      flavor: ['dark chocolate', 'espresso', 'blackberry', 'spice'],
      finish: 'Elegant and complex with silky tannins',
      pairings: ['Filet mignon', 'Lamb', 'Aged cheeses']
    }
  }
]