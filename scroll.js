// Tworzenie obserwatora mutacji
const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
      const activeTabContent = document.querySelector('.tabcontent.active');
      if (activeTabContent) {
        changeBackground(activeTabContent);
      }
    }
  });
});

// Funkcja zmieniająca tło na lustrzane odbicie dla aktywnego tabcontent
function changeBackground(element) {
  let isNormal = true; // Flaga do śledzenia obecnego tła

  if (isNormal) {
    element.style.backgroundImage = 'url("img/skyback-2.png")'; // Lustrzane odbicie obrazka
    element.style.transform = 'scaleY(-1)'; // Odbicie lustrzane w pionie
  } else {
    element.style.backgroundImage = 'url("img/skyback2.png")'; // Obrazek normalny
    element.style.transform = 'scaleY(1)'; // Resetowanie transformacji
  }
  isNormal = !isNormal; // Odwrócenie flagi
}

// Obserwowanie zmian w atrybutach klasy w drzewie DOM
const targetNode = document.querySelector('.tabcontent');
const config = { attributes: true, attributeFilter: ['class'] };
observer.observe(targetNode, config);

