/**
 * STYLEHUB - FASHION & APPAREL E-COMMERCE JAVASCRIPT
 * Pure Vanilla JavaScript implementation
 */

// ==========================================================================
// 1. PRODUCT DATABASE & INITIAL DATA (INDIAN RUPEES - INR)
// ==========================================================================

const products = [
  {
    id: 1,
    name: "Floral Silk Summer Dress",
    price: 2499,
    originalPrice: 3499,
    category: "women",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Pink", "White", "Blue"],
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1000&auto=format&fit=crop"
    ],
    rating: 4.8,
    reviewsCount: 128,
    badge: "SALE",
    description: "Expertly tailored from 100% Mulberry silk. Features a flattering A-line silhouette, invisible zip fastening, and delicate hand-finished seams for graceful summer occasions.",
    material: "100% Mulberry Silk / Cupro Lining",
    inStock: true
  },
  {
    id: 2,
    name: "Italian Wool Trench Coat",
    price: 4999,
    originalPrice: 6999,
    category: "women",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige", "Black", "Pink"],
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop",

    gallery: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548624149-f9b1859aa9d0?q=80&w=1000&auto=format&fit=crop"
    ],
    rating: 4.9,
    reviewsCount: 94,
    badge: "TRENDING",
    description: "Double-breasted timeless trench tailored from heavyweight water-repellent virgin wool. Features storm flap, horn buttons, and adjustable waist tie belt.",
    material: "90% Virgin Wool, 10% Cashmere",
    inStock: true
  },
  {
    id: 3,
    name: "Classic Tailored Navy Suit",
    price: 5999,
    originalPrice: 8499,
    category: "men",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Blue", "Black"],
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop",

    gallery: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1000&auto=format&fit=crop"
    ],
    rating: 4.9,
    reviewsCount: 156,
    badge: "HOT",
    description: "Sleek two-piece slim-fit formal suit. Constructed with full canvas lapels, precision pick stitching, and breathable cupro lining for supreme drape.",
    material: "100% Super 120s Fine Wool",
    inStock: true
  },
  {
    id: 4,
    name: "Pure Linen Casual Shirt",
    price: 1599,
    originalPrice: 2299,
    category: "men",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Blue", "Pink", "Beige"],
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1000&auto=format&fit=crop",

    gallery: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620012253295-c15c429fccf8?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1000&auto=format&fit=crop"
    ],
    rating: 4.7,
    reviewsCount: 82,
    badge: "NEW",
    description: "Relaxed-fit Normandy linen shirt with mother-of-pearl buttons and a resort camp collar. Natural breathability for warm summer days.",
    material: "100% French Normandy Linen",
    inStock: true
  },
  {
    id: 5,
    name: "Organic Cotton Kids Dungaree",
    price: 999,
    originalPrice: 1499,
    category: "kids",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Blue", "Pink", "Beige"],
    image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=1000&auto=format&fit=crop",

    gallery: [
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?q=80&w=1000&auto=format&fit=crop"
    ],
    rating: 4.8,
    reviewsCount: 64,
    badge: "ECO",
    description: "Playful, ultra-soft dungaree overalls made from certified organic cotton with adjustable button straps and nickel-free snap closures.",
    material: "100% GOTS Certified Organic Cotton",
    inStock: true
  },
  {
    id: 6,
    name: "Kids Holiday Party Dress",
    price: 1299,
    originalPrice: 1799,
    category: "kids",
    sizes: ["XS", "S", "M"],
    colors: ["Pink", "White", "Gold"],
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=1000&auto=format&fit=crop",

    gallery: [
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1000&auto=format&fit=crop"
    ],
    rating: 4.9,
    reviewsCount: 47,
    badge: "SALE",
    description: "Charming tulle and satin festive dress with gentle organic cotton lining to protect delicate skin. Back bow and zipper closure.",
    material: "Polyester Tulle, Organic Cotton Lining",
    inStock: true
  },
  {
    id: 7,
    name: "Cashmere Turtleneck Sweater",
    price: 3299,
    originalPrice: 4499,
    category: "women",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Pink", "Beige", "Black", "White"],
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop",

    gallery: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop"
    ],
    rating: 4.8,
    reviewsCount: 110,
    badge: "POPULAR",
    description: "Featherlight yet wonderfully cozy sweater spun from 2-ply Grade A Mongolian cashmere. Features ribbed cuffs and a relaxed cowl neck.",
    material: "100% Grade A Cashmere",
    inStock: true
  },
  {
    id: 8,
    name: "Urban Leather Biker Jacket",
    price: 4499,
    originalPrice: 6199,
    category: "men",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black"],
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1000&auto=format&fit=crop",

    gallery: [
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=1000&auto=format&fit=crop"
    ],
    rating: 4.9,
    reviewsCount: 88,
    badge: "MUST HAVE",
    description: "Classic asymmetrical motorcycle jacket crafted from full-grain lambskin leather. Features polished gunmetal zippers and quilted shoulder panels.",
    material: "100% Lambskin Leather",
    inStock: true
  },
  {
    id: 9,
    name: "High-Waist Pleated Trousers",
    price: 1999,
    originalPrice: 2799,
    category: "women",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Green", "Beige", "Black", "Pink"],
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop",

    gallery: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551803091-e20673f15770?q=80&w=1000&auto=format&fit=crop"
    ],
    rating: 4.6,
    reviewsCount: 75,
    badge: "TRENDING",
    description: "Tailored wide-leg trousers featuring front pleats, slant pockets, and a clean belt loop waistband. Sophisticated for office or evening dinner.",
    material: "65% Recycled Polyester, 35% Rayon",
    inStock: true
  },
  {
    id: 10,
    name: "Merino Wool Knit Cardigan",
    price: 2399,
    originalPrice: 3299,
    category: "men",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Green", "Blue", "Black", "Beige"],
    image: "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?q=80&w=1000&auto=format&fit=crop",

    gallery: [
      "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1000&auto=format&fit=crop"
    ],
    rating: 4.7,
    reviewsCount: 52,
    badge: "SALE",
    description: "Chunky waffle-knit shawl collar cardigan with genuine tortoiseshell buttons and front patch pockets. Super soft and warm.",
    material: "100% Extra-fine Merino Wool",
    inStock: true
  },
  {
    id: 11,
    name: "Kids Colorblock Hooded Parka",
    price: 1499,
    originalPrice: 2099,
    category: "kids",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Pink", "Blue", "Green"],
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=1000&auto=format&fit=crop",

    gallery: [
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1471286174890-9c112ffca56a?q=80&w=1000&auto=format&fit=crop"
    ],
    rating: 4.8,
    reviewsCount: 39,
    badge: "NEW",
    description: "Windproof and water-resistant insulated coat featuring cozy fleece lining, reflective safety strips, and storm hood.",
    material: "100% Recycled Nylon Shell, Recycled Down Alternative",
    inStock: true
  },
  {
    id: 12,
    name: "Silk Satin Slip Evening Gown",
    price: 3799,
    originalPrice: 5299,
    category: "women",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Gold", "Pink", "Black"],
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000&auto=format&fit=crop",

    gallery: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1000&auto=format&fit=crop"
    ],
    rating: 5.0,
    reviewsCount: 142,
    badge: "LUXURY",
    description: "Bias-cut floor-length evening gown in lustrous heavy silk satin. Gracefully drapes over the body with a delicate cowl neckline and adjustable straps.",
    material: "100% Pure Silk Charmeuse",
    inStock: true
  }
];

// Initial Mock Reviews
const defaultReviews = {
  1: [
    { name: "Sophia Miller", rating: 5, date: "Aug 10, 2026", comment: "The silk drape is extraordinary! Fits true to size and the pink shade is so flattering." },
    { name: "Rachel Adams", rating: 5, date: "Aug 02, 2026", comment: "Wore this to a garden wedding and received endless compliments. Worth every dollar." },
    { name: "Claire Dupont", rating: 4, date: "Jul 28, 2026", comment: "Beautiful material, arrived nicely packaged with garment bag." }
  ],
  2: [
    { name: "Emma Watson", rating: 5, date: "Aug 05, 2026", comment: "Outstanding wool quality and heavy drape. Very warm yet sleek." }
  ],
  3: [
    { name: "David Chen", rating: 5, date: "Aug 08, 2026", comment: "The tailoring on this suit is comparable to Savile Row bespoke. Exceptional fit." }
  ]
};

// ==========================================================================
// 2. APPLICATION STATE MANAGEMENT & SAFE STORAGE
// ==========================================================================

function safeGetStorage(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    if (!stored) return fallback;
    const parsed = JSON.parse(stored);
    return parsed !== null && parsed !== undefined ? parsed : fallback;
  } catch (e) {
    console.warn(`[StyleHub Storage] Failed to parse "${key}", resetting to fallback:`, e);
    return fallback;
  }
}

// Initial state with validation against current products
let rawCart = safeGetStorage('stylehub_cart', [
  { productId: 1, size: "M", color: "Pink", quantity: 1 }
]);

