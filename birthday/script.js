// Cursor trail effect
document.addEventListener('mousemove', function(e) {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.textContent = '🤠';  // Add the cowboy hat emoji
    trail.style.left = (e.pageX - 15) + 'px';
    trail.style.top = (e.pageY - 15) + 'px';
    document.body.appendChild(trail);

    // Random rotation for each hat
    const rotation = Math.random() * 360;
    trail.style.transform = `rotate(${rotation}deg)`;

    setTimeout(() => {
        trail.remove();
    }, 1000);
});

// Random sparkle effect
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.top = Math.random() * 100 + 'vh';
    sparkle.style.animation = 'sparkle 1.5s linear forwards';
    document.querySelector('.sparkles').appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 1500);
}

setInterval(createSparkle, 300);

// Update visitor counter randomly
setInterval(() => {
    const counter = document.getElementById('count');
    const currentCount = parseInt(counter.textContent);
    counter.textContent = currentCount + Math.floor(Math.random() * 3) + 1;
}, 5000); 