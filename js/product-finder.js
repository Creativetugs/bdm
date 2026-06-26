/**
 * BDM Product Finder — WooCommerce-ready product matching engine
 * Maps to WC categories: chimney-caps, dampers, pellet-vent, flexible-liners,
 * rigid-liners, direct-vent, fresh-air, accessories
 */
const BDM_PRODUCTS = [
  {
    id: 'cal-cap-ss',
    name: 'Chim-A-Lator® Stainless Steel Chimney Cap',
    brand: 'CHIM-A-LATOR',
    sku: 'CAL-CAP-SS',
    wcCategory: 'chimney-caps',
    wcSlug: 'chim-a-lator-stainless-chimney-cap',
    fuel: ['Wood', 'Gas', 'Oil', 'Pellet', 'Multi-Fuel'],
    install: ['Masonry Chimney', 'Prefabricated Chimney'],
    diameter: ['8"', '10"', '12"', '13"x17"'],
    material: ['Stainless Steel', 'Galvanized Steel'],
    application: ['Fireplace', 'Stove', 'Chimney Top Protection'],
    desc: 'Six-setting regulator controls draft. Prevents warm air escape when fireplace is not in use.',
    badge: 'Best Seller'
  },
  {
    id: 'cal-damper',
    name: 'Chim-A-Lator® Top Sealing Damper',
    brand: 'CHIM-A-LATOR',
    sku: 'CAL-DAMPER-TS',
    wcCategory: 'dampers',
    wcSlug: 'chim-a-lator-top-sealing-damper',
    fuel: ['Wood', 'Gas', 'Multi-Fuel'],
    install: ['Masonry Chimney'],
    diameter: ['8"', '10"', '12"', '13"x17"'],
    material: ['Stainless Steel'],
    application: ['Fireplace', 'Energy Efficiency'],
    desc: 'Top-mount sealing damper replaces throat dampers. Reduces heat loss and improves efficiency.',
    badge: 'Energy Star Partner'
  },
  {
    id: 'biovent-3',
    name: 'BioVent® 3" Pellet Vent System',
    brand: 'BIOVENT',
    sku: 'BV-3-SS',
    wcCategory: 'pellet-vent',
    wcSlug: 'biovent-3-inch-pellet-vent',
    fuel: ['Pellet'],
    install: ['Through-Wall', 'Through-Roof', 'Interior Run'],
    diameter: ['3"'],
    material: ['Stainless Steel', 'Type 304 SS'],
    application: ['Pellet Stove', 'Pellet Insert'],
    desc: 'Complete venting system for wood pellet stoves and inserts. UL-listed components.',
    badge: 'Pellet Specialist'
  },
  {
    id: 'biovent-4',
    name: 'BioVent® 4" Pellet Vent System',
    brand: 'BIOVENT',
    sku: 'BV-4-SS',
    wcCategory: 'pellet-vent',
    wcSlug: 'biovent-4-inch-pellet-vent',
    fuel: ['Pellet'],
    install: ['Through-Wall', 'Through-Roof', 'Interior Run'],
    diameter: ['4"'],
    material: ['Stainless Steel', 'Type 304 SS'],
    application: ['Pellet Stove', 'Pellet Insert'],
    desc: 'High-capacity pellet vent for larger BTU appliances. Full fitting line available.',
    badge: null
  },
  {
    id: 'dl-rigid-304',
    name: 'Dalsin Line® 304 Rigid Chimney Liner',
    brand: 'DALSIN LINE',
    sku: 'DL-R304-6',
    wcCategory: 'rigid-liners',
    wcSlug: 'dalsin-line-304-rigid-liner',
    fuel: ['Wood', 'Gas', 'Oil', 'Pellet', 'Multi-Fuel'],
    install: ['Masonry Chimney Relining', 'New Construction'],
    diameter: ['5"', '6"', '7"', '8"'],
    material: ['Type 304 Stainless Steel'],
    application: ['Chimney Relining', 'Fireplace', 'Stove'],
    desc: 'Premium rigid stainless liner and fittings. Type 304 for standard applications.',
    badge: 'Made in USA'
  },
  {
    id: 'dl-rigid-316',
    name: 'Dalsin Line® 316L Rigid Chimney Liner',
    brand: 'DALSIN LINE',
    sku: 'DL-R316-6',
    wcCategory: 'rigid-liners',
    wcSlug: 'dalsin-line-316l-rigid-liner',
    fuel: ['Wood', 'Oil', 'Multi-Fuel'],
    install: ['Masonry Chimney Relining'],
    diameter: ['5"', '6"', '7"', '8"'],
    material: ['Type 316L Stainless Steel'],
    application: ['Chimney Relining', 'High-Corrosion Applications'],
    desc: '316L stainless for oil and high-acid condensing applications. Superior corrosion resistance.',
    badge: 'Premium Grade'
  },
  {
    id: 'dl-flex-304',
    name: 'Dalsin Line® Flexible Liner Kit',
    brand: 'DALSIN LINE',
    sku: 'DL-FLEX-6',
    wcCategory: 'flexible-liners',
    wcSlug: 'dalsin-line-flexible-liner-kit',
    fuel: ['Wood', 'Gas', 'Oil', 'Pellet'],
    install: ['Masonry Chimney Relining'],
    diameter: ['4"', '5"', '6"', '7"', '8"'],
    material: ['Type 304 Stainless Steel', 'Type 316L Stainless Steel'],
    application: ['Chimney Relining', 'Offset Chimneys'],
    desc: 'Flexible liner kits for offset and curved flues. Complete with connectors and termination.',
    badge: null
  },
  {
    id: 'pf-direct-3',
    name: 'Pro-Form® 3" Direct Vent System',
    brand: 'PRO-FORM',
    sku: 'PF-DV-3',
    wcCategory: 'direct-vent',
    wcSlug: 'pro-form-3-direct-vent',
    fuel: ['Gas', 'Propane'],
    install: ['Through-Wall', 'Through-Roof', 'Horizontal Termination'],
    diameter: ['3"'],
    material: ['Aluminum', 'Stainless Steel Inner'],
    application: ['Direct Vent Fireplace', 'Direct Vent Stove', 'Direct Vent Insert'],
    desc: 'Complete rigid and flexible gas direct vent for stoves, heaters, fireplaces, and inserts.',
    badge: 'Gas Certified'
  },
  {
    id: 'pf-direct-4',
    name: 'Pro-Form® 4" Direct Vent System',
    brand: 'PRO-FORM',
    sku: 'PF-DV-4',
    wcCategory: 'direct-vent',
    wcSlug: 'pro-form-4-direct-vent',
    fuel: ['Gas', 'Propane'],
    install: ['Through-Wall', 'Through-Roof', 'Horizontal Termination'],
    diameter: ['4"'],
    material: ['Aluminum', 'Stainless Steel Inner'],
    application: ['Direct Vent Fireplace', 'Direct Vent Stove', 'High-BTU Gas'],
    desc: 'High-BTU direct vent system with co-linear and co-axial options.',
    badge: null
  },
  {
    id: 'pf-fresh-air',
    name: 'Pro-Form® Fresh Air Intake Kit',
    brand: 'PRO-FORM',
    sku: 'PF-FAI-4',
    wcCategory: 'fresh-air',
    wcSlug: 'pro-form-fresh-air-intake',
    fuel: ['Gas', 'Wood', 'Pellet'],
    install: ['Through-Wall', 'Direct to Appliance'],
    diameter: ['3"', '4"'],
    material: ['Galvanized Steel', 'Aluminum'],
    application: ['Combustion Air Supply', 'Direct Vent Complement'],
    desc: 'Dedicated outside air intake for sealed combustion appliances. Meets code requirements.',
    badge: 'Code Compliant'
  },
  {
    id: 'sw-pipe-26',
    name: '26 Ga SS Black Single-Wall Stove Pipe',
    brand: 'BDM',
    sku: 'BDM-26-SS',
    wcCategory: 'accessories',
    wcSlug: '26ga-ss-black-stove-pipe',
    fuel: ['Wood', 'Pellet', 'Multi-Fuel'],
    install: ['Interior Run', 'Connector Pipe'],
    diameter: ['4"', '5"', '6"', '7"', '8"'],
    material: ['Stainless Steel', 'Black Painted Steel'],
    application: ['Stove Connector', 'Interior Vent Run'],
    desc: 'Professional-grade single-wall connector pipe. 24-gauge and 26-gauge options.',
    badge: null
  },
  {
    id: 'acc-elbow',
    name: 'Adjustable Elbow & Fitting Collection',
    brand: 'BDM',
    sku: 'BDM-ELB-ADJ',
    wcCategory: 'accessories',
    wcSlug: 'adjustable-elbow-fittings',
    fuel: ['Wood', 'Gas', 'Pellet', 'Oil'],
    install: ['Interior Run', 'Through-Wall', 'Through-Roof'],
    diameter: ['3"', '4"', '5"', '6"', '7"', '8"'],
    material: ['Stainless Steel', 'Galvanized Steel', 'Aluminum'],
    application: ['Vent Routing', 'Offset Connections'],
    desc: 'Full line of elbows, tees, wall thimbles, fire stops, and termination caps.',
    badge: null
  }
];

