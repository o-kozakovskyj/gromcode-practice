const getNumbersRow = (from,to) => {
  const line = [];
  for (let i = from; i <= to; i++) {
    line.push(i)
  }
  return line
}
const getSeates = () => getNumbersRow(1, 10)
    .map(seat => `<div class="sector__seat" data-seat-number="${seat}"></div>`)
    .join('');

const getLines = () => getNumbersRow(1, 10)
    .map(line => `<div class="sector__line" data-line-number="${line}">${getSeates()}</div>`)
    .join('');
    const arenaEl = document.querySelector('.arena')

const getArena = () => {
  
  const arenaSectors = getNumbersRow(1, 3)
    .map(sector => `<div class="sector" data-sector-number="${sector}">${getLines()}</div>`)
    .join('');
  arenaEl.innerHTML = arenaSectors;
}

const onSeatSelect = event => {
  const isSeat = event.target.classList.contains('sector__seat');
  if (!isSeat) {
    return
  }
  const seatNumber = event.target.dataset.seatNumber;
  const lineNumber = event.target.closest('.sector__line').dataset.lineNumber;
  const sectorNumber = event.target.closest('.sector').dataset.sectorNumber;
  const boardElem = document.querySelector('.board__selected-seat');
  boardElem.textContent = `S ${sectorNumber} - L ${lineNumber} - S ${seatNumber}`;
}
arenaEl.addEventListener('click', onSeatSelect);
getArena()