// replace number with comma using regex
function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const counters = document.querySelectorAll(".count");
const speed = 200;

// active counting from 0 to target
counters.forEach((counter) => {
  const updateCount = () => {
    const target = parseInt(+counter.getAttribute("data-target"));
    const count = parseInt(+counter.innerText);
    const increment = Math.trunc(target / speed);
    console.log(increment);

    if (count < target) {
      if ((target - count) < increment) {
        counter.innerHTML = numberWithCommas(target);
      } else {
        counter.innerText = count + increment;
      }
      setTimeout(updateCount, 1);
    }
  };
  updateCount();
});