function scoreProduct(product, filters) {
  let score = 0;
  const checks = [
    ['fuel', filters.fuel],
    ['install', filters.install],
    ['diameter', filters.diameter],
    ['material', filters.material],
    ['application', filters.application]
  ];
  for (const [key, val] of checks) {
    if (!val) continue;
    if (product[key].some(v => v.toLowerCase().includes(val.toLowerCase()) || val.toLowerCase().includes(v.toLowerCase()))) {
      score += 20;
    }
  }
  return score;
}

function findProducts(filters) {
  const active = Object.values(filters).filter(Boolean);
  if (active.length === 0) return [];

  return BDM_PRODUCTS
    .map(p => ({ ...p, score: scoreProduct(p, filters) }))
    .filter(p => p.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);
}

function renderResults(products, container) {
  if (!products.length) {
    container.innerHTML = `
      <div class="text-center py-8">
        <p class="text-slate-600 mb-4">No exact match found. Our technical team can help specify the right system.</p>
        <a href="#contact" class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition">Talk to Our Team</a>
      </div>`;
    return;
  }

  container.innerHTML = products.map((p, i) => `
    <div class="product-result p-5 rounded-xl border-2 ${i === 0 ? 'product-card-match border-primary' : 'border-slate-200 bg-white'} card-lift" data-wc-category="${p.wcCategory}" data-wc-slug="${p.wcSlug}">
      <div class="flex flex-wrap items-start justify-between gap-3 mb-3">
        <div>
          ${p.badge ? `<span class="inline-block text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded mb-2">${p.badge}</span>` : ''}
          <h4 class="font-bold text-lg text-charcoal">${p.name}</h4>
          <p class="text-sm text-slate-500">${p.brand} · SKU: ${p.sku}</p>
        </div>
        ${i === 0 ? '<span class="text-xs font-bold uppercase tracking-wider bg-primary text-white px-3 py-1 rounded-full">Top Match</span>' : ''}
      </div>
      <p class="text-slate-600 text-sm mb-4">${p.desc}</p>
      <div class="flex flex-wrap gap-2 mb-4">
        ${p.fuel.slice(0, 3).map(f => `<span class="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">${f}</span>`).join('')}
        ${p.diameter.slice(0, 2).map(d => `<span class="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">${d}</span>`).join('')}
      </div>
      <div class="flex flex-wrap gap-3 mt-4 pt-4 border-t border-slate-100">
        <a href="https://dalsinmfg.com/product-category/${p.wcCategory}/" class="text-sm font-semibold text-primary hover:underline" data-wc-link="category">View in Catalog →</a>
        <a href="#contact" class="text-sm font-semibold text-slate-600 hover:text-primary transition" data-wc-link="quote">Request Dealer Pricing</a>
      </div>
    </div>
  `).join('');
}

function initProductFinder() {
  const form = document.getElementById('product-finder-form');
  const results = document.getElementById('finder-results');
  const resultsWrap = document.getElementById('finder-results-wrap');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const filters = {
      fuel: form.fuel.value || null,
      install: form.install.value || null,
      diameter: form.diameter.value || null,
      material: form.material.value || null,
      application: form.application.value || null
    };
    const matched = findProducts(filters);
    resultsWrap.classList.remove('hidden');
    renderResults(matched, results);
    resultsWrap.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    if (typeof gtag !== 'undefined') {
      gtag('event', 'product_finder_submit', { event_category: 'lead', event_label: JSON.stringify(filters) });
    }
  });

  form.querySelectorAll('select').forEach(sel => {
    sel.addEventListener('change', () => {
      const filled = [...form.querySelectorAll('select')].filter(s => s.value).length;
      document.getElementById('finder-progress').style.width = `${(filled / 5) * 100}%`;
    });
  });
}

document.addEventListener('DOMContentLoaded', initProductFinder);
