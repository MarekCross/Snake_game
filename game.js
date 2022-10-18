let lastRenderTime = 0;
console.log('siema');
function main(currentTime) {
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  window.requestAnimationFrame(main);
  lastRenderTime = currentTime;
  console.log(secondsSinceLastRender);
}

window.requestAnimationFrame(main);