let cart = Array.isArray(rawCart)
  ? rawCart.filter(item => item && products.some(p => p.id === item.productId) && Number(item.quantity) > 0)
  : [{ productId: 1, size: "M", color: "Pink", quantity: 1 }];

let rawWishlist = safeGetStorage('stylehub_wishlist', [2, 12]);
let wishlist = Array.isArray(rawWishlist)
  ? rawWishlist.filter(id => products.some(p => p.id === id))
  : [2, 12];

let rawOrders = safeGetStorage('stylehub_orders', [
  {
    orderId: "STH-849201",
    date: "Aug 12, 2026",
    status: "Processing",
    trackingStep: 2,
    items: [
      { productId: 2, name: "Italian Wool Trench Coat", size: "M", color: "Beige", price: 4999, quantity: 1, image: products[1].image }
    ],
    total: 4999,
    shippingAddress: "Flat 402, Royale Palms, Bandra West, Mumbai, MH 400050"
  }
]);
let orders = Array.isArray(rawOrders) ? rawOrders : [];

let rawUser = safeGetStorage('stylehub_user', {
  name: "Ananya Sharma",
  email: "ananya.sharma@example.in",
  phone: "+91 98765 43210",
  currency: "INR",
  tier: "VIP Gold Tier Member"
});
let user = (rawUser && typeof rawUser === 'object') ? rawUser : {
  name: "Ananya Sharma",
  email: "ananya.sharma@example.in",
  phone: "+91 98765 43210",
  currency: "INR",
  tier: "VIP Gold Tier Member"
};

let rawAddresses = safeGetStorage('stylehub_addresses', [
  { label: "Home (Default)", street: "Flat 402, Royale Palms, Bandra West", city: "Mumbai", state: "Maharashtra", zip: "400050", isDefault: true },
  { label: "Design Studio", street: "12th Floor, Cyber City, Phase 2", city: "Gurugram", state: "Haryana", zip: "122002", isDefault: false }
]);
let userAddresses = Array.isArray(rawAddresses) ? rawAddresses : [];

let currentCurrency = 'INR';
const currencyRates = {
  INR: { symbol: '₹', rate: 1.0 }
};

let activeFilters = {
  category: 'all',
  size: 'ALL',
  color: 'ALL',
  maxPrice: 8000,
  rating: 0,
  search: '',
  sort: 'featured'
};

let appliedCoupon = null;
let currentDetailProduct = null;
let currentDetailSize = 'M';
let currentDetailColor = 'Pink';
let currentDetailQty = 1;
let currentReviewRatingVal = 5;
let checkoutShippingFee = 0;

// Save helpers
function saveCart() {
  localStorage.setItem('stylehub_cart', JSON.stringify(cart));
  updateBadges();
}
function saveWishlist() {
  localStorage.setItem('stylehub_wishlist', JSON.stringify(wishlist));
  updateBadges();
}
function saveOrders() {
  localStorage.setItem('stylehub_orders', JSON.stringify(orders));
}
function saveUser() {
  localStorage.setItem('stylehub_user', JSON.stringify(user));
}
function saveAddresses() {
  localStorage.setItem('stylehub_addresses', JSON.stringify(userAddresses));
}

// Format Price with Indian Rupees (₹ / INR)
function formatPrice(price) {
  if (price === undefined || price === null || isNaN(price)) return '₹0';
  return `₹${Math.round(price).toLocaleString('en-IN')}`;
}

// ==========================================================================
// 3. NAVIGATION & VIEW ROUTING
// ==========================================================================

function navigateTo(viewName) {
  const views = document.querySelectorAll('.app-view');
  views.forEach(v => {
    v.style.display = 'none';
    v.classList.remove('active-view');
  });

  const targetView = document.getElementById(`${viewName}-view`);
  if (targetView) {
    targetView.style.display = 'block';
    targetView.classList.add('active-view');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Update header navigation active states
  const navLinks = document.querySelectorAll('.main-nav .nav-link');
  navLinks.forEach(link => {
    if (link.getAttribute('data-view') === viewName) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Re-render specific views if needed
  if (viewName === 'shop') {
    renderShopProducts();
  } else if (viewName === 'cart') {
    renderCartPage();
  } else if (viewName === 'checkout') {
    renderCheckoutPage();
  } else if (viewName === 'account') {
    renderAccountView();
  }
}

function filterShopCategory(category) {
  activeFilters.category = category;
  
  // Set radio in sidebar
  const radios = document.querySelectorAll('input[name="shop-category"]');
  radios.forEach(r => {
    r.checked = (r.value === category);
  });

  // Update breadcrumb and header title
  const titles = {
    all: "Explore All Collections",
    women: "Women's Haute Collection",
    men: "Men's Sartorial Line",
    kids: "Kids & Toddlers Playwear"
  };
  const titleEl = document.getElementById('shop-heading-title');
  const breadcrumbEl = document.getElementById('shop-breadcrumb-current');
  if (titleEl) titleEl.innerText = titles[category] || "Curated Garments";
  if (breadcrumbEl) breadcrumbEl.innerText = (category === 'all' ? "All Styles" : category.toUpperCase());

  navigateTo('shop');
  renderShopProducts();
}

// Mobile Nav Drawer Toggle
function toggleMobileNav() {
  const drawer = document.getElementById('mobile-nav-drawer');
  const backdrop = document.getElementById('mobile-backdrop');
  drawer.classList.toggle('open');
  backdrop.classList.toggle('open');
}

function closeMobileNav() {
  const drawer = document.getElementById('mobile-nav-drawer');
  const backdrop = document.getElementById('mobile-backdrop');
  if (drawer) drawer.classList.remove('open');
  if (backdrop) backdrop.classList.remove('open');
}

// Mobile Filter Sidebar Toggle
function toggleMobileFilterDrawer() {
  const sidebar = document.getElementById('shop-sidebar');
  if (sidebar) sidebar.classList.toggle('mobile-open');
}

// ==========================================================================
// 4. HEADER ACTIONS & SEARCH
// ==========================================================================

function updateBadges() {
  const cartTotalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartCounter = document.getElementById('cart-counter');
  const drawerCartCount = document.getElementById('drawer-cart-count');
  const mobileCartCounts = document.querySelectorAll('.mobile-cart-count');

  if (cartCounter) cartCounter.innerText = cartTotalCount;
  if (drawerCartCount) drawerCartCount.innerText = `${cartTotalCount} items`;
  mobileCartCounts.forEach(el => el.innerText = cartTotalCount);

  const wishlistCount = wishlist.length;
  const wishCounter = document.getElementById('wishlist-counter');
  const modalWishCount = document.getElementById('modal-wishlist-count');
  const accWishlistCount = document.getElementById('acc-wishlist-count');
  const mobileWishCounts = document.querySelectorAll('.mobile-wish-count');

  if (wishCounter) wishCounter.innerText = wishlistCount;
  if (modalWishCount) modalWishCount.innerText = `${wishlistCount} items`;
  if (accWishlistCount) accWishlistCount.innerText = wishlistCount;
  mobileWishCounts.forEach(el => el.innerText = wishlistCount);

  // Update User greeting
  const greeting = document.getElementById('user-greeting-label');
  if (greeting && user) {
    greeting.innerText = user.name.split(' ')[0] || "Account";
  }
}

// Live Search Dropdown Handler
function setupSearch() {
  const searchInput = document.getElementById('global-search-input');
  const searchDropdown = document.getElementById('search-results-dropdown');
  const clearBtn = document.getElementById('search-clear-btn');

  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (query.length > 0) {
      if (clearBtn) clearBtn.style.display = 'block';
      const matches = products.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.category.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      ).slice(0, 5);

      if (matches.length > 0) {
        searchDropdown.innerHTML = matches.map(p => `
          <div class="search-result-item" onclick="openProductDetail(${p.id}); closeSearchDropdown();">
            <img src="${p.image}" alt="${p.name}" class="search-result-thumb">
            <div class="search-result-info">
              <h5>${p.name}</h5>
              <span>${formatPrice(p.price)}</span>
            </div>
          </div>
        `).join('');
        searchDropdown.style.display = 'block';
      } else {
        searchDropdown.innerHTML = `<div style="padding: 16px; text-align: center; color: var(--gray-600); font-size: 0.88rem;">No matching styles found</div>`;
        searchDropdown.style.display = 'block';
      }
    } else {
      if (clearBtn) clearBtn.style.display = 'none';
      searchDropdown.style.display = 'none';
    }
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      clearBtn.style.display = 'none';
      searchDropdown.style.display = 'none';
    });
  }

  document.addEventListener('click', (e) => {
    if (!e.target.closest('#search-container')) {
      closeSearchDropdown();
    }
  });
}

function closeSearchDropdown() {
  const searchDropdown = document.getElementById('search-results-dropdown');
  if (searchDropdown) searchDropdown.style.display = 'none';
}

