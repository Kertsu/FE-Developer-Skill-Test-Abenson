class TabSelector {
  constructor() {
    this.products = [];
    this.currentTab = "types";
    this.productGrid = document.querySelector(".product-grid");
    this.init();
  }

  init() {
    this.bindEvents();
    this.setActiveTab(document.querySelector('[data-tab="types"]'));
    this.loadProducts();
  }

  // We need to bind events to the navigation tabs so we can handle tab navigation
  bindEvents() {
    // we'll just do event delegation instead of attaching event listeners to each tab
    const navTabs = document.querySelector(".nav-tabs");

    navTabs.addEventListener("click", (event) => this.handleTabClick(event));
    navTabs.addEventListener("keydown", (event) =>
      this.handleTabKeyDown(event)
    );
  }

  async loadProducts() {
    this.showSkeletons();
    const response = await fetch("products.json");
    this.products = await response.json();
    this.renderProducts(this.currentTab);
  }

  renderProducts(category) {
    this.productGrid.innerHTML = ""; // clear old items

    const filtered = this.products.filter((p) => p.category === category);

    filtered.forEach((item) => {
      const link = document.createElement("a");
      link.href = "#";
      link.dataset.title = item.title;
      link.dataset.tags = item.tags.join(",");

      const titleParts = item.title.split(" ");
      let titleHTML;

      if (titleParts.length > 1) {
        // everything except the last word
        const firstPart = titleParts.slice(0, -1).join(" ");
        const lastPart = titleParts[titleParts.length - 1];

        titleHTML = `
        <span class="text-blue-secondary">${firstPart}</span>
        <span class="text-blue-primary">${lastPart}</span>
      `;
      } else {
        titleHTML = `<span class="text-blue-secondary">${item.title}</span>`;
      }

      link.innerHTML = `
      <article class="product-card">
        <div>
          <div class="product-image">
            <img width="550" height="300" src="${item.image}" alt="${
        item.title
      }" />
          </div>
          <div class="product-info">
            <h3 class="product-title">
              ${titleHTML}
            </h3>
            <div class="info-reveal">
              <h3 class="product-title-reveal">
                ${titleHTML}
              </h3>
              <p class="product-description">${item.description}</p>
              <div class="product-tags md">
                ${item.tags
                  .map((tag) => `<span class="product-tag">${tag}</span>`)
                  .join("")}
              </div>
            </div>
          </div>
        </div>
        <div class="product-tags sm">
          ${item.tags
            .map((tag) => `<span class="product-tag">${tag}</span>`)
            .join("")}
        </div>
      </article>
    `;

      this.productGrid.appendChild(link);
    });
  }

  showSkeletons(count = 6) {
    this.productGrid.innerHTML = "";
    for (let i = 0; i < count; i++) {
      const skeleton = document.createElement("div");
      skeleton.classList.add("skeleton-card");
      this.productGrid.appendChild(skeleton);
    }
  }

  async handleTabClick(event) {
    const clickedTab = event.target.closest(".nav-tab");
    if (!clickedTab) return;

    const tabName = clickedTab.dataset.tab;
    if (tabName === this.currentTab) return;

    this.setActiveTab(clickedTab);
    this.currentTab = tabName;

    // simulate API call
    this.showSkeletons();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    this.renderProducts(tabName);
  }

  // Good for keyboard navigation (tab + enter)
  handleTabKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      this.handleTabClick(event);
    }
  }

  setActiveTab(clickedTab) {
    document.querySelectorAll(".nav-tab").forEach((tab) => {
      tab.classList.remove("nav-tab-active");
    });

    clickedTab.classList.add("nav-tab-active");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new TabSelector();
});
