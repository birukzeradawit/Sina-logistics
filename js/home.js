// Departure-board ticker — home page only.
// Duplicated once in the array for a seamless, gap-free scroll loop.
const sectors = [
  { code: 'SV-01', name: 'PROCUREMENT & SUPPLY', status: 'ACTIVE' },
  { code: 'SV-02', name: 'LOGISTICS & DELIVERY', status: 'ACTIVE' },
  { code: 'SV-03', name: 'EVENT ORGANIZING', status: 'ACTIVE' },
  { code: 'SV-04', name: 'PROPERTY MANAGEMENT', status: 'ACTIVE' },
  { code: 'SV-05', name: 'STAFF OUTSOURCING', status: 'ACTIVE' },
];

const track = document.getElementById('board-track');
if (track) {
  const itemHTML = (s) =>
    `<div class="board-item"><span class="code">${s.code}</span><span>${s.name}</span><span class="status">${s.status}</span></div>`;
  const html = sectors.map(itemHTML).join('');
  track.innerHTML = html + html; // duplicate for seamless loop
}