function handleMobileSearch(e) {
  if (e.key === 'Enter') {
    const val = e.target.value.trim();
    if (val) {
      activeFilters.search = val;
      closeMobileNav();
      navigateTo('shop');
      renderShopProducts();
    }
  }
}

// ==========================================================================
// 5. PRODUCT RENDERING (HOME & SHOP)
// ==========================================================================

function createProductCardHTML(product) {
  const isWishlisted = wishlist.includes(product.id);
  const heartIcon = isWishlisted ? '❤️' : '🤍';
  const wishClass = isWishlisted ? 'active' : '';
  const badgeClass = (product.badge || '').toLowerCase().replace(' ', '-');

  return `
    <div class="product-card" id="product-card-${product.id}">
      <div class="product-image-box" onclick="openProductDetail(${product.id})">
        <img src="${product.image}" alt="${product.name}" class="product-primary-img" loading="lazy">
        ${product.badge ? `<span class="product-badge ${badgeClass}">${product.badge}</span>` : ''}
        <button type="button" class="product-wish-btn ${wishClass}" onclick="event.stopPropagation(); toggleWishlist(${product.id})" title="Wishlist">
          ${heartIcon}
        </button>
        <div class="quick-view-overlay-btn" onclick="event.stopPropagation(); openQuickView(${product.id})">
          👁️ Quick View
        </div>
      </div>
      <div class="product-info">
        <div class="product-meta-row">
          <span class="product-category-lbl">${product.category}</span>
          <span class="product-rating-lbl">★ ${product.rating.toFixed(1)}</span>
        </div>
        <h4 class="product-title" onclick="openProductDetail(${product.id})">${product.name}</h4>
        <div class="product-price-row">
          <span class="product-price">${formatPrice(product.price)}</span>
          ${product.originalPrice ? `<span class="product-original-price">${formatPrice(product.originalPrice)}</span>` : ''}
        </div>
        <div class="product-card-footer">
          <button type="button" class="btn btn-outline btn-block btn-sm" onclick="quickAddToCart(${product.id})">
            🛍️ Add to Bag
          </button>
        </div>
      </div>
    </div>
  `;
}

// Home Featured Tab Rendering
function renderHomeFeatured(category = 'all') {
  const container = document.getElementById('home-featured-grid');
  if (!container) return;

  const tabs = document.querySelectorAll('#home-featured-tabs .tab-pill');
  tabs.forEach(tab => {
    if (tab.innerText.toLowerCase() === category) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  const filtered = (category === 'all') ? products.slice(0, 8) : products.filter(p => p.category === category);
  container.innerHTML = filtered.map(p => createProductCardHTML(p)).join('');
}

// Shop Catalog Rendering with Filters & Sort
function renderShopProducts() {
  const grid = document.getElementById('shop-products-grid');
  const emptyState = document.getElementById('shop-empty-state');
  const countEl = document.getElementById('visible-products-count');
  if (!grid) return;

  let list = [...products];

  // 1. Category Filter
  if (activeFilters.category !== 'all') {
    list = list.filter(p => p.category === activeFilters.category);
  }

  // 2. Price Filter
  list = list.filter(p => p.price <= activeFilters.maxPrice);

  // 3. Size Filter
  if (activeFilters.size !== 'ALL') {
    list = list.filter(p => p.sizes.includes(activeFilters.size));
  }

  // 4. Color Filter
  if (activeFilters.color !== 'ALL') {
    list = list.filter(p => p.colors.includes(activeFilters.color));
  }

  // 5. Rating Filter
  if (activeFilters.rating > 0) {
    list = list.filter(p => p.rating >= activeFilters.rating);
  }

  // 6. Search Query Filter
  if (activeFilters.search) {
    const q = activeFilters.search.toLowerCase();
    list = list.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.description.toLowerCase().includes(q) || 
      p.category.toLowerCase().includes(q)
    );
  }

  // 7. Sorting
  if (activeFilters.sort === 'price-low') {
    list.sort((a, b) => a.price - b.price);
  } else if (activeFilters.sort === 'price-high') {
    list.sort((a, b) => b.price - a.price);
  } else if (activeFilters.sort === 'rating') {
    list.sort((a, b) => b.rating - a.rating);
  } else if (activeFilters.sort === 'name-az') {
    list.sort((a, b) => a.name.localeCompare(b.name));
  }

  // Update counts
  if (countEl) countEl.innerText = list.length;

  if (list.length === 0) {
    grid.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
  } else {
    if (emptyState) emptyState.style.display = 'none';
    grid.innerHTML = list.map(p => createProductCardHTML(p)).join('');
  }

  renderActiveFilterTags();
}

function renderActiveFilterTags() {
  const container = document.getElementById('active-filter-tags');
  if (!container) return;

  const tags = [];
  if (activeFilters.category !== 'all') tags.push({ label: `Dept: ${activeFilters.category}`, key: 'category', val: 'all' });
  if (activeFilters.maxPrice < 8000) tags.push({ label: `Max ${formatPrice(activeFilters.maxPrice)}`, key: 'maxPrice', val: 8000 });
  if (activeFilters.size !== 'ALL') tags.push({ label: `Size: ${activeFilters.size}`, key: 'size', val: 'ALL' });
  if (activeFilters.color !== 'ALL') tags.push({ label: `Color: ${activeFilters.color}`, key: 'color', val: 'ALL' });
  if (activeFilters.rating > 0) tags.push({ label: `Rating ≥ ${activeFilters.rating}★`, key: 'rating', val: 0 });
  if (activeFilters.search) tags.push({ label: `Search: "${activeFilters.search}"`, key: 'search', val: '' });

  container.innerHTML = tags.map(t => `
    <span class="active-tag" onclick="clearSpecificFilter('${t.key}', '${t.val}')">
      ${t.label} ✕
    </span>
  `).join('');
}

function clearSpecificFilter(key, defaultVal) {
  if (key === 'category') {
    filterShopCategory('all');
  } else {
    activeFilters[key] = (key === 'maxPrice' || key === 'rating') ? Number(defaultVal) : defaultVal;
    if (key === 'maxPrice') {
      const slider = document.getElementById('price-slider');
      const badge = document.getElementById('price-range-display');
      if (slider) slider.value = 8000;
      if (badge) badge.innerText = formatPrice(8000);
    }
    renderShopProducts();
  }
}

function resetAllFilters() {
  activeFilters = {
    category: 'all',
    size: 'ALL',
    color: 'ALL',
    maxPrice: 8000,
    rating: 0,
    search: '',
    sort: 'featured'
  };

  const slider = document.getElementById('price-slider');
  const badge = document.getElementById('price-range-display');
  if (slider) slider.value = 8000;
  if (badge) badge.innerText = formatPrice(8000);

  const searchInput = document.getElementById('shop-search-input');
  if (searchInput) searchInput.value = '';

  const sortSelect = document.getElementById('shop-sort-select');
  if (sortSelect) sortSelect.value = 'featured';

  // Reset size buttons
  document.querySelectorAll('#size-filter-grid .size-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.size === 'ALL');
  });

  // Reset color swatches
  document.querySelectorAll('#color-filter-list .color-swatch-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.color === 'ALL');
  });

  filterShopCategory('all');
}

// Filter Event Listeners
function setCategoryFilter(cat) {
  activeFilters.category = cat;
  filterShopCategory(cat);
}

function handlePriceFilter(e) {
  const val = Number(e.target.value);
  activeFilters.maxPrice = val;
  const badge = document.getElementById('price-range-display');
  if (badge) badge.innerText = formatPrice(val);
  renderShopProducts();
}

function setSizeFilter(size) {
  activeFilters.size = size;
  document.querySelectorAll('#size-filter-grid .size-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.size === size);
  });
  renderShopProducts();
}

function setColorFilter(color) {
  activeFilters.color = color;
  document.querySelectorAll('#color-filter-list .color-swatch-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.color === color);
  });
  renderShopProducts();
}

function setRatingFilter(rating) {
  activeFilters.rating = Number(rating);
  renderShopProducts();
}

function handleShopSearch(e) {
  activeFilters.search = e.target.value.trim();
  renderShopProducts();
}

function handleSortChange(e) {
  activeFilters.sort = e.target.value;
  renderShopProducts();
}


// ==========================================================================
// 6. PRODUCT DETAIL VIEW
// ==========================================================================

