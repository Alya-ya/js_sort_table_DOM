'use strict';

const th = document.querySelectorAll('th');

for (const key of th) {
  key.addEventListener('click', (events) => {
    events.preventDefault();

    const index = events.target.cellIndex;
    const tr = document.querySelectorAll('tbody tr');

    const masiv = [...tr];
    const tbody = document.querySelector('tbody');

    masiv.sort((a, b) => {
      if (index === 3) {
        return (
          Number(a.cells[index].textContent.replace(/\D/g, '')) -
          Number(b.cells[index].textContent.replace(/\D/g, ''))
        );
      } else {
        return a.cells[index].textContent.localeCompare(
          b.cells[index].textContent,
        );
      }
    });

    for (const row of masiv) {
      tbody.appendChild(row);
    }
  });
}
