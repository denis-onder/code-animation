const containerLine = document.querySelectorAll(".container_line");

containerLine.forEach(logChildren);

// Get children of a line
function logChildren(line) {
  // NOTE Logging children for testing
  const bars = Array.from(line.children);
  // Generate a random number to represent the width of each bar.
  if (bars.length === 1) {
    bars[0].style.width = "100%";
  } else {
    const numbers = bars.map(_ => Math.random() * (100 / bars.length));
    bars.forEach((bar, i) => (bar.style.width = `${numbers[i]}%`));
  }
  // Test animation
  bars.forEach(animateBar);
}

// Simulate an animation using setTimeout
function animateBar({ firstChild }) {
  firstChild.classList.add("show");
  firstChild.style.backgroundColor =
    Math.floor(Math.random() * 100) > 75 ? "red" : "white";
}