function openProductDetail(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  currentDetailProduct = product;
  currentDetailSize = product.sizes[0] || 'M';
  currentDetailColor = product.colors[0] || 'Pink';
  currentDetailQty = 1;

  // Breadcrumbs & Title
  const catBreadcrumb = document.getElementById('detail-category-breadcrumb');
  const prodBreadcrumb = document.getElementById('detail-product-breadcrumb');
  const catTag = document.getElementById('detail-category-tag');
  const title = document.getElementById('detail-title');

  if (catBreadcrumb) catBreadcrumb.innerText = product.category.toUpperCase();
  if (prodBreadcrumb) prodBreadcrumb.innerText = product.name;
  if (catTag) catTag.innerText = `${product.category.toUpperCase()}'S APPAREL`;
  if (title) title.innerText = product.name;

  // Images & Gallery
  const mainImg = document.getElementById('detail-main-img');
  const badge = document.getElementById('detail-badge');
  const thumbsRow = document.getElementById('detail-thumbnails-row');

  if (mainImg) mainImg.src = product.image;
  if (badge) {
    if (product.badge) {
      badge.style.display = 'block';
      badge.innerText = product.badge;
    } else {
      badge.style.display = 'none';
    }
  }

  const galleryImages = product.gallery && product.gallery.length ? product.gallery : [product.image];
  if (thumbsRow) {
    thumbsRow.innerHTML = galleryImages.map((imgUrl, idx) => `
      <div class="gallery-thumb ${idx === 0 ? 'active' : ''}" onclick="changeDetailImage('${imgUrl}', this)">
        <img src="${imgUrl}" alt="Thumbnail ${idx + 1}">
      </div>
    `).join('');
  }

  // Rating & Price
  const stars = document.getElementById('detail-stars');
  const score = document.getElementById('detail-rating-score');
  const reviewCount = document.getElementById('detail-review-count');
  const price = document.getElementById('detail-price');
  const origPrice = document.getElementById('detail-original-price');
  const discBadge = document.getElementById('detail-discount-badge');
  const desc = document.getElementById('detail-description');

  if (stars) stars.innerText = '★'.repeat(Math.round(product.rating)) + '☆'.repeat(5 - Math.round(product.rating));
  if (score) score.innerText = product.rating.toFixed(1);
  if (reviewCount) reviewCount.innerText = `(${product.reviewsCount} customer reviews)`;
  if (price) price.innerText = formatPrice(product.price);
  if (desc) desc.innerText = product.description;

  if (origPrice) {
    if (product.originalPrice) {
      origPrice.style.display = 'inline';
      origPrice.innerText = formatPrice(product.originalPrice);
    } else {
      origPrice.style.display = 'none';
    }
  }

  if (discBadge) {
    if (product.originalPrice) {
      const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
      discBadge.style.display = 'inline-block';
      discBadge.innerText = `Save ${discount}%`;
    } else {
      discBadge.style.display = 'none';
    }
  }

  // Render Colors
  const colorsContainer = document.getElementById('detail-colors-container');
  const colorNameLabel = document.getElementById('selected-color-name');
  if (colorNameLabel) colorNameLabel.innerText = currentDetailColor;

  if (colorsContainer) {
    colorsContainer.innerHTML = product.colors.map((c, idx) => `
      <button type="button" class="color-swatch-btn ${idx === 0 ? 'active' : ''}" onclick="selectDetailColor('${c}', this)">
        <span class="color-label">${c}</span>
      </button>
    `).join('');
  }

  // Render Sizes
  const sizesContainer = document.getElementById('detail-sizes-container');
  const sizeNameLabel = document.getElementById('selected-size-name');
  if (sizeNameLabel) sizeNameLabel.innerText = currentDetailSize;

  if (sizesContainer) {
    sizesContainer.innerHTML = product.sizes.map((s, idx) => `
      <button type="button" class="size-choice-btn ${idx === 0 ? 'active' : ''}" onclick="selectDetailSize('${s}', this)">
        ${s}
      </button>
    `).join('');
  }

  // Quantity Reset
  const qtyVal = document.getElementById('detail-quantity-val');
  if (qtyVal) qtyVal.innerText = 1;

  // Wishlist Button State
  const wishBtn = document.getElementById('detail-wishlist-btn');
  if (wishBtn) {
    const isWished = wishlist.includes(product.id);
    wishBtn.innerText = isWished ? '❤️' : '🤍';
    wishBtn.classList.toggle('active', isWished);
  }

  // Render Customer Reviews for this product
  renderProductReviews(productId);

  // Render Related Products
  renderRelatedProducts(product.category, product.id);

  navigateTo('product-detail');
}

function changeDetailImage(imgUrl, thumbEl) {
  const mainImg = document.getElementById('detail-main-img');
  if (mainImg) mainImg.src = imgUrl;
  document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
  if (thumbEl) thumbEl.classList.add('active');
}

function selectDetailColor(color, el) {
  currentDetailColor = color;
  const label = document.getElementById('selected-color-name');
  if (label) label.innerText = color;
  document.querySelectorAll('#detail-colors-container .color-swatch-btn').forEach(btn => btn.classList.remove('active'));
  if (el) el.classList.add('active');
}

function selectDetailSize(size, el) {
  currentDetailSize = size;
  const label = document.getElementById('selected-size-name');
  if (label) label.innerText = size;
  document.querySelectorAll('#detail-sizes-container .size-choice-btn').forEach(btn => btn.classList.remove('active'));
  if (el) el.classList.add('active');
}

function adjustDetailQuantity(delta) {
  currentDetailQty = Math.max(1, currentDetailQty + delta);
  const qtyVal = document.getElementById('detail-quantity-val');
  if (qtyVal) qtyVal.innerText = currentDetailQty;
}

function addToCartFromDetail() {
  if (!currentDetailProduct) return;
  addToCart(currentDetailProduct.id, currentDetailSize, currentDetailColor, currentDetailQty);
  showToast(`Added ${currentDetailQty}x "${currentDetailProduct.name}" to Bag!`, 'success');
  toggleCartDrawer(true);
}

function buyNowFromDetail() {
  if (!currentDetailProduct) return;
  addToCart(currentDetailProduct.id, currentDetailSize, currentDetailColor, currentDetailQty);
  navigateTo('checkout');
}

function toggleDetailWishlist() {
  if (!currentDetailProduct) return;
  toggleWishlist(currentDetailProduct.id);
  const wishBtn = document.getElementById('detail-wishlist-btn');
  if (wishBtn) {
    const isWished = wishlist.includes(currentDetailProduct.id);
    wishBtn.innerText = isWished ? '❤️' : '🤍';
    wishBtn.classList.toggle('active', isWished);
  }
}

function switchDetailTab(tabKey) {
  const tabs = document.querySelectorAll('.product-tabs-container .tab-btn');
  const panels = document.querySelectorAll('.product-tabs-container .tab-panel');

  tabs.forEach(t => t.classList.remove('active'));
  panels.forEach(p => {
    p.style.display = 'none';
    p.classList.remove('active');
  });

  const activeBtn = Array.from(tabs).find(t => t.getAttribute('onclick').includes(tabKey));
  const activePanel = document.getElementById(`tab-panel-${tabKey}`);

  if (activeBtn) activeBtn.classList.add('active');
  if (activePanel) {
    activePanel.style.display = 'block';
    activePanel.classList.add('active');
  }
}

function renderProductReviews(productId) {
  const listEl = document.getElementById('detail-reviews-list');
  const countEl = document.getElementById('tab-reviews-count');
  if (!listEl) return;

  const reviews = defaultReviews[productId] || [
    { name: "Verified Buyer", rating: 5, date: "Aug 12, 2026", comment: "Exceptional craftsmanship and true to size fit. Highly recommended!" }
  ];

  if (countEl) countEl.innerText = reviews.length;

  listEl.innerHTML = reviews.map(r => `
    <div class="review-item">
      <div class="review-header">
        <span class="reviewer-name">${r.name}</span>
        <span class="review-date">${r.date}</span>
      </div>
      <div class="star-rating" style="font-size: 0.85rem; margin-bottom: 6px;">
        ${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}
      </div>
      <p class="review-text">${r.comment}</p>
    </div>
  `).join('');
}

function setReviewRating(rating) {
  currentReviewRatingVal = rating;
  const stars = document.querySelectorAll('#star-rating-input .star-choice');
  stars.forEach(s => {
    const val = Number(s.dataset.val);
    s.classList.toggle('active', val <= rating);
  });
}

function handleReviewSubmit(e) {
  e.preventDefault();
  const nameInput = document.getElementById('review-user-name');
  const commentInput = document.getElementById('review-user-comment');
  if (!currentDetailProduct || !nameInput || !commentInput) return;

  const newReview = {
    name: nameInput.value.trim(),
    rating: currentReviewRatingVal,
    date: "Just now",
    comment: commentInput.value.trim()
  };

  if (!defaultReviews[currentDetailProduct.id]) {
    defaultReviews[currentDetailProduct.id] = [];
  }
  defaultReviews[currentDetailProduct.id].unshift(newReview);

  renderProductReviews(currentDetailProduct.id);
  nameInput.value = '';
  commentInput.value = '';
  showToast("Thank you! Your verified review has been published.", "success");
}

function renderRelatedProducts(category, excludeId) {
  const container = document.getElementById('related-products-grid');
  if (!container) return;

  const related = products
    .filter(p => p.category === category && p.id !== excludeId)
    .slice(0, 4);

  container.innerHTML = related.map(p => createProductCardHTML(p)).join('');
}


