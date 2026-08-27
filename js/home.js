// Departure-board ticker — home page only.
// Duplicated once in the array for a seamless, gap-free scroll loop.
const sectors = [
  { code: 'RT-01', name: 'LOGISTICS', status: 'ACTIVE' },
  { code: 'RT-02', name: 'IMPORT / EXPORT', status: 'ACTIVE' },
  { code: 'RT-03', name: 'CONSTRUCTION', status: 'ACTIVE' },
  { code: 'RT-04', name: 'ENERGY & UTILITIES', status: 'ACTIVE' },
  { code: 'RT-05', name: 'AGRICULTURE', status: 'ACTIVE' },
  { code: 'RT-06', name: 'MANUFACTURING', status: 'ACTIVE' },
  { code: 'RT-07', name: 'TOURISM', status: 'ACTIVE' },
  { code: 'RT-08', name: 'CONSULTING', status: 'ACTIVE' },
  { code: 'RT-09', name: 'REAL ESTATE', status: 'ACTIVE' },
];

const track = document.getElementById('board-track');
if (track) {
  const itemHTML = (s) =>
    `<div class="board-item"><span class="code">${s.code}</span><span>${s.name}</span><span class="status">${s.status}</span></div>`;
  const html = sectors.map(itemHTML).join('');
  track.innerHTML = html + html; // duplicate for seamless loop
}
