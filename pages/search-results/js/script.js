(() => {
  const PER_PAGE = 9;
  const PAGES_SHOWN = 10;
  const PRICE_MAX = 1500;
  const DIST_MAX = 10;
  const NIGHTS = 5;

  const HOUSE_DETAILS_URL = "../house-details/house-details.html";
  const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=700";

  const BASE = [
    "Wi-Fi", "Air Conditioning", "TV", "Hair Dryer",
    "Iron", "24-hour Front Desk", "Luggage Storage", "Smoke Alarm"
  ];

  const AMENITY_GROUPS = {
    Popular: ["Air Conditioning", "Wi-Fi", "BBQ Grill", "Washing machine", "TV", "Kitchen"],
    Essentials: ["Radiant Heating", "Iron", "Hair Dryer", "Dedicated Workspace"],
    "On-site Services": ["24-hour Front Desk", "Room service", "Luggage Storage", "Airport Shuttle"],
    Features: ["Breakfast Included", "Pool", "Hot Tub", "Free Parking", "Cot", "Wellness", "Kingbed", "Petrol Station", "Gym", "Family Room", "Bar", "Tea/coffee Maker", "Smoking Allowed", "Indoor Fireplace", "Restaurant"],
    Location: ["Private Beach Area", "Waterfront", "Balcony"],
    Safety: ["Smoke Alarm", "Carbon monoxide Alarm"]
  };

  const BADGES = {
    "Best Location": "badge-location",
    "Best Value": "badge-value",
    "Guest Favourite": "badge-favourite",
    "Getaway Deal": "badge-getaway"
  };

  const hotels = [
    {
      name: "Hotel Arts Barcelona",
      badge: "Getaway Deal",
      stars: 5,
      area: "Port Olímpic",
      distance: 1.8,
      rating: 5,
      reviews: 1260,
      type: "Luxury Hotel",
      room: "Sea View Room",
      bed: "King Bed",
      size: 40,
      price: 1500,
      oldPrice: 1800,
      discount: 10,
      tags: ["freeCancel", "spa", "breakfast"],
      amenities: [...BASE, "Pool", "Gym", "Room service", "Restaurant", "Bar", "Wellness", "Kingbed", "Breakfast Included", "Waterfront", "Balcony"],
      flags: ["instantBook", "payAtProperty"]
    },

    {
      name: "W Barcelona",
      badge: "Best Location",
      stars: 5,
      area: "Barceloneta",
      distance: 2.5,
      rating: 5,
      reviews: 1200,
      type: "Beach Hotel",
      room: "Sea View Room",
      bed: "King Bed",
      size: 35,
      price: 1395,
      tags: ["breakfast", "spa"],
      amenities: [...BASE, "Pool", "Gym", "Bar", "Wellness", "Waterfront", "Private Beach Area", "Breakfast Included", "Kingbed", "Balcony"],
      flags: ["instantBook"]
    },

    {
      name: "Eurostars Grand Marina",
      stars: 4,
      area: "Port Vell",
      distance: 1.4,
      rating: 4.4,
      reviews: 1100,
      type: "Harborfront Hotel",
      room: "Deluxe Room",
      bed: "King Bed",
      size: 33,
      price: 1215,
      oldPrice: 1350,
      discount: 10,
      onlyLeft: true,
      tags: ["freeCancel", "breakfast"],
      amenities: [...BASE, "Pool", "Gym", "Restaurant", "Breakfast Included", "Kingbed", "Waterfront"],
      flags: ["payAtProperty", "noPrepayment"]
    },

    {
      name: "Melia Barcelona Sky",
      badge: "Best Value",
      stars: 4,
      area: "Poblenou",
      distance: 3.5,
      rating: 3.8,
      reviews: 1050,
      type: "Spa Hotel",
      room: "Premium Room",
      bed: "King Bed",
      size: 32,
      price: 1080,
      oldPrice: 1200,
      discount: 10,
      onlyLeft: true,
      tags: ["freeCancel", "spa", "beachView"],
      amenities: [...BASE, "Pool", "Gym", "Wellness", "Kingbed", "Restaurant", "Bar", "Balcony"],
      flags: ["instantBook"]
    },

    {
      name: "SLS Barcelona",
      badge: "Guest Favourite",
      stars: 5,
      area: "Port Forum",
      distance: 5,
      rating: 4.5,
      reviews: 990,
      type: "Luxury Hotel",
      room: "Panoramic Room",
      bed: "King Bed",
      size: 36,
      price: 1440,
      oldPrice: 1600,
      discount: 10,
      tags: ["freeCancel", "breakfast"],
      amenities: [...BASE, "Pool", "Gym", "Room service", "Restaurant", "Bar", "Breakfast Included", "Kingbed", "Free Parking"],
      flags: ["instantBook", "selfCheckIn"]
    },

    {
      name: "Majestic Hotel & Spa",
      badge: "Guest Favourite",
      stars: 3,
      area: "Passeig de Gràcia",
      distance: 0.5,
      rating: 4.5,
      reviews: 980,
      type: "Historic Hotel",
      room: "Twin Room",
      bed: "2 Twin Beds",
      size: 30,
      price: 1325,
      beds: 2,
      access: ["Elevator"],
      tags: ["breakfast", "terrace"],
      amenities: [...BASE, "Restaurant", "Bar", "Wellness", "Room service", "Breakfast Included", "Balcony"],
      flags: ["payAtProperty", "pets"]
    },

    {
      name: "Sofitel Barcelona Skipper",
      stars: 4,
      area: "Port Olímpic",
      distance: 1.8,
      rating: 4.6,
      reviews: 900,
      type: "Beach Hotel",
      room: "Luxury King Room",
      bed: "King Bed",
      size: 34,
      price: 1260,
      tags: ["freeCancel", "pool"],
      amenities: [...BASE, "Pool", "Gym", "Restaurant", "Kingbed", "Waterfront", "Private Beach Area"],
      flags: ["instantBook", "noPrepayment"]
    },

    {
      name: "Renaissance Hotel",
      badge: "Getaway Deal",
      stars: 3,
      area: "Poblenou",
      distance: 3.2,
      rating: 3.9,
      reviews: 850,
      type: "Seaside Hotel",
      room: "Sea View Room",
      bed: "Queen Bed",
      size: 28,
      price: 1035,
      oldPrice: 1150,
      discount: 10,
      onlyLeft: true,
      tags: ["freeCancel", "seaView"],
      amenities: [...BASE, "Restaurant", "Bar", "Waterfront", "Balcony", "Free Parking"],
      flags: ["payAtProperty"]
    }, {
      name: "Barcelona Princess",
      badge: "Best Value",
      stars: 4,
      area: "Diagonal Mar",
      distance: 4.2,
      rating: 4.3,
      reviews: 780,
      type: "Modern Hotel",
      room: "Deluxe Room",
      bed: "Queen Bed",
      size: 32,
      price: 1150,
      oldPrice: 1300,
      discount: 12,
      amenities: [...BASE, "Pool", "Gym", "Restaurant", "Bar", "Balcony", "Waterfront"],
      flags: ["instantBook", "freeCancel"],
      tags: ["freeCancel"]
    },

    {
      name: "H10 Marina Barcelona",
      badge: "Guest Favourite",
      stars: 4,
      area: "Villa Olímpica",
      distance: 2.1,
      rating: 4.6,
      reviews: 920,
      type: "Boutique Hotel",
      room: "Superior Room",
      bed: "King Bed",
      size: 35,
      price: 1280,
      amenities: [...BASE, "Pool", "Gym", "Restaurant", "Wellness", "Bar"],
      flags: ["instantBook", "selfCheckIn"],
      tags: ["breakfast"]
    },

    {
      name: "Catalonia Barcelona Plaza",
      badge: "Best Location",
      stars: 4,
      area: "Plaça d'Espanya",
      distance: 3.8,
      rating: 4.2,
      reviews: 650,
      type: "City Hotel",
      room: "Double Room",
      bed: "Double Bed",
      size: 29,
      price: 980,
      oldPrice: 1100,
      discount: 10,
      amenities: [...BASE, "Pool", "Restaurant", "Bar", "Gym"],
      flags: ["payAtProperty", "noPrepayment"],
      tags: ["freeCancel"]
    },

    {
      name: "Hotel 54 Barceloneta",
      badge: "Guest Favourite",
      stars: 4,
      area: "Barceloneta",
      distance: 1.8,
      rating: 4,
      reviews: 620,
      type: "Boutique Hotel",
      room: "Double Room",
      bed: "Double Bed",
      size: 24,
      price: 900,
      oldPrice: 1000,
      discount: 10,
      onlyLeft: true,
      access: ["Elevator"],
      tags: ["freeCancel", "rooftop"],
      amenities: [...BASE, "Bar", "Waterfront", "Balcony", "Tea/coffee Maker"],
      flags: ["instantBook", "selfCheckIn", "pets"]
    }
  ];

  for (let i = 0; i < hotels.length; i++) {
    hotels[i].id = i + 1;
    hotels[i].placeType = "Room";
    hotels[i].propertyType = "Hotel";
    hotels[i].bedrooms = hotels[i].bedrooms || 1;
    hotels[i].beds = hotels[i].beds || 1;
    hotels[i].bathrooms = hotels[i].bathrooms || 1;
    hotels[i].image = hotels[i].image || "";
    hotels[i].metro = false;
    hotels[i].access = hotels[i].access || [
      "Step-free access",
      "Elevator",
      "Accessible bathroom"
    ];
  }

  const form = document.querySelector("#filtersForm");
  const hotelList = document.querySelector("#hotelList");
  const pagination = document.querySelector("#pagination");

  const resultsCount = document.querySelector("#resultsCount");
  const emptyState = document.querySelector("#emptyState");
  const priceMin = document.querySelector("#priceMin");
  const priceMax = document.querySelector("#priceMax");
  const distance = document.querySelector("#distance");

  const counters = {
    bedrooms: 1,
    beds: 1,
    bathrooms: 0
  };

  const favorites = [];

  let currentPage = 1;
  let sortValue = "reviewed";

  function getCheckedValues(name) {
    const inputs = document.querySelectorAll(`input[name="${name}"]:checked`);
    const values = [];

    inputs.forEach(input => {
      values.push(input.value);
    });

    return values;
  }

  function money(amount) {
    return "$" + amount.toLocaleString("en-US");
  }

  function ratingText(rating) {
    if (rating >= 5) return "Excellent";
    if (rating >= 4) return "Very Good";
    if (rating >= 3) return "Good";
    if (rating >= 2) return "Fair";

    return "Poor";
  }

  function createAmenities() {
    const container = document.querySelector("#amenityGroups");

    if (!container) return;

    let html = "";

    for (let group in AMENITY_GROUPS) {
      html += `<h3 class="small fw-semibold mb-3">${group}</h3>`;
      html += `<div class="d-flex flex-wrap gap-3 mb-5">`;

      for (let item of AMENITY_GROUPS[group]) {
        html += `
          <label class="filter-chip">
            <input type="checkbox" name="amenity" value="${item}">
            ${item}
          </label>
        `;
      }

      html += `</div>`;
    }

    container.innerHTML = html;
  }

  function getFilters() {
    return {
      placeType: getCheckedValues("placeType")[0] || "any",
      priceMin: priceMin ? Number(priceMin.value) : 0,
      priceMax: priceMax ? Number(priceMax.value) : PRICE_MAX,
      distance: distance ? Number(distance.value) : DIST_MAX,
      sizes: getCheckedValues("size"),
      scores: getCheckedValues("score"),
      stars: getCheckedValues("stars"),
      amenities: getCheckedValues("amenity"),
      flags: getCheckedValues("flag"),
      propertyTypes: getCheckedValues("propertyType"),
      access: getCheckedValues("access"),
      bedrooms: counters.bedrooms,
      beds: counters.beds,
      bathrooms: counters.bathrooms
    };
  }

  function matchesHotel(hotel, filters) {
    if (filters.placeType !== "any" && hotel.placeType !== filters.placeType) {
      return false;
    }

    if (hotel.price < filters.priceMin) return false;

    if (hotel.price > filters.priceMax) return false;

    if (hotel.bedrooms < filters.bedrooms) return false;

    if (hotel.beds < filters.beds) return false;

    if (hotel.bathrooms < filters.bathrooms) return false;

    if (hotel.distance > filters.distance) return false;

    if (filters.sizes.length > 0) {
      let found = false;

      for (let size of filters.sizes) {
        if (size === "small" && hotel.size <= 25) found = true;
        if (size === "medium" && hotel.size > 25 && hotel.size <= 40) found = true;
        if (size === "large" && hotel.size >= 41) found = true;
      }

      if (!found) return false;
    }

    if (filters.scores.length > 0) {
      let found = false;

      for (let score of filters.scores) {
        if (score === "excellent" && hotel.rating >= 5) found = true;
        if (score === "veryGood" && hotel.rating >= 4) found = true;
        if (score === "good" && hotel.rating >= 3) found = true;
        if (score === "fair" && hotel.rating >= 2) found = true;
        if (score === "poor" && hotel.rating < 2) found = true;
      }

      if (!found) return false;
    }

    if (filters.stars.length > 0) {
      if (!filters.stars.includes(String(hotel.stars))) return false;
    }

    for (let item of filters.amenities) {
      if (!hotel.amenities.includes(item)) return false;
    }

    for (let item of filters.access) {
      if (!hotel.access.includes(item)) return false;
    }

    for (let flag of filters.flags) {
      let found = hotel.flags.includes(flag);

      if (flag === "freeCancel" && hotel.tags.includes("freeCancel")) {
        found = true;
      }

      if (!found) return false;
    }

    if (filters.propertyTypes.length > 0) {
      if (!filters.propertyTypes.includes(hotel.propertyType)) return false;
    }

    return true;
  }

  function sortHotels(list) {
    const sorted = [...list];

    if (sortValue === "priceLow") {
      sorted.sort((a, b) => a.price - b.price);
    }

    if (sortValue === "priceHigh") {
      sorted.sort((a, b) => b.price - a.price);
    }

    if (sortValue === "rating") {
      sorted.sort((a, b) => b.rating - a.rating);
    }

    return sorted;
  }

  function updateOutputs() {
    if (priceMin && document.querySelector("#priceMinOut")) {
      document.querySelector("#priceMinOut").textContent =
        "$ " + Number(priceMin.value).toLocaleString("en-US");
    }

    if (priceMax && document.querySelector("#priceMaxOut")) {
      let value = "$ " + Number(priceMax.value).toLocaleString("en-US");

      if (Number(priceMax.value) >= PRICE_MAX) {
        value += "+";
      }

      document.querySelector("#priceMaxOut").textContent = value;
    }

    if (distance) {
      let value = distance.value + " km";

      if (Number(distance.value) >= DIST_MAX) {
        value = distance.value + "+ km";
      }

      const output = document.querySelector("#distanceOut");

      if (output) {
        output.textContent = value;
      }
    }

    const outputs = document.querySelectorAll("[data-counter-out]");

    outputs.forEach(output => {
      const name = output.dataset.counterOut;

      if (name === "bathrooms" && counters[name] === 0) {
        output.textContent = "Any";
      } else {
        output.textContent = counters[name];
      }
    });
  }

  function createCard(hotel) {
    let badge = "";

    if (hotel.badge) {
      badge = `<span class="hotel-badge ${BADGES[hotel.badge]}">${hotel.badge}</span>`;
    }

    let heartClass = "fa-regular";

    if (favorites.includes(hotel.id)) {
      heartClass = "fa-solid";
    }

    let oldPrice = "";

    if (hotel.oldPrice) {
      oldPrice = `<s class="hotel-old-price">${money(hotel.oldPrice)}</s>`;
    }

    let discount = "";

    if (hotel.discount) {
      discount = `<span class="hotel-discount">${hotel.discount}% off</span>`;
    }

    let onlyLeft = "";

    if (hotel.onlyLeft) {
      onlyLeft = `<p class="hotel-only-left">Only 1 left at this price</p>`;
    }

    return `
      <article class="hotel-card position-relative">

        <div class="hotel-image-wrapper">
          <img src="${hotel.image || FALLBACK_IMAGE}" alt="${hotel.name}" class="hotel-image" loading="lazy">

          ${badge}

          <button type="button" class="hotel-favorite" data-fav="${hotel.id}" aria-label="Save ${hotel.name}">
            <i class="${heartClass} fa-heart"></i>
          </button>

          <div class="hotel-dots">
            <span></span><span></span><span></span><span></span>
          </div>
        </div>

        <div class="hotel-card-body">

          <div class="hotel-title-row">
            <h3 class="hotel-title">
              <a href="${HOUSE_DETAILS_URL}" class="stretched-link">${hotel.name}</a>
            </h3>

            <span class="hotel-stars">
              ${hotel.stars} <i class="fa-solid fa-star"></i>
            </span>
          </div>

          <div class="hotel-location">
            <i class="fa-solid fa-location-dot"></i> ${hotel.area}
          </div>

          <div class="hotel-rating">
            <span class="hotel-rating-score">${hotel.rating.toFixed(1)}</span>
            <strong>${ratingText(hotel.rating)}</strong>
            <small>${hotel.reviews.toLocaleString("en-US")} reviews</small>
          </div>

          <p class="hotel-meta">
            ${hotel.type}
            <span class="sep">|</span>
            ${hotel.room}
            <span class="sep">·</span>
            ${hotel.bed}
          </p>

          ${onlyLeft}

          <div class="hotel-price-area">
            ${discount}

            <div class="hotel-price-box">
              ${oldPrice}
              <span class="hotel-price">${money(hotel.price)}</span>
              <small class="hotel-price-note">${NIGHTS} nights, 2 adults</small>
            </div>
          </div>

        </div>
      </article>
    `;
  }

  function renderPagination(realPages) {
    if (realPages === 0) {
      pagination.innerHTML = "";
      return;
    }

    let html = "";

    function addPage(label, page, active, disabled) {
      let classes = "page-item";

      if (active) classes += " active";
      if (disabled) classes += " disabled";

      html += `
        <li class="${classes}">
          <a class="page-link" href="#" data-page="${page}"
            ${active ? 'aria-current="page"' : ""}
            ${disabled ? 'tabindex="-1" aria-disabled="true"' : ""}>
            ${label}
          </a>
        </li>
      `;
    }

    addPage(
      '<i class="fa-solid fa-chevron-left"></i>',
      currentPage - 1,
      false,
      currentPage === 1
    );

    let pages = [];

    if (currentPage <= 3) {
      pages = [1, 2, 3, "...", PAGES_SHOWN - 1, PAGES_SHOWN];
    } else if (currentPage >= PAGES_SHOWN - 2) {
      pages = [1, 2, "...", PAGES_SHOWN - 2, PAGES_SHOWN - 1, PAGES_SHOWN];
    } else {
      pages = [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", PAGES_SHOWN];
    }

    for (let page of pages) {
      if (page === "...") {
        html += `<li class="page-item disabled"><span class="page-link">…</span></li>`;
      } else {
        addPage(page, page, page === currentPage, page > realPages);
      }
    }

    addPage(
      '<i class="fa-solid fa-chevron-right"></i>',
      currentPage + 1,
      false,
      currentPage >= realPages
    );

    pagination.innerHTML = html;
  }

  function renderHotels() {
    const filters = getFilters();
    let results = [];

    for (let hotel of hotels) {
      if (matchesHotel(hotel, filters)) {
        results.push(hotel);
      }
    }

    results = sortHotels(results);

    const realPages = Math.ceil(results.length / PER_PAGE);

    if (currentPage > realPages) {
      currentPage = Math.max(realPages, 1);
    }

    const start = (currentPage - 1) * PER_PAGE;
    const end = start + PER_PAGE;
    const currentHotels = results.slice(start, end);

    let html = "";

    for (let hotel of currentHotels) {
      html += createCard(hotel);
    }

    hotelList.innerHTML = html;

    if (resultsCount) {
      resultsCount.textContent = `${results.length} ${results.length === 1 ? "stay" : "stays"} found`;
    }

    if (emptyState) {
      emptyState.classList.toggle("d-none", results.length !== 0);
    }

    document.querySelectorAll("[data-results-count]").forEach(element => {
      element.textContent = results.length;
    });

    renderPagination(realPages);
    updateOutputs();
  }

  function resetFilters() {
    form.reset();

    counters.bedrooms = 1;
    counters.beds = 1;
    counters.bathrooms = 0;

    currentPage = 1;

    renderHotels();
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  form.addEventListener("input", function (event) {
    if (priceMin && priceMax) {
      if (event.target === priceMin && Number(priceMin.value) > Number(priceMax.value)) {
        priceMax.value = priceMin.value;
      }

      if (event.target === priceMax && Number(priceMax.value) < Number(priceMin.value)) {
        priceMin.value = priceMax.value;
      }
    }

    currentPage = 1;
    renderHotels();
  });

  form.addEventListener("click", function (event) {
    const button = event.target.closest("[data-counter]");

    if (!button) return;

    const name = button.dataset.counter;
    const step = Number(button.dataset.step);

    let min = 1;

    if (name === "bathrooms") {
      min = 0;
    }

    counters[name] += step;

    if (counters[name] < min) {
      counters[name] = min;
    }

    if (counters[name] > 10) {
      counters[name] = 10;
    }

    currentPage = 1;
    renderHotels();
  });

  document.addEventListener("click", function (event) {
    const clearButton = event.target.closest("[data-clear-filters]");

    if (clearButton) {
      resetFilters();
    }
  });

  pagination.addEventListener("click", function (event) {
    const link = event.target.closest("[data-page]");

    if (!link) return;

    event.preventDefault();

    if (link.closest(".disabled")) return;

    currentPage = Number(link.dataset.page);

    renderHotels();

    const top = document.querySelector("#resultsTop");

    if (top) {
      top.scrollIntoView({ behavior: "smooth" });
    }
  });

  hotelList.addEventListener("click", function (event) {
    const button = event.target.closest("[data-fav]");

    if (!button) return;

    event.preventDefault();
    event.stopPropagation();

    const id = Number(button.dataset.fav);
    const icon = button.querySelector("i");

    if (favorites.includes(id)) {
      favorites.splice(favorites.indexOf(id), 1);
      icon.classList.remove("fa-solid");
      icon.classList.add("fa-regular");
    } else {
      favorites.push(id);
      icon.classList.remove("fa-regular");
      icon.classList.add("fa-solid");
    }
  });

  document.querySelectorAll("[data-sort]").forEach(item => {
    item.addEventListener("click", function (event) {
      event.preventDefault();

      sortValue = item.dataset.sort;

      const label = document.querySelector("#sortLabel");

      if (label) {
        label.textContent = item.textContent.trim();
      }

      currentPage = 1;
      renderHotels();
    });
  });

  document.querySelectorAll("[data-view]").forEach(button => {
    button.addEventListener("click", function () {
      const view = button.dataset.view;

      hotelList.classList.toggle("is-list", view === "list");

      document.querySelectorAll("[data-view]").forEach(item => {
        item.classList.remove("active");
        item.setAttribute("aria-pressed", "false");
      });

      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");
    });
  });

  createAmenities();
  renderHotels();

})();