// ==========================================================================
// 7. SHOPPING CART SYSTEM & DRAWER
// ==========================================================================

function quickAddToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const defaultSize = product.sizes[0] || 'M';
  const defaultColor = product.colors[0] || 'Pink';

  addToCart(productId, defaultSize, defaultColor, 1);
  showToast(`Added "${product.name}" (${defaultSize}) to Bag!`, 'success');
  toggleCartDrawer(true);
}

function addToCart(productId, size, color, quantity = 1) {
  const existing = cart.find(item => item.productId === productId && item.size === size && item.color === color);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ productId, size, color, quantity });
  }
  saveCart();
  renderCartDrawer();
}

function updateCartQuantity(index, delta) {
  if (cart[index]) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
      showToast("Item removed from Bag", "info");
    }
    saveCart();
    renderCartDrawer();
    renderCartPage();
  }
}

function removeCartItem(index) {
  if (cart[index]) {
    cart.splice(index, 1);
    saveCart();
    renderCartDrawer();
    renderCartPage();
    showToast("Item removed from Bag", "info");
  }
}

function clearCart() {
  cart = [];
  appliedCoupon = null;
  saveCart();
  renderCartDrawer();
  renderCartPage();
  showToast("Shopping Bag emptied", "info");
}

function toggleCartDrawer(forceOpen = false) {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-drawer-overlay');
  if (!drawer || !overlay) return;

  if (forceOpen) {
    drawer.classList.add('open');
    overlay.classList.add('open');
    renderCartDrawer();
  } else {
    drawer.classList.toggle('open');
    overlay.classList.toggle('open');
    if (drawer.classList.contains('open')) {
      renderCartDrawer();
    }
  }
}

function calculateCartTotals() {
  let subtotal = 0;
  cart.forEach(item => {
    const prod = products.find(p => p.id === item.productId);
    if (prod) {
      subtotal += prod.price * item.quantity;
    }
  });

  let discount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.percent) {
      discount = Math.round(subtotal * (appliedCoupon.percent / 100));
    } else if (appliedCoupon.fixed) {
      discount = Math.min(subtotal, appliedCoupon.fixed);
    }
  }

  const freeShippingThreshold = 1499;
  const shipping = (subtotal >= freeShippingThreshold || subtotal === 0) ? 0 : 149;
  const tax = (subtotal - discount > 0) ? Math.round((subtotal - discount) * 0.05) : 0;
  const total = Math.max(0, subtotal - discount + shipping + tax);

  return { subtotal, discount, shipping, tax, total, freeShippingThreshold };
}

// Drawer View Rendering
function renderCartDrawer() {
  const listContainer = document.getElementById('drawer-cart-items');
  const subtotalEl = document.getElementById('drawer-subtotal');
  const footerEl = document.getElementById('drawer-cart-footer');
  if (!listContainer) return;

  if (cart.length === 0) {
    listContainer.innerHTML = `
      <div style="text-align: center; padding: 40px 10px;">
        <div style="font-size: 3rem; margin-bottom: 10px;">🛍️</div>
        <h4>Your Bag is Empty</h4>
        <p style="color: var(--gray-600); font-size: 0.9rem; margin-top: 6px;">Discover latest seasonal fashion edits.</p>
        <button type="button" class="btn btn-primary btn-sm mt-16" onclick="toggleCartDrawer(); filterShopCategory('all');">
          Start Shopping
        </button>
      </div>
    `;
    if (footerEl) footerEl.style.display = 'none';
    if (subtotalEl) subtotalEl.innerText = formatPrice(0);
    return;
  }

  if (footerEl) footerEl.style.display = 'block';

  listContainer.innerHTML = cart.map((item, idx) => {
    const prod = products.find(p => p.id === item.productId);
    if (!prod) return '';
    return `
      <div class="mini-cart-item">
        <img src="${prod.image}" alt="${prod.name}" class="mini-cart-thumb">
        <div class="mini-cart-details">
          <div class="mini-cart-title">${prod.name}</div>
          <div class="mini-cart-sub">Size: <strong>${item.size}</strong> | Color: <strong>${item.color}</strong></div>
          <div class="mini-cart-price">${formatPrice(prod.price)}</div>
        </div>
        <div class="quantity-stepper" style="height: 32px;">
          <button type="button" class="qty-btn" style="width: 28px; height: 30px; font-size: 0.9rem;" onclick="updateCartQuantity(${idx}, -1)">−</button>
          <span class="qty-display" style="width: 28px; font-size: 0.85rem;">${item.quantity}</span>
          <button type="button" class="qty-btn" style="width: 28px; height: 30px; font-size: 0.9rem;" onclick="updateCartQuantity(${idx}, 1)">+</button>
        </div>
        <button type="button" onclick="removeCartItem(${idx})" style="color: var(--danger); font-size: 0.9rem; padding: 4px;" title="Remove">✕</button>
      </div>
    `;
  }).join('');

  const totals = calculateCartTotals();
  if (subtotalEl) subtotalEl.innerText = formatPrice(totals.subtotal);
}

// Dedicated Cart Page Rendering
function renderCartPage() {
  const content = document.getElementById('cart-layout-content');
  const emptyState = document.getElementById('cart-empty-state');
  const listContainer = document.getElementById('cart-items-container');
  if (!content || !emptyState || !listContainer) return;

  if (cart.length === 0) {
    content.style.display = 'none';
    emptyState.style.display = 'block';
    return;
  }

  content.style.display = 'grid';
  emptyState.style.display = 'none';

  listContainer.innerHTML = cart.map((item, idx) => {
    const prod = products.find(p => p.id === item.productId);
    if (!prod) return '';
    const itemTotal = prod.price * item.quantity;
    return `
      <div class="cart-item-row">
        <img src="${prod.image}" alt="${prod.name}" class="cart-item-thumb">
        <div class="cart-item-info">
          <h4>${prod.name}</h4>
          <div class="cart-item-variant">Size: <strong>${item.size}</strong> | Color: <strong>${item.color}</strong></div>
          <div class="cart-item-price">${formatPrice(prod.price)} each</div>
        </div>
        <div class="quantity-stepper">
          <button type="button" class="qty-btn" onclick="updateCartQuantity(${idx}, -1)">−</button>
          <span class="qty-display">${item.quantity}</span>
          <button type="button" class="qty-btn" onclick="updateCartQuantity(${idx}, 1)">+</button>
        </div>
        <div class="cart-item-actions">
          <div class="cart-item-total">${formatPrice(itemTotal)}</div>
          <button type="button" class="remove-cart-item-btn" onclick="removeCartItem(${idx})">Remove ✕</button>
        </div>
      </div>
    `;
  }).join('');

  const totals = calculateCartTotals();

  // Free shipping bar calculation
  const freeMsg = document.getElementById('free-shipping-msg');
  const freeProgress = document.getElementById('free-shipping-progress');
  if (freeMsg && freeProgress) {
    if (totals.subtotal >= totals.freeShippingThreshold) {
      freeMsg.innerHTML = `🎉 Congratulations! You unlocked <strong>FREE Global Express Shipping</strong>!`;
      freeProgress.style.width = '100%';
    } else {
      const needed = totals.freeShippingThreshold - totals.subtotal;
      const pct = Math.min(100, Math.round((totals.subtotal / totals.freeShippingThreshold) * 100));
      freeMsg.innerHTML = `Add <strong>${formatPrice(needed)}</strong> more to unlock <strong>FREE Global Express Shipping</strong>!`;
      freeProgress.style.width = `${pct}%`;
    }
  }

  // Summary labels
  const subtotalEl = document.getElementById('summary-subtotal');
  const shippingEl = document.getElementById('summary-shipping');
  const taxEl = document.getElementById('summary-tax');
  const totalEl = document.getElementById('summary-total');
  const discRow = document.getElementById('summary-discount-row');
  const discVal = document.getElementById('summary-discount-val');
  const discCode = document.getElementById('summary-discount-code');

  if (subtotalEl) subtotalEl.innerText = formatPrice(totals.subtotal);
  if (shippingEl) shippingEl.innerText = totals.shipping === 0 ? "FREE" : formatPrice(totals.shipping);
  if (taxEl) taxEl.innerText = formatPrice(totals.tax);
  if (totalEl) totalEl.innerText = formatPrice(totals.total);

  if (discRow && discVal && discCode) {
    if (appliedCoupon && totals.discount > 0) {
      discRow.style.display = 'flex';
      discCode.innerText = appliedCoupon.code;
      discVal.innerText = `−${formatPrice(totals.discount)}`;
    } else {
      discRow.style.display = 'none';
    }
  }
}

