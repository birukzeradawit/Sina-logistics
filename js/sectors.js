// Highlights the matching pill in the sticky sub-nav as each section block
// scrolls into view — like a manifest entry lighting up as it's scanned.
const sectorBlocks = document.querySelectorAll('.sector-block, .cap-group');
const navItems = document.querySelectorAll('.nav-item');

if (sectorBlocks.length && navItems.length) {
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navItems.forEach((item) => {
            item.classList.toggle('active', item.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { rootMargin: '-140px 0px -60% 0px', threshold: 0 }
  );
  sectorBlocks.forEach((block) => spy.observe(block));
}
