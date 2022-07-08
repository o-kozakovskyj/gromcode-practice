export function squaredNumbers() {
  const liArray = Array.from(document.querySelectorAll(".number"));
  liArray.map((li) => {
    const data = li.dataset.number;
    li.dataset.squaredNumber = data * data
  });
}
// squaredNumbers()