// Coupon Code Logic
function applyCouponCode() {
  const input = document.getElementById('cart-coupon-input');
  const feedback = document.getElementById('coupon-feedback-msg');
  if (!input || !feedback) return;

  const code = input.value.trim().toUpperCase();
  if (!code) {
    feedback.className = 'coupon-feedback error';
    feedback.innerText = "Please enter a valid promo code.";
    return;
  }

  if (code === 'STYLE40') {
    appliedCoupon = { code: 'STYLE40', percent: 40 };
    feedback.className = 'coupon-feedback success';
    feedback.innerText = "Promo code STYLE40 applied! 40% discount granted.";
    showToast("40% Promo Discount Applied!", "success");
  } else if (code === 'FIRST10') {
    appliedCoupon = { code: 'FIRST10', fixed: 500 };
    feedback.className = 'coupon-feedback success';
    feedback.innerText = "Promo code FIRST10 applied! ₹500 welcome discount granted.";
    showToast("₹500 Promo Discount Applied!", "success");
  } else if (code === 'SAVE20') {
    appliedCoupon = { code: 'SAVE20', percent: 20 };
    feedback.className = 'coupon-feedback success';
    feedback.innerText = "Promo code SAVE20 applied! 20% discount granted.";
    showToast("20% Promo Discount Applied!", "success");
  } else {
    feedback.className = 'coupon-feedback error';
    feedback.innerText = "Invalid or expired promotional code.";
    return;
  }

  renderCartPage();
}

function proceedToCheckout() {
  if (cart.length === 0) {
    showToast("Your cart is empty. Please add garments first.", "warn");
    return;
  }
  navigateTo('checkout');
}


// ==========================================================================
// 8. CHECKOUT & ORDER PLACEMENT
// ==========================================================================

function renderCheckoutPage() {
  if (cart.length === 0) {
    navigateTo('cart');
    return;
  }

  const miniList = document.getElementById('checkout-mini-list');
  const countEl = document.getElementById('checkout-items-count');
  if (countEl) countEl.innerText = cart.reduce((acc, i) => acc + i.quantity, 0);

  if (miniList) {
    miniList.innerHTML = cart.map(item => {
      const prod = products.find(p => p.id === item.productId);
      if (!prod) return '';
      return `
        <div class="mini-cart-item">
          <img src="${prod.image}" alt="${prod.name}" class="mini-cart-thumb">
          <div class="mini-cart-details">
            <div class="mini-cart-title">${prod.name}</div>
            <div class="mini-cart-sub">Qty: ${item.quantity} | Size: ${item.size} | ${item.color}</div>
          </div>
          <div class="mini-cart-price">${formatPrice(prod.price * item.quantity)}</div>
        </div>
      `;
    }).join('');
  }

  updateCheckoutTotals();
}

function updateCheckoutShipping(extraFee) {
  checkoutShippingFee = extraFee;
  updateCheckoutTotals();
}

function updateCheckoutTotals() {
  const totals = calculateCartTotals();
  const subtotalEl = document.getElementById('checkout-subtotal');
  const shippingEl = document.getElementById('checkout-shipping');
  const taxEl = document.getElementById('checkout-tax');
  const totalEl = document.getElementById('checkout-total');
  const discRow = document.getElementById('checkout-discount-row');
  const discVal = document.getElementById('checkout-discount-val');

  const finalShipping = totals.shipping + checkoutShippingFee;
  const finalTotal = Math.max(0, totals.subtotal - totals.discount + finalShipping + totals.tax);

  if (subtotalEl) subtotalEl.innerText = formatPrice(totals.subtotal);
  if (shippingEl) shippingEl.innerText = finalShipping === 0 ? "FREE" : formatPrice(finalShipping);
  if (taxEl) taxEl.innerText = formatPrice(totals.tax);
  if (totalEl) totalEl.innerText = formatPrice(finalTotal);

  if (discRow && discVal) {
    if (appliedCoupon && totals.discount > 0) {
      discRow.style.display = 'flex';
      discVal.innerText = `−${formatPrice(totals.discount)}`;
    } else {
      discRow.style.display = 'none';
    }
  }
}

function applyCheckoutCoupon() {
  const input = document.getElementById('checkout-coupon-input');
  const feedback = document.getElementById('checkout-coupon-feedback');
  if (!input || !feedback) return;

  const code = input.value.trim().toUpperCase();
  if (code === 'STYLE40' || code === 'FIRST10' || code === 'SAVE20') {
    if (code === 'STYLE40') appliedCoupon = { code: 'STYLE40', percent: 40 };
    if (code === 'FIRST10') appliedCoupon = { code: 'FIRST10', fixed: 500 };
    if (code === 'SAVE20') appliedCoupon = { code: 'SAVE20', percent: 20 };
    feedback.className = 'coupon-feedback success';
    feedback.innerText = `Code ${code} applied successfully!`;
    updateCheckoutTotals();
    showToast("Coupon applied!", "success");
  } else {
    feedback.className = 'coupon-feedback error';
    feedback.innerText = "Invalid coupon code.";
  }
}

function togglePaymentFields(type) {
  const cardPanel = document.getElementById('payment-card-panel');
  const upiPanel = document.getElementById('payment-upi-panel');
  const codPanel = document.getElementById('payment-cod-panel');

  if (cardPanel) cardPanel.style.display = (type === 'card') ? 'block' : 'none';
  if (upiPanel) upiPanel.style.display = (type === 'upi') ? 'block' : 'none';
  if (codPanel) codPanel.style.display = (type === 'cod') ? 'block' : 'none';
}

function handlePlaceOrder(e) {
  e.preventDefault();

  const name = document.getElementById('checkout-first-name').value.trim();
  const email = document.getElementById('checkout-email').value.trim();
  const phone = document.getElementById('checkout-phone').value.trim();
  const address = document.getElementById('checkout-address').value.trim();
  const city = document.getElementById('checkout-city').value.trim();
  const state = document.getElementById('checkout-state').value.trim();
  const pincode = document.getElementById('checkout-pincode').value.trim();
  const saveAddrChecked = document.getElementById('checkout-save-address').checked;

  const totals = calculateCartTotals();
  const finalTotal = Math.max(0, totals.subtotal - totals.discount + totals.shipping + checkoutShippingFee + totals.tax);

  // Generate unique Order ID
  const randomNum = Math.floor(100000 + Math.random() * 900000);
  const orderId = `STH-${randomNum}`;

  const orderItems = cart.map(item => {
    const prod = products.find(p => p.id === item.productId);
    return {
      productId: item.productId,
      name: prod ? prod.name : "Fashion Item",
      size: item.size,
      color: item.color,
      price: prod ? prod.price : 0,
      quantity: item.quantity,
      image: prod ? prod.image : ""
    };
  });

  const fullAddress = `${address}, ${city}, ${state} ${pincode}`;

  const newOrder = {
    orderId,
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    status: "Processing",
    trackingStep: 2,
    items: orderItems,
    total: finalTotal,
    shippingAddress: fullAddress
  };

  orders.unshift(newOrder);
  saveOrders();

  // Save address if checked
  if (saveAddrChecked) {
    userAddresses.push({
      label: `${city} Residence`,
      street: address,
      city,
      state,
      zip: pincode,
      isDefault: false
    });
    saveAddresses();
  }

  // Update user name/email if currently generic
  if (user) {
    user.name = name;
    user.email = email;
    user.phone = phone;
    saveUser();
  }

  // Empty cart
  cart = [];
  appliedCoupon = null;
  saveCart();

  // Render Order Confirmation
  renderOrderSuccess(newOrder);
  navigateTo('order-success');
}

function renderOrderSuccess(order) {
  const trackingEl = document.getElementById('success-tracking-id');
  const itemsContainer = document.getElementById('success-items-list');
  const totalEl = document.getElementById('success-total-amount');
  const deliveryDateEl = document.getElementById('success-delivery-date');

  if (trackingEl) trackingEl.innerText = order.orderId;
  if (totalEl) totalEl.innerText = formatPrice(order.total);

  // Calculate estimated date (+4 days)
  const estDate = new Date();
  estDate.setDate(estDate.getDate() + 4);
  if (deliveryDateEl) {
    deliveryDateEl.innerText = estDate.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
  }

  if (itemsContainer) {
    itemsContainer.innerHTML = order.items.map(item => `
      <div class="success-item-row">
        <span>${item.quantity}x ${item.name} (${item.size}, ${item.color})</span>
        <strong>${formatPrice(item.price * item.quantity)}</strong>
      </div>
    `).join('');
  }
}

function copyTrackingNumber() {
  const trackingEl = document.getElementById('success-tracking-id');
  if (!trackingEl) return;
  const text = trackingEl.innerText.trim();
  
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text)
      .then(() => showToast("Tracking Number copied to clipboard! 📋", "success"))
      .catch(() => fallbackCopyTracking(text));
  } else {
    fallbackCopyTracking(text);
  }
}

function fallbackCopyTracking(text) {
  try {
    const tempInput = document.createElement('textarea');
    tempInput.value = text;
    tempInput.style.position = 'fixed';
    tempInput.style.opacity = '0';
    document.body.appendChild(tempInput);
    tempInput.focus();
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    showToast("Tracking Number copied to clipboard! 📋", "success");
  } catch (err) {
    showToast(`Order Tracking ID: ${text}`, "info");
  }
}


