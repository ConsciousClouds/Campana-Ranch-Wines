import { Wine } from '../types'

// Ranch-authentic wine collection
export const mockWines: Wine[] = [
  {
    id: '1',
    name: 'Ranch Reserve Cabernet',
    vintage: 2019,
    varietal: 'Cabernet Sauvignon',
    price: 85,
    image: '/campana-bottle.png', // Using your actual bottle image
    description: 'From our hillside block where the old oak stands guard. Bold blackberry and leather, with that dusty tannin only our soil can give.',
    category: 'red',
    featured: true,
    inStock: true,
    clubOnly: false,
    vineyard: 'Hillside Block',
    alcohol: '14.2%',
    production: '450 cases',
    harvestDate: 'October 15, 2019',
    productionFrequency: 'annual',
    story: "My grandfather planted these vines in '82, right after we bought the ranch. Every harvest, we still pick this block by hand, just like he did.",
    tastingNotes: {
      aroma: ['blackberry', 'cedar', 'dried herbs', 'leather'],
      flavor: ['dark cherry', 'tobacco', 'vanilla', 'cocoa'],
      finish: 'Long and dusty with grippy tannins',
      pairings: ['Grilled ribeye', 'Aged cheddar', 'Wild mushroom risotto']
    },
    vintages: [
      {
        vintage: 2021,
        price: 95,
        inStock: true,
        alcohol: '14.5%',
        production: '380 cases',
        harvestDate: 'October 8, 2021',
        tastingNotes: {
          aroma: ['blackcurrant', 'violet', 'graphite', 'cedar'],
          flavor: ['black cherry', 'espresso', 'dark chocolate', 'herbs'],
          finish: 'Velvety and long with refined tannins',
          pairings: ['Prime rib', 'Truffle risotto', 'Dark chocolate']
        },
        story: "2021 was a drought year. Lower yields but incredible concentration. This might be the best Cab we've ever made."
      },
      {
        vintage: 2020,
        price: 90,
        inStock: true,
        alcohol: '14.3%',
        production: '425 cases',
        harvestDate: 'October 12, 2020',
        tastingNotes: {
          aroma: ['cassis', 'tobacco leaf', 'bay leaf', 'vanilla'],
          flavor: ['plum', 'mocha', 'black pepper', 'leather'],
          finish: 'Balanced with silky tannins and bright acidity',
          pairings: ['Braised short ribs', 'Blue cheese', 'Grilled portobello']
        },
        story: "The fires that year gave us some challenges, but we harvested early and the fruit was pristine."
      },
      {
        vintage: 2019,
        price: 85,
        inStock: true,
        alcohol: '14.2%',
        production: '450 cases',
        harvestDate: 'October 15, 2019',
        tastingNotes: {
          aroma: ['blackberry', 'cedar', 'dried herbs', 'leather'],
          flavor: ['dark cherry', 'tobacco', 'vanilla', 'cocoa'],
          finish: 'Long and dusty with grippy tannins',
          pairings: ['Grilled ribeye', 'Aged cheddar', 'Wild mushroom risotto']
        },
        story: "My grandfather planted these vines in '82, right after we bought the ranch. Every harvest, we still pick this block by hand, just like he did."
      },
      {
        vintage: 2018,
        price: 80,
        inStock: false,
        alcohol: '14.0%',
        production: '475 cases',
        harvestDate: 'October 20, 2018',
        tastingNotes: {
          aroma: ['red currant', 'sage', 'pencil lead', 'oak'],
          flavor: ['raspberry', 'coffee', 'baking spices', 'mineral'],
          finish: 'Medium-bodied with dusty tannins',
          pairings: ['Lamb chops', 'Aged gouda', 'Roasted vegetables']
        },
        story: "A cooler vintage that gave us more elegant wines. This one's drinking beautifully now."
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
    name: 'Morning Fog Chardonnay',
    vintage: 2021,
    varietal: 'Chardonnay',
    price: 65,
    image: '/campana-bottle.png',
    description: 'Harvested at dawn when the valley fog rolls through. Crisp apple and honeycomb, aged in neutral oak from our own cooperage.',
    category: 'white',
    featured: true,
    inStock: true,
    clubOnly: false,
    vineyard: 'Valley Floor',
    alcohol: '13.5%',
    production: '325 cases',
    harvestDate: 'September 3, 2021',
    story: "We wake at 4am to pick these grapes while the fog keeps them cool. It's a family tradition - everyone helps, even the kids.",
    tastingNotes: {
      aroma: ['green apple', 'pear', 'honeysuckle', 'wet stone'],
      flavor: ['citrus', 'white peach', 'almond', 'butter'],
      finish: 'Clean and bright with lingering minerality',
      pairings: ['Roasted chicken', 'Fresh oysters', 'Goat cheese salad']
    }
  },
  {
    id: '3',
    name: 'Sunset Ridge Pinot',
    vintage: 2020,
    varietal: 'Pinot Noir',
    price: 75,
    image: '/campana-bottle.png', // 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800',
    description: 'From the western slope where the vines catch the last light. Wild cherry and sage, with that earthy finish that speaks of the land.',
    category: 'red',
    featured: false,
    inStock: true,
    clubOnly: false,
    vineyard: 'West Slope',
    block: 'Block 7',
    alcohol: '13.8%',
    production: '275 cases',
    story: 'This slope gets the ocean breeze every evening. The vines struggle here, but that struggle makes the wine.',
    tastingNotes: {
      aroma: ['wild strawberry', 'sage', 'forest floor', 'rose petals'],
      flavor: ['cherry', 'raspberry', 'mushroom', 'black tea'],
      finish: 'Silky with hints of spice and earth',
      pairings: ['Duck confit', 'Salmon', 'Mushroom pasta']
    }
  },
  {
    id: '4',
    name: 'Wildflower Rosé',
    vintage: 2022,
    varietal: 'Grenache',
    price: 45,
    image: '/campana-bottle.png', // 'https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?w=800',
    description: 'Pressed from grapes grown among the wildflowers. Fresh strawberry and melon, perfect for sunset on the porch.',
    category: 'rose',
    featured: false,
    inStock: true,
    clubOnly: false,
    vineyard: 'Meadow Vineyard',
    alcohol: '12.8%',
    production: '550 cases',
    story: 'We leave wildflowers between the rows here. The bees love it, and we swear you can taste the flowers in the wine.',
    tastingNotes: {
      aroma: ['strawberry', 'watermelon', 'white flowers', 'citrus zest'],
      flavor: ['raspberry', 'peach', 'cantaloupe', 'herbs'],
      finish: 'Crisp and refreshing with a hint of minerality',
      pairings: ['Grilled vegetables', 'Fresh salads', 'Soft cheeses']
    }
  },
  {
    id: '5',
    name: 'Old Vine Zinfandel',
    vintage: 2018,
    varietal: 'Zinfandel',
    price: 95,
    image: '/campana-bottle.png', // 'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800',
    description: 'From vines planted by my grandfather in 1952. Brambleberry and black pepper, with the soul of three generations.',
    category: 'red',
    featured: true,
    inStock: true,
    clubOnly: false,
    vineyard: 'Heritage Block',
    alcohol: '15.1%',
    production: '175 cases',
    harvestDate: 'October 28, 2018',
    story: "These gnarly old vines have seen it all. Droughts, floods, good years and bad. They're family, and they make wine that tells our story.",
    tastingNotes: {
      aroma: ['blackberry jam', 'black pepper', 'baking spices', 'vanilla'],
      flavor: ['brambleberry', 'fig', 'chocolate', 'cinnamon'],
      finish: 'Bold and spicy with velvety tannins',
      pairings: ['BBQ ribs', 'Aged gouda', 'Dark chocolate']
    }
  },
  {
    id: '6',
    name: 'Barn Door Red Blend',
    vintage: 2020,
    varietal: 'Red Blend',
    price: 55,
    image: '/campana-bottle.png', // 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800',
    description: 'Our everyday ranch red - Cab, Merlot, and Syrah. The wine we pour when neighbors stop by and stories run long.',
    category: 'red',
    featured: false,
    inStock: true,
    clubOnly: false,
    vineyard: 'Estate Blend',
    alcohol: '14.0%',
    production: '800 cases',
    story: "Named after the old barn where we used to make wine before we built the winery. It's honest wine for honest folk.",
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
    name: 'Creek Side Sauvignon Blanc',
    vintage: 2022,
    varietal: 'Sauvignon Blanc',
    price: 48,
    image: '/campana-bottle.png', // 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=800',
    description: 'From vines near the creek where morning mist lingers. Crisp and grassy, like a walk through the pasture at dawn.',
    category: 'white',
    featured: false,
    inStock: true,
    clubOnly: false,
    vineyard: 'Creek Block',
    alcohol: '13.2%',
    production: '425 cases',
    story: 'The creek keeps these vines cool. We can hear it babbling during harvest - makes the work go easier.',
    tastingNotes: {
      aroma: ['grapefruit', 'lime', 'fresh grass', 'herbs'],
      flavor: ['citrus', 'green apple', 'melon', 'mineral'],
      finish: 'Zesty and clean with bright acidity',
      pairings: ['Fresh seafood', 'Goat cheese', 'Summer salads']
    }
  },
  {
    id: '8',
    name: 'Library Selection Merlot',
    vintage: 2016,
    varietal: 'Merlot',
    price: 125,
    image: '/campana-bottle.png', // 'https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?w=800',
    description: "Aged 7 years in our underground cellar. Only released when it tells us it's ready.",
    category: 'red',
    featured: false,
    inStock: false,
    clubOnly: true,
    vineyard: 'Reserve Block',
    alcohol: '14.5%',
    production: '95 cases',
    story: 'We only make this in exceptional years. 2016 was one of those years when everything came together just right.',
    tastingNotes: {
      aroma: ['black plum', 'tobacco', 'leather', 'dried herbs'],
      flavor: ['dark chocolate', 'espresso', 'blackberry', 'spice'],
      finish: 'Elegant and complex with silky tannins',
      pairings: ['Filet mignon', 'Lamb', 'Aged cheeses']
    }
  }
]