class TabSelector {
  constructor() {
    this.currentTab = "types";
    this.init();
  }

  init() {
    console.log("TabSelector initialized");
    this.bindEvents();
  }

  // We need to bind events to the navigation tabs so we can handle tab navigation
  bindEvents() {
    const navTabs = document.querySelector(".nav-tabs");
    navTabs.addEventListener("click", (event) => this.handleTabClick(event));
    navTabs.addEventListener("keydown", (event) =>
      this.handleTabKeyDown(event)
    );
  }

  handleTabClick(event) {
    const clickedTab = event.target.closest(".nav-tab");
    if (!clickedTab) return;

    const tabName = clickedTab.dataset.tab;
    if (tabName === this.currentTab) return;

    this.setActiveTab(clickedTab);
    this.currentTab = tabName;
    this.filterProducts();
  }

  // Good for keyboard navigation (tab + enter)
  handleTabKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      this.handleTabClick(event);
    }
  }

  //   todo
  setActiveTab(clickedTab) {
    document.querySelectorAll(".nav-tab").forEach((tab) => {
      tab.classList.remove("nav-tab-active");
    });

    clickedTab.classList.add("nav-tab-active");
  }

  //   todo
  filterProducts(category) {}
}

document.addEventListener("DOMContentLoaded", () => {
  new TabSelector();
});
