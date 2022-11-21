const tabLinks = document.getElementsByClassName("tab_links");
const tabContents = document.getElementsByClassName("tab_contents");

function openTab(tabname) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active_link");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active_tab");
  }
  event.currentTarget.classList.add("active_link");
  document.getElementById(tabname).classList.add("active_tab");
}
