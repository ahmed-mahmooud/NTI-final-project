(() => {
  const PER_PAGE = 9;
  const PAGES_SHOWN = 10;      // الأرقام الظاهرة في الباجينيشن
  const PRICE_MAX = 1500;
  const DIST_MAX = 10;
  const NIGHTS = 5;
  const HOUSE_DETAILS_URL = "../house-details/house-details.html";
  const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=700";

  const BASE = ["Wi-Fi", "Air Conditioning", "TV", "Hair Dryer", "Iron", "24-hour Front Desk", "Luggage Storage", "Smoke Alarm"];

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

  // ============ Data ============
  const hotels = [
    { name: "Hotel Arts Barcelona", badge: "Getaway Deal", stars: 5, area: "Port Olímpic", distance: 1.8, rating: 5, reviews: 1260,
      type: "Luxury Hotel", room: "Sea View Room", bed: "King Bed", size: 40, price: 1500, oldPrice: 1800, discount: 10,
      tags: ["freeCancel", "spa", "breakfast"],
      amenities: [...BASE, "Pool", "Gym", "Room service", "Restaurant", "Bar", "Wellness", "Kingbed", "Breakfast Included", "Waterfront", "Balcony"],
      flags: ["instantBook", "payAtProperty"] },

    { name: "W Barcelona", badge: "Best Location", stars: 5, area: "Barceloneta", distance: 2.5, rating: 5, reviews: 1200,
      type: "Beach Hotel", room: "Sea View Room", bed: "King Bed", size: 35, price: 1395,
      tags: ["breakfast", "spa"],
      amenities: [...BASE, "Pool", "Gym", "Bar", "Wellness", "Waterfront", "Private Beach Area", "Breakfast Included", "Kingbed", "Balcony"],
      flags: ["instantBook"] },

    { name: "Eurostars Grand Marina", stars: 4, area: "Port Vell", distance: 1.4, rating: 4.4, reviews: 1100,
      type: "Harborfront Hotel", room: "Deluxe Room", bed: "King Bed", size: 33, price: 1215, oldPrice: 1350, discount: 10, onlyLeft: true,
      tags: ["freeCancel", "breakfast"],
      amenities: [...BASE, "Pool", "Gym", "Restaurant", "Breakfast Included", "Kingbed", "Waterfront"],
      flags: ["payAtProperty", "noPrepayment"] },

    { name: "Melia Barcelona Sky", badge: "Best Value", stars: 4, area: "Poblenou", distance: 3.5, rating: 3.8, reviews: 1050,
      type: "Spa Hotel", room: "Premium Room", bed: "King Bed", size: 32, price: 1080, oldPrice: 1200, discount: 10, onlyLeft: true,
      tags: ["freeCancel", "spa", "beachView"],
      amenities: [...BASE, "Pool", "Gym", "Wellness", "Kingbed", "Restaurant", "Bar", "Balcony"],
      flags: ["instantBook"] },

    { name: "SLS Barcelona", badge: "Guest Favourite", stars: 5, area: "Port Forum", distance: 5, rating: 4.5, reviews: 990,
      type: "Luxury Hotel", room: "Panoramic Room", bed: "King Bed", size: 36, price: 1440, oldPrice: 1600, discount: 10,
      tags: ["freeCancel", "breakfast"],
      amenities: [...BASE, "Pool", "Gym", "Room service", "Restaurant", "Bar", "Breakfast Included", "Kingbed", "Free Parking"],
      flags: ["instantBook", "selfCheckIn"] },

    { name: "Majestic Hotel & Spa", badge: "Guest Favourite", stars: 3, area: "Passeig de Gràcia", distance: 0.5, rating: 4.5, reviews: 980,
      type: "Historic Hotel", room: "Twin Room", bed: "2 Twin Beds", size: 30, price: 1325, beds: 2, access: ["Elevator"],
      tags: ["breakfast", "terrace"],
      amenities: [...BASE, "Restaurant", "Bar", "Wellness", "Room service", "Breakfast Included", "Balcony"],
      flags: ["payAtProperty", "pets"] },

    { name: "Sofitel Barcelona Skipper", stars: 4, area: "Port Olímpic", distance: 1.8, rating: 4.6, reviews: 900,
      type: "Beach Hotel", room: "Luxury King Room", bed: "King Bed", size: 34, price: 1260,
      tags: ["freeCancel", "pool"],
      amenities: [...BASE, "Pool", "Gym", "Restaurant", "Kingbed", "Waterfront", "Private Beach Area"],
      flags: ["instantBook", "noPrepayment"] },

    { name: "Renaissance Hotel", badge: "Getaway Deal", stars: 3, area: "Poblenou", distance: 3.2, rating: 3.9, reviews: 850,
      type: "Seaside Hotel", room: "Sea View Room", bed: "Queen Bed", size: 28, price: 1035, oldPrice: 1150, discount: 10, onlyLeft: true,
      tags: ["freeCancel", "seaView"],
      amenities: [...BASE, "Restaurant", "Bar", "Waterfront", "Balcony", "Free Parking"],
      flags: ["payAtProperty"] },

    { name: "Hotel 54 Barceloneta", badge: "Guest Favourite", stars: 4, area: "Barceloneta", distance: 1.8, rating: 4, reviews: 620,
      type: "Boutique Hotel", room: "Double Room", bed: "Double Bed", size: 24, price: 900, oldPrice: 1000, discount: 10, onlyLeft: true, access: ["Elevator"],
      tags: ["freeCancel", "rooftop"],
      amenities: [...BASE, "Bar", "Waterfront", "Balcony", "Tea/coffee Maker"],
      flags: ["instantBook", "selfCheckIn", "pets"] }
  ].map((hotel, index) => ({
    placeType: "Room",
    propertyType: "Hotel",
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    image: "",
    metro: false,
    access: ["Step-free access", "Elevator", "Accessible bathroom"],
    ...hotel,
    id: index + 1
  }));

  // ============ Helpers ============
  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];

  // عناصر أساسية لازم تكون موجودة في الـ HTML
  const form = $("#filtersForm");
  const hotelList = $("#hotelList");
  const pagination = $("#pagination");

  // عناصر ممكن تتشال من التصميم من غير ما الصفحة تقف (ممكن تبقى null)
  const resultsCount = $("#resultsCount");
  const emptyState = $("#emptyState");
  const priceMin = $("#priceMin");      // مش موجودة في التصميم الحالي
  const priceMax = $("#priceMax");      // مش موجودة في التصميم الحالي
  const distance = $("#distance");

  const counters = { bedrooms: 1, beds: 1, bathrooms: 0 };
  const favorites = new Set();
  let currentPage = 1;
  let sortValue = "reviewed";

  // لو العنصر مش موجود بيرجع القيمة الافتراضية
  const getNumber = (element, fallback) => (element ? Number(element.value) : fallback);

  // لو العنصر مش موجود مفيش حاجة بتحصل
  const setText = (element, text) => {
    if (element) element.textContent = text;
  };

  const refreshRange = input =>
    window.bootstrap?.Range?.getInstance(input.closest(".form-range"))?.update();

  const getCheckedValues = name =>
    $$(`input[name="${name}"]:checked`).map(input => input.value);

  const money = amount => "$" + amount.toLocaleString("en-US");
  const distanceText = value => (value < 1 ? Math.round(value * 1000) + " m" : value + " km");

  const ratingText = rating => {
    if (rating >= 5) return "Excellent";
    if (rating >= 4) return "Very Good";
    if (rating >= 3) return "Good";
    if (rating >= 2) return "Fair";
    return "Poor";
  };

  // ============ Amenity chips ============
  const createAmenities = () => {
    const container = $("#amenityGroups");

    if (!container) return;

    container.innerHTML = Object.entries(AMENITY_GROUPS).map(([group, items]) => `
      <h3 class="small fw-semibold mb-3">${group}</h3>
      <div class="d-flex flex-wrap  gap-3 mb-5">
        ${items.map(item => `
          <label class="filter-chip">
            <input type="checkbox" name="amenity" value="${item}">
            ${item}
          </label>
        `).join("")}
      </div>
    `).join("");
  };

  // ============ Filters ============
  const getFilters = () => ({
    placeType: getCheckedValues("placeType")[0] || "any",
    priceMin: getNumber(priceMin, 0),
    priceMax: getNumber(priceMax, PRICE_MAX),
    distance: getNumber(distance, DIST_MAX),
    sizes: getCheckedValues("size"),
    scores: getCheckedValues("score"),
    stars: getCheckedValues("stars"),
    amenities: getCheckedValues("amenity"),
    flags: getCheckedValues("flag"),
    propertyTypes: getCheckedValues("propertyType"),
    access: getCheckedValues("access"),
    ...counters
  });

  const matchesHotel = (hotel, filters) => {
    if (filters.placeType !== "any" && hotel.placeType !== filters.placeType) return false;
    if (hotel.price < filters.priceMin) return false;
    if (filters.priceMax < PRICE_MAX && hotel.price > filters.priceMax) return false;

    if (hotel.bedrooms < filters.bedrooms || hotel.beds < filters.beds || hotel.bathrooms < filters.bathrooms) {
      return false;
    }

    if (filters.distance < DIST_MAX && hotel.distance > filters.distance) return false;

    if (filters.sizes.length > 0) {
      const sizeMatch = filters.sizes.some(size => {
        if (size === "small") return hotel.size <= 25;
        if (size === "medium") return hotel.size > 25 && hotel.size <= 40;
        return hotel.size >= 41;
      });
      if (!sizeMatch) return false;
    }

    if (filters.scores.length > 0) {
      const scoreMatch = filters.scores.some(score => {
        if (score === "excellent") return hotel.rating >= 5;
        if (score === "veryGood") return hotel.rating >= 4;
        if (score === "good") return hotel.rating >= 3;
        if (score === "fair") return hotel.rating >= 2;
        return hotel.rating < 2;
      });
      if (!scoreMatch) return false;
    }

    if (filters.stars.length > 0 && !filters.stars.includes(String(hotel.stars))) return false;
    if (filters.amenities.some(item => !hotel.amenities.includes(item))) return false;
    if (filters.access.some(item => !hotel.access.includes(item))) return false;

    const hotelFlags = [...hotel.flags];
    if (hotel.tags.includes("freeCancel")) hotelFlags.push("freeCancel");
    if (filters.flags.some(flag => !hotelFlags.includes(flag))) return false;

    if (filters.propertyTypes.length > 0 && !filters.propertyTypes.includes(hotel.propertyType)) return false;

    return true;
  };

  const sortHotels = list => {
    const sorted = [...list];
    if (sortValue === "priceLow") sorted.sort((a, b) => a.price - b.price);
    if (sortValue === "priceHigh") sorted.sort((a, b) => b.price - a.price);
    if (sortValue === "rating") sorted.sort((a, b) => b.rating - a.rating);
    return sorted; // "reviewed" = نفس ترتيب الداتا
  };

  const updateOutputs = () => {
    if (priceMin && priceMax) {
      setText($("#priceMinOut"), "$ " + Number(priceMin.value).toLocaleString("en-US"));
      setText(
        $("#priceMaxOut"),
        "$ " + Number(priceMax.value).toLocaleString("en-US") + (Number(priceMax.value) >= PRICE_MAX ? "+" : "")
      );
    }

    if (distance) {
      setText($("#distanceOut"), distance.value + (Number(distance.value) >= DIST_MAX ? "+" : "") + " km");
    }

    $$("[data-counter-out]").forEach(output => {
      const name = output.dataset.counterOut;
      output.textContent = name === "bathrooms" && counters[name] === 0 ? "Any" : counters[name];
    });
  };

  // ============ Templates ============
  const createCard = hotel => `
    <article class="hotel-card  position-relative">

      <div class="hotel-image-wrapper">
        <img src="${hotel.image || FALLBACK_IMAGE}" alt="${hotel.name}" class="hotel-image" loading="lazy">

        ${hotel.badge ? `<span class="hotel-badge ${BADGES[hotel.badge]}">${hotel.badge}</span>` : ""}

        <button type="button" class="hotel-favorite" data-fav="${hotel.id}" aria-label="Save ${hotel.name}">
          <i class="${favorites.has(hotel.id) ? "fa-solid" : "fa-regular"} fa-heart"></i>
        </button>

        <div class="hotel-dots"><span></span><span></span><span></span><span></span></div>
      </div>

      <div class="hotel-card-body">

        <div class="hotel-title-row">
          <h3 class="hotel-title">
            <a href="${HOUSE_DETAILS_URL}" class="stretched-link">${hotel.name}</a>
          </h3>
          <span class="hotel-stars">${hotel.stars} <i class="fa-solid fa-star"></i></span>
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
          ${hotel.type} <span class="sep">|</span> ${hotel.room} <span class="sep">·</span> ${hotel.bed}
        </p>

        ${hotel.onlyLeft ? '<p class="hotel-only-left">Only 1 left at this price</p>' : ""}

        <div class="hotel-price-area">
          ${hotel.discount ? `<span class="hotel-discount">${hotel.discount}% off</span>` : ""}

          <div class="hotel-price-box">
            ${hotel.oldPrice ? `<s class="hotel-old-price">${money(hotel.oldPrice)}</s>` : ""}
            <span class="hotel-price">${money(hotel.price)}</span>
            <small class="hotel-price-note">${NIGHTS} nights, 2 adults</small>
          </div>
        </div>

      </div>
    </article>
  `;

  // 1 2 3 … 9 10 — الصفحات الأكبر من عدد الصفحات الحقيقي بتبقى disabled
  const renderPagination = realPages => {
    if (realPages === 0) {
      pagination.innerHTML = "";
      return;
    }

    const item = (label, page, { active = false, disabled = false, aria = "" } = {}) => `
      <li class="page-item${active ? " active" : ""}${disabled ? " disabled" : ""}">
        <a class="page-link" href="#" data-page="${page}"
           ${aria ? `aria-label="${aria}"` : ""}
           ${active ? 'aria-current="page"' : ""}
           ${disabled ? 'tabindex="-1" aria-disabled="true"' : ""}>${label}</a>
      </li>
    `;

    const dots = '<li class="page-item disabled"><span class="page-link">…</span></li>';
    const last = PAGES_SHOWN;
    let numbers;

    if (currentPage <= 3) numbers = [1, 2, 3, "…", last - 1, last];
    else if (currentPage >= last - 2) numbers = [1, 2, "…", last - 2, last - 1, last];
    else numbers = [1, "…", currentPage - 1, currentPage, currentPage + 1, "…", last];

    pagination.innerHTML = [
      item('<i class="fa-solid fa-chevron-left"></i>', currentPage - 1, { disabled: currentPage === 1, aria: "Previous" }),
      ...numbers.map(n =>
        n === "…" ? dots : item(n, n, { active: n === currentPage, disabled: n > realPages })
      ),
      item('<i class="fa-solid fa-chevron-right"></i>', currentPage + 1, { disabled: currentPage >= realPages, aria: "Next" })
    ].join("");
  };

  // ============ Render ============
  const renderHotels = () => {
    const results = sortHotels(hotels.filter(hotel => matchesHotel(hotel, getFilters())));
    const realPages = Math.ceil(results.length / PER_PAGE);

    currentPage = Math.min(currentPage, Math.max(realPages, 1));

    const start = (currentPage - 1) * PER_PAGE;

    hotelList.innerHTML = results.slice(start, start + PER_PAGE).map(createCard).join("");
    setText(resultsCount, `${results.length} ${results.length === 1 ? "stay" : "stays"} found`);
    if (emptyState) emptyState.classList.toggle("d-none", results.length !== 0);
    $$("[data-results-count]").forEach(el => (el.textContent = results.length));

    renderPagination(realPages);
    updateOutputs();
  };

  const resetFilters = () => {
    form.reset();
    Object.assign(counters, { bedrooms: 1, beds: 1, bathrooms: 0 });
    $$(".form-range-input").forEach(refreshRange);
    currentPage = 1;
    renderHotels();
  };

  // ============ Events ============
  form.addEventListener("submit", event => event.preventDefault());

  form.addEventListener("input", event => {
    // الأدنى لازم يفضل أقل من الأعلى (بس لو سلايدر السعر موجود)
    if (priceMin && priceMax) {
      if (event.target === priceMin && Number(priceMin.value) > Number(priceMax.value)) {
        priceMax.value = priceMin.value;
        refreshRange(priceMax);
      }

      if (event.target === priceMax && Number(priceMax.value) < Number(priceMin.value)) {
        priceMin.value = priceMax.value;
        refreshRange(priceMin);
      }
    }

    currentPage = 1;
    renderHotels();
  });

  form.addEventListener("click", event => {
    const button = event.target.closest("[data-counter]");
    if (!button) return;

    const name = button.dataset.counter;
    const min = name === "bathrooms" ? 0 : 1;

    counters[name] = Math.min(10, Math.max(min, counters[name] + Number(button.dataset.step)));
    currentPage = 1;
    renderHotels();
  });

  document.addEventListener("click", event => {
    if (event.target.closest("[data-clear-filters]")) resetFilters();
  });

  pagination.addEventListener("click", event => {
    const link = event.target.closest("[data-page]");
    if (!link) return;

    event.preventDefault();
    if (link.closest(".disabled")) return;

    currentPage = Number(link.dataset.page);
    renderHotels();

    const top = $("#resultsTop");
    if (top) top.scrollIntoView({ behavior: "smooth" });
  });

  hotelList.addEventListener("click", event => {
    const button = event.target.closest("[data-fav]");
    if (!button) return;

    const id = Number(button.dataset.fav);
    favorites.has(id) ? favorites.delete(id) : favorites.add(id);

    button.querySelector("i").className = `${favorites.has(id) ? "fa-solid" : "fa-regular"} fa-heart`;
  });

  $$("[data-sort]").forEach(item => {
    item.addEventListener("click", event => {
      event.preventDefault();
      sortValue = item.dataset.sort;
      setText($("#sortLabel"), item.textContent.trim());
      currentPage = 1;
      renderHotels();
    });
  });

  $$("[data-view]").forEach(button => {
    button.addEventListener("click", () => {
      hotelList.classList.toggle("is-list", button.dataset.view === "list");

      $$("[data-view]").forEach(other => {
        const isActive = other === button;
        other.classList.toggle("active", isActive);
        other.setAttribute("aria-pressed", String(isActive));
      });
    });
  });

  // ============ Init ============
  createAmenities();
  renderHotels();
})();