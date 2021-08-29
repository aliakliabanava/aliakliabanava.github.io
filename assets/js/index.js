// replace number with comma using regex
function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const counters = document.querySelectorAll(".count");
const speed = 200;

// function to trigger count
function triggerCount() {
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
}

// check window on scroll to view by user
$(window).scroll(ifScrolled);

// bool: viewed or not viewed
var viewed = false;

// if element is viewed
function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

// If scrolled to class impact, than trigger counter on inner elements
function ifScrolled() {
  if (isScrolledIntoView($(".impact")) && !viewed) {
      viewed = true;
      console.log("Viewed");
      triggerCount();
    };
  };
