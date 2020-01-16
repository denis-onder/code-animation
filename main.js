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
    const number = Math.random() * 100;
    // Set the first bar's width to the number, and set the second bar's width to 100% - the number.
    bars[0].style.width = `${number}%`;
    bars[1].style.width = `${100 - number}%`;
  }
}