// ==========================================================================
// 9. USER ACCOUNT PORTAL
// ==========================================================================

function handleAccountClick() {
  navigateTo('account');
}

function setAccountTab(tabKey) {
  const navBtns = document.querySelectorAll('.account-tabs-nav .acc-tab-btn');
  const panels = document.querySelectorAll('.account-tab-content .account-panel');

  navBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabKey);
  });

  panels.forEach(panel => {
    panel.style.display = (panel.id === `acc-panel-${tabKey}`) ? 'block' : 'none';
  });

  if (tabKey === 'orders') renderAccountOrders();
  if (tabKey === 'wishlist') renderAccountWishlist();
  if (tabKey === 'addresses') renderAccountAddresses();
}

function renderAccountView() {
  const nameHead = document.getElementById('account-name-heading');
  const emailHead = document.getElementById('account-email-heading');
  const avatar = document.getElementById('account-avatar');

  if (nameHead && user) nameHead.innerText = user.name;
  if (emailHead && user) emailHead.innerText = user.email;
  if (avatar && user) {
    const initials = user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    avatar.innerText = initials || "SH";
  }

  const nameInput = document.getElementById('profile-name-input');
  const emailInput = document.getElementById('profile-email-input');
  const phoneInput = document.getElementById('profile-phone-input');
  const currInput = document.getElementById('profile-currency-input');

  if (nameInput && user) nameInput.value = user.name;
  if (emailInput && user) emailInput.value = user.email;
  if (phoneInput && user) phoneInput.value = user.phone || "";
  if (currInput && user) currInput.value = currentCurrency;

  const ordersCount = document.getElementById('acc-orders-count');
  if (ordersCount) ordersCount.innerText = orders.length;

  renderAccountOrders();
  renderAccountWishlist();
  renderAccountAddresses();
}

function toggleEditProfile() {
  const nameInput = document.getElementById('profile-name-input');
  const emailInput = document.getElementById('profile-email-input');
  const phoneInput = document.getElementById('profile-phone-input');
  const currInput = document.getElementById('profile-currency-input');
  const saveBtnRow = document.getElementById('profile-save-btn-row');
  const editBtn = document.getElementById('btn-edit-profile');

  const isEditing = !nameInput.disabled;

  nameInput.disabled = isEditing;
  emailInput.disabled = isEditing;
  phoneInput.disabled = isEditing;
  currInput.disabled = isEditing;

  if (saveBtnRow) saveBtnRow.style.display = isEditing ? 'none' : 'block';
  if (editBtn) editBtn.innerText = isEditing ? 'Edit Info' : 'Cancel';
}

function saveProfileChanges(e) {
  e.preventDefault();
  user.name = document.getElementById('profile-name-input').value.trim();
  user.email = document.getElementById('profile-email-input').value.trim();
  user.phone = document.getElementById('profile-phone-input').value.trim();
  
  const chosenCurrency = document.getElementById('profile-currency-input').value;
  setCurrency(chosenCurrency);

  saveUser();
  toggleEditProfile();
  renderAccountView();
  showToast("Profile details updated successfully!", "success");
}

function renderAccountOrders() {
  const container = document.getElementById('account-orders-list');
  if (!container) return;

  if (orders.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px;">
        <div style="font-size: 2.5rem; margin-bottom: 8px;">📦</div>
        <h4>No Past Orders Yet</h4>
        <p style="color: var(--gray-600); font-size: 0.9rem;">Your confirmed orders and parcel tracking will appear here.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = orders.map(ord => `
    <div class="order-history-card">
      <div class="order-card-top">
        <div>
          <strong>Order #${ord.orderId}</strong>
          <span style="color: var(--gray-600); margin-left: 8px;">Placed on ${ord.date}</span>
        </div>
        <span class="order-status-badge ${ord.status.toLowerCase()}">${ord.status}</span>
      </div>
      <div style="display: flex; flex-direction: column; gap: 8px; margin: 12px 0;">
        ${ord.items.map(item => `
          <div style="display: flex; justify-content: space-between; font-size: 0.9rem;">
            <span>${item.quantity}x ${item.name} (${item.size}, ${item.color})</span>
            <span>${formatPrice(item.price * item.quantity)}</span>
          </div>
        `).join('')}
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--gray-100); padding-top: 10px;">
        <div>Ship to: <strong>${ord.shippingAddress}</strong></div>
        <div>Total: <strong style="color: var(--pink); font-size: 1.1rem;">${formatPrice(ord.total)}</strong></div>
      </div>
    </div>
  `).join('');
}

function renderAccountWishlist() {
  const grid = document.getElementById('account-wishlist-grid');
  if (!grid) return;

  const wishedProducts = products.filter(p => wishlist.includes(p.id));
  if (wishedProducts.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px;">
        <div style="font-size: 2.5rem; margin-bottom: 8px;">🤍</div>
        <h4>Your Wishlist is Empty</h4>
        <p style="color: var(--gray-600); font-size: 0.9rem;">Save styles you love while browsing to purchase later.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = wishedProducts.map(p => createProductCardHTML(p)).join('');
}

function renderAccountAddresses() {
  const grid = document.getElementById('account-addresses-grid');
  if (!grid) return;

  grid.innerHTML = userAddresses.map((addr, idx) => `
    <div class="address-card ${addr.isDefault ? 'default' : ''}">
      <span class="addr-tag">${addr.label}</span>
      <button type="button" class="btn-delete-addr" onclick="deleteAddress(${idx})" title="Delete">✕</button>
      <p style="font-size: 0.95rem; font-weight: 600; margin: 4px 0;">${addr.street}</p>
      <p style="font-size: 0.85rem; color: var(--gray-600);">${addr.city}, ${addr.state} ${addr.zip}</p>
    </div>
  `).join('');
}

function deleteAddress(index) {
  userAddresses.splice(index, 1);
  saveAddresses();
  renderAccountAddresses();
  showToast("Address removed", "info");
}

function openAddAddressModal() {
  const modal = document.getElementById('address-modal');
  const backdrop = document.getElementById('address-modal-backdrop');
  if (modal && backdrop) {
    modal.classList.add('open');
    backdrop.classList.add('open');
  }
}

function closeAddressModal() {
  const modal = document.getElementById('address-modal');
  const backdrop = document.getElementById('address-modal-backdrop');
  if (modal && backdrop) {
    modal.classList.remove('open');
    backdrop.classList.remove('open');
  }
}

function handleNewAddressSubmit(e) {
  e.preventDefault();
  const label = document.getElementById('new-addr-label').value.trim();
  const street = document.getElementById('new-addr-street').value.trim();
  const city = document.getElementById('new-addr-city').value.trim();
  const state = document.getElementById('new-addr-state').value.trim();
  const zip = document.getElementById('new-addr-zip').value.trim();

  userAddresses.push({ label, street, city, state, zip, isDefault: false });
  saveAddresses();
  closeAddressModal();
  renderAccountAddresses();
  showToast("New address saved successfully!", "success");
}

function savePreferences(e) {
  e.preventDefault();
  showToast("Sizing and style profile saved!", "success");
}

function handleLogout() {
  showToast("Signed out of demo session", "info");
  openAuthModal();
}


// ==========================================================================
// 10. WISHLIST MANAGEMENT & MODAL
// ==========================================================================

function toggleWishlist(productId) {
  const idx = wishlist.indexOf(productId);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToast("Removed from Wishlist", "info");
  } else {
    wishlist.push(productId);
    showToast("Saved to your Wishlist! 🤍", "success");
  }
  saveWishlist();

  // Update card heart buttons across all grids
  document.querySelectorAll(`.product-wish-btn`).forEach(btn => {
    const card = btn.closest('.product-card');
    if (card && card.id === `product-card-${productId}`) {
      const isWished = wishlist.includes(productId);
      btn.innerText = isWished ? '❤️' : '🤍';
      btn.classList.toggle('active', isWished);
    }
  });

  renderWishlistModal();
}

function openWishlistModal() {
  const modal = document.getElementById('wishlist-modal');
  const backdrop = document.getElementById('wishlist-modal-backdrop');
  if (modal && backdrop) {
    modal.classList.add('open');
    backdrop.classList.add('open');
    renderWishlistModal();
  }
}

function closeWishlistModal() {
  const modal = document.getElementById('wishlist-modal');
  const backdrop = document.getElementById('wishlist-modal-backdrop');
  if (modal && backdrop) {
    modal.classList.remove('open');
    backdrop.classList.remove('open');
  }
}

function renderWishlistModal() {
  const grid = document.getElementById('modal-wishlist-grid');
  const emptyState = document.getElementById('wishlist-empty-state');
  if (!grid) return;

  const wished = products.filter(p => wishlist.includes(p.id));
  if (wished.length === 0) {
    grid.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  grid.innerHTML = wished.map(p => `
    <div class="wishlist-card">
      <img src="${p.image}" alt="${p.name}" class="wishlist-thumb">
      <div class="wishlist-info" style="flex-grow: 1;">
        <h5>${p.name}</h5>
        <div style="font-weight: 700; color: var(--pink); margin: 4px 0;">${formatPrice(p.price)}</div>
        <div style="display: flex; gap: 8px; margin-top: 8px;">
          <button type="button" class="btn btn-primary btn-sm" onclick="quickAddToCart(${p.id}); closeWishlistModal();">
            Add to Bag
          </button>
          <button type="button" class="btn btn-outline-danger btn-sm" onclick="toggleWishlist(${p.id})">
            Remove
          </button>
        </div>
      </div>
    </div>
  `).join('');
}


// ==========================================================================
// 11. QUICK VIEW & SIZE GUIDE MODALS
// ==========================================================================

function openQuickView(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const content = document.getElementById('quick-view-content');
  const modal = document.getElementById('quick-view-modal');
  const backdrop = document.getElementById('quick-view-backdrop');

  if (!content || !modal || !backdrop) return;

  content.innerHTML = `
    <div>
      <img src="${product.image}" alt="${product.name}" class="quick-view-img">
    </div>
    <div>
      <span class="product-category-tag">${product.category.toUpperCase()}'S</span>
      <h2 style="font-size: 1.8rem; margin: 6px 0 10px;">${product.name}</h2>
      <div style="color: #FFA000; font-size: 0.9rem; margin-bottom: 12px;">★ ${product.rating.toFixed(1)} (${product.reviewsCount} reviews)</div>
      <div class="product-price-row" style="font-size: 1.6rem; margin-bottom: 16px;">
        <span class="product-price">${formatPrice(product.price)}</span>
        ${product.originalPrice ? `<span class="product-original-price">${formatPrice(product.originalPrice)}</span>` : ''}
      </div>
      <p style="font-size: 0.92rem; color: var(--gray-700); line-height: 1.6; margin-bottom: 20px;">${product.description}</p>
      
      <div style="margin-bottom: 16px;">
        <strong>Available Sizes:</strong> ${product.sizes.join(', ')}
      </div>

      <div style="display: flex; gap: 12px;">
        <button type="button" class="btn btn-primary flex-grow" onclick="quickAddToCart(${product.id}); closeQuickViewModal();">
          🛍️ Add to Shopping Bag
        </button>
        <button type="button" class="btn btn-outline" onclick="closeQuickViewModal(); openProductDetail(${product.id});">
          View Full Details →
        </button>
      </div>
    </div>
  `;

  modal.classList.add('open');
  backdrop.classList.add('open');
}

function closeQuickViewModal() {
  const modal = document.getElementById('quick-view-modal');
  const backdrop = document.getElementById('quick-view-backdrop');
  if (modal && backdrop) {
    modal.classList.remove('open');
    backdrop.classList.remove('open');
  }
}

function openSizeGuideModal() {
  const modal = document.getElementById('size-guide-modal');
  const backdrop = document.getElementById('size-guide-backdrop');
  if (modal && backdrop) {
    modal.classList.add('open');
    backdrop.classList.add('open');
  }
}

function closeSizeGuideModal() {
  const modal = document.getElementById('size-guide-modal');
  const backdrop = document.getElementById('size-guide-backdrop');
  if (modal && backdrop) {
    modal.classList.remove('open');
    backdrop.classList.remove('open');
  }
}


// ==========================================================================
// 12. AUTH MODAL (SIMULATED LOGIN / REGISTER)
// ==========================================================================

function openAuthModal() {
  const modal = document.getElementById('auth-modal');
  const backdrop = document.getElementById('auth-modal-backdrop');
  if (modal && backdrop) {
    modal.classList.add('open');
    backdrop.classList.add('open');
  }
}

function closeAuthModal() {
  const modal = document.getElementById('auth-modal');
  const backdrop = document.getElementById('auth-modal-backdrop');
  if (modal && backdrop) {
    modal.classList.remove('open');
    backdrop.classList.remove('open');
  }
}

function switchAuthTab(tab) {
  const loginBtn = document.getElementById('tab-login-btn');
  const regBtn = document.getElementById('tab-register-btn');
  const loginPanel = document.getElementById('auth-login-panel');
  const regPanel = document.getElementById('auth-register-panel');

  if (tab === 'login') {
    loginBtn.classList.add('active');
    regBtn.classList.remove('active');
    loginPanel.style.display = 'block';
    regPanel.style.display = 'none';
  } else {
    regBtn.classList.add('active');
    loginBtn.classList.remove('active');
    regPanel.style.display = 'block';
    loginPanel.style.display = 'none';
  }
}

function handleLoginSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value.trim();
  user.email = email;
  saveUser();
  closeAuthModal();
  renderAccountView();
  updateBadges();
  showToast(`Welcome back, ${user.name}!`, "success");
}

function handleRegisterSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();

  user.name = name;
  user.email = email;
  saveUser();
  closeAuthModal();
  renderAccountView();
  updateBadges();
  showToast(`Account created for ${name}! Welcome to StyleHub VIP.`, "success");
}


