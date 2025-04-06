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

// Sparkle background effect
function createSparkleBackground() {
    const sparklesContainer = document.querySelector('.sparkles');
    const numberOfSparkles = 50;

    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        sparkle.style.left = `${x}%`;
        sparkle.style.top = `${y}%`;
        
        // Random size
        const size = Math.random() * 4 + 2; // Between 2px and 6px
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        
        // Random animation duration
        const duration = Math.random() * 2 + 1; // Between 1 and 3 seconds
        sparkle.style.animation = `sparkle ${duration}s infinite, float ${duration * 2}s infinite`;
        
        // Random delay
        sparkle.style.animationDelay = `${Math.random() * 2}s`;
        
        // Random opacity
        sparkle.style.opacity = Math.random() * 0.7 + 0.3;
        
        // Add color variation
        const hue = Math.random() * 60 - 30; // Golden sparkle variation
        sparkle.style.filter = `hue-rotate(${hue}deg)`;
        
        return sparkle;
    }

    // Create initial sparkles
    for (let i = 0; i < numberOfSparkles; i++) {
        sparklesContainer.appendChild(createSparkle());
    }

    // Periodically add new sparkles
    setInterval(() => {
        const oldSparkle = sparklesContainer.firstChild;
        if (oldSparkle) {
            oldSparkle.remove();
        }
        sparklesContainer.appendChild(createSparkle());
    }, 1000);
}

// Initialize sparkle background
document.addEventListener('DOMContentLoaded', createSparkleBackground);

// Add mousemove sparkle effect
document.addEventListener('mousemove', (e) => {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${e.pageX}px`;
    sparkle.style.top = `${e.pageY}px`;
    sparkle.style.width = '8px';
    sparkle.style.height = '8px';
    document.querySelector('.sparkles').appendChild(sparkle);
    
    // Remove sparkle after animation
    setTimeout(() => {
        sparkle.remove();
    }, 1500);
});

// Update FAQ Accordion for better Safari support
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const answer = faqItem.querySelector('.faq-answer');
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
            const otherAnswer = item.querySelector('.faq-answer');
            otherAnswer.style.display = 'none';
            otherAnswer.style.opacity = '0';
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
            answer.style.display = 'block';
            // Force browser reflow
            answer.offsetHeight;
            answer.style.opacity = '1';
        }
        
        // Add sparkle effect on click
        const rect = question.getBoundingClientRect();
        createConfettiBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);
    });
});

// Ensure smooth animation start
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.faq-answer').forEach(answer => {
        answer.style.display = 'none';
        answer.style.opacity = '0';
    });
}); 