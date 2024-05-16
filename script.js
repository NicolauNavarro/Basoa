const body = document.querySelector("body");

window.addEventListener("load", loaded);

const moblieInfo = document.querySelector('.contformobile')

function loaded() {
  body.style.opacity = "1";
}

if(window.innerWidth > 600){
  moblieInfo.remove()
}

const homeNav = document.querySelector("#homeNav");
const storeNav = document.querySelector("#storeNav");
const repairNav = document.querySelector("#repairNav");
const ecoNav = document.querySelector("#ecoNav");
const bikesNav = document.querySelector("#bikesNav");
const extrasNav = document.querySelector("#extrasNav");
const contactNav = document.querySelector("#contactNav");

const home = document.querySelector("#home");
const store = document.querySelector("#store");
const repair = document.querySelector("#repair");
const eco = document.querySelector("#eco");
const bikes = document.querySelector("#bikes");
const extras = document.querySelector("#extras");
const contact = document.querySelector("#contact");

homeNav.addEventListener("click", () => {
  gotosection(home);
});
storeNav.addEventListener("click", () => {
  gotosection(store);
});
repairNav.addEventListener("click", () => {
  gotosection(repair);
});
ecoNav.addEventListener("click", () => {
  gotosection(eco);
});
bikesNav.addEventListener("click", () => {
  gotosection(bikes);
});
extrasNav.addEventListener("click", () => {
  gotosection(extras);
});
contactNav.addEventListener("click", () => {
  gotosection(contact);
});

function gotosection(section) {
  section.scrollIntoView({ behavior: "smooth" });
  setTimeout(() => {
    section.scrollIntoView({ behavior: "smooth" });
  }, 500);
  setTimeout(() => {
    section.scrollIntoView({ behavior: "smooth" });
  }, 1000);
}

document.addEventListener("scroll", () => {
  navLine()
});

navLine()
function navLine(){
  const homeSituation = getSituationNav(home, "homeNav", "");
  const storeSituation = getSituationNav(store, "storeNav", "homeNav");
  const repairSituation = getSituationNav(repair, "repairNav", "storeNav");
  const ecoSituation = getSituationNav(eco, "ecoNav", "repairNav");
  const bikesSituation = getSituationNav(bikes, "bikesNav", "ecoNav");
  const extrasSituation = getSituationNav(extras, "extrasNav", "bikesNav");
  const contactSituation = getSituationNav(contact, "contactNav", "extrasNav");

  function getSituationNav(element, navId, beforeId) {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      var tagafter = document.createElement("style");
      tagafter.innerHTML = `#${navId}::after {display: flex;}
      #${beforeId}::after{display:none;}`;
      document.head.appendChild(tagafter);
      return true;
    } else {
      var tagafter = document.createElement("style");
      tagafter.innerHTML = `#${navId}::after {display: none;}`;
      document.head.appendChild(tagafter);
      return false;
    }
  }
}