// ==========================================================================
// 13. CONTACT FORM, FAQ & NEWSLETTER
// ==========================================================================

function toggleFaq(buttonEl) {
  const item = buttonEl.closest('.faq-item');
  if (item) {
    item.classList.toggle('active');
  }
}

function handleContactSubmit(e) {
  e.preventDefault();
  e.target.reset();
  showToast("Message dispatched to Client Concierge! We will respond within 2 hours.", "success");
}

function handleNewsletterSubmit(e) {
  e.preventDefault();
  e.target.reset();
  showToast("Welcome to StyleHub VIP Society! Check your inbox for your $15 voucher.", "success");
}


// ==========================================================================
// 14. TOAST NOTIFICATION SYSTEM
// ==========================================================================

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerText = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 3200);
}


// ==========================================================================
// 15. CURRENCY SWITCHER & COUNTDOWN TIMER
// ==========================================================================

function setCurrency(newCurrency) {
  if (currencyRates[newCurrency]) {
    currentCurrency = newCurrency;
    const currSelect = document.getElementById('currency-select');
    if (currSelect) currSelect.value = newCurrency;

    // Re-render components with new prices
    renderHomeFeatured('all');
    renderShopProducts();
    if (currentDetailProduct) openProductDetail(currentDetailProduct.id);
    renderCartDrawer();
    renderCartPage();
    updateCheckoutTotals();
  }
}

function setupCountdownTimer() {
  let seconds = 2 * 86400 + 14 * 3600 + 36 * 60 + 50;

  setInterval(() => {
    seconds--;
    if (seconds <= 0) seconds = 86400 * 3;

    const d = Math.floor(seconds / 86400);
    const h = Math.floor((seconds % 86400) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;

    const daysEl = document.getElementById('time-days');
    const hoursEl = document.getElementById('time-hours');
    const minsEl = document.getElementById('time-mins');
    const secsEl = document.getElementById('time-secs');

    if (daysEl) daysEl.innerText = String(d).padStart(2, '0');
    if (hoursEl) hoursEl.innerText = String(h).padStart(2, '0');
    if (minsEl) minsEl.innerText = String(m).padStart(2, '0');
    if (secsEl) secsEl.innerText = String(s).padStart(2, '0');
  }, 1000);
}


// ==========================================================================
// 16. INITIALIZATION ON DOM CONTENT LOADED
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggles
  const menuBtn = document.getElementById('mobile-menu-btn');
  const closeNavBtn = document.getElementById('close-mobile-nav');
  if (menuBtn) menuBtn.addEventListener('click', toggleMobileNav);
  if (closeNavBtn) closeNavBtn.addEventListener('click', closeMobileNav);

  // Currency select in top announcement
  const currSelect = document.getElementById('currency-select');
  if (currSelect) {
    currSelect.addEventListener('change', (e) => setCurrency(e.target.value));
  }

  // Setup search dropdown
  setupSearch();

  // Setup seasonal promo countdown
  setupCountdownTimer();

  // Initial updates & renders
  updateBadges();
  renderHomeFeatured('all');
  renderCartDrawer();

  // Desktop navigation links click handlers
  document.querySelectorAll('.main-nav .nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const view = link.getAttribute('data-view');
      const filter = link.getAttribute('data-filter');
      if (filter && filter !== 'all') {
        filterShopCategory(filter);
      } else if (filter === 'all') {
        filterShopCategory('all');
      } else if (view) {
        navigateTo(view);
      }
    });
  });

  // Listen to hash changes for deep linking
  function handleHash() {
    const hash = window.location.hash.replace('#', '');
    if (['home', 'shop', 'women', 'men', 'kids', 'about', 'contact', 'cart', 'checkout', 'account'].includes(hash)) {
      if (hash === 'women' || hash === 'men' || hash === 'kids') {
        filterShopCategory(hash);
      } else {
        navigateTo(hash);
      }
    }
  }

  window.addEventListener('hashchange', handleHash);
  if (window.location.hash) {
    handleHash();
  }
});
