let slider = document.querySelector(".whatWeDoSlider");
let section = document.querySelector(".whatWedoSection");
if(slider==null && section==null){
    slider = document.querySelector(".underMainTeamMembersSlider");
    section = document.querySelector(".underMainTeamMembersSection");
    

}
let sliderMaxLeft = 0;
const sliderRect = slider.getBoundingClientRect();
const sectionRect = section.getBoundingClientRect();
let freshed = true;
function preventScroll(e) {
  e.preventDefault();
  e.stopPropagation();
  return false;
}

let startPos = 0;
let lastPos = 0;
let velocity = 0;
let dragging = false;
let deceleration = 0.95; // Adjust this value for more or less deceleration
let decelerationInterval = 10; // Interval in milliseconds
let decelerationId = null;
let left = window.getComputedStyle(slider);

slider.style.left = left.left;
slider.addEventListener("touchstart", startDrag);
slider.addEventListener("touchmove", doDrag);
slider.addEventListener("touchend", endDrag);
slider.addEventListener("mousedown", startDrag);
slider.addEventListener("mousemove", doDrag);
slider.addEventListener("mouseup", endDrag);
function startDrag(e) {
  startPos = e.touches ? e.touches[0].clientX : e.clientX;
  lastPos = startPos;
  velocity = 0;
  dragging = true;
  if (decelerationId) {
    clearInterval(decelerationId);
    decelerationId = null;
  }
  if (freshed) {
    freshed = false;
    sliderMaxLeft = parseInt(
      sliderRect.left - sectionRect.left
    );
  }
}
function doDrag(e) {
  window.addEventListener("scroll", preventScroll, { passive: false });
  e.preventDefault();
  e.stopPropagation();

  if (!dragging) return;
  const currentPos = e.touches ? e.touches[0].clientX : e.clientX;
  const deltaX = currentPos - lastPos;
  let newLeft = parseFloat(slider.style.left || "0") + deltaX;
  const newRect = slider.getBoundingClientRect();
  const rectSection = section.getBoundingClientRect();

  if (
    newRect.left - rectSection.left + deltaX < sliderMaxLeft &&
    newRect.right + deltaX > rectSection.right
  ) {
    updateSliderPosition(newLeft);
  }

  if (newRect.left - rectSection.left + deltaX > sliderMaxLeft) {
    if (newRect.left - rectSection.left < sliderMaxLeft + 50) {
      currentX = deltaX;
      updateSliderPosition(newLeft);
    }
  }
  if (newRect.right + deltaX < rectSection.right) {
    if (newRect.right > rectSection.right - 50) {
      currentX = deltaX;
      updateSliderPosition(newLeft);
    }
  }

  lastPos = currentPos;
  velocity = deltaX; // Calculate velocity
}
function endDrag() {
  dragging = false;
  // Start the deceleration process
  decelerationId = setInterval(applyVelocity, decelerationInterval);
}
function updateSliderPosition(pos) {
  slider.style.left = `${pos}px`;
}

function applyVelocity() {
  if (Math.abs(velocity) < 0.1) {
    clearInterval(decelerationId);
    decelerationId = null;
    return; // Stop the interval when velocity is very low
  }
  let currentLeft = parseFloat(slider.style.left || "0");
  let newLeft = currentLeft + velocity;

  const newRect = slider.getBoundingClientRect();
  const rectSection = section.getBoundingClientRect();

  updateSliderPosition(newLeft);
  velocity *= deceleration; // Apply deceleration
  if (newRect.left - rectSection.left > sliderMaxLeft) {
    velocity = 0;
    lastPos = sliderMaxLeft;
    updateSliderPosition(lastPos);
  }
  if (newRect.right < rectSection.right) {
    velocity = 0;
    // Snap back to right boundary
    lastPos =
      -slider.offsetWidth + rectSection.right - rectSection.left;

    updateSliderPosition(lastPos);
  }
}