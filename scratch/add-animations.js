const fs = require('fs');

let css = fs.readFileSync('src/styles.css', 'utf8');

const newCss = `
/* Hero Orbs Animation */
.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.6;
  animation: orb-float 15s infinite ease-in-out alternate;
  pointer-events: none;
}

.orb-1 {
  width: 600px;
  height: 600px;
  background: rgba(255, 96, 55, 0.5); /* Accent */
  top: -100px;
  left: -100px;
  animation-delay: 0s;
}

.orb-2 {
  width: 500px;
  height: 500px;
  background: rgba(160, 200, 202, 0.5); /* Teal */
  bottom: -50px;
  right: -50px;
  animation-delay: -5s;
}

.orb-3 {
  width: 700px;
  height: 700px;
  background: rgba(115, 54, 53, 0.4); /* Brown */
  top: 40%;
  left: 40%;
  animation-delay: -10s;
}

@keyframes orb-float {
  0% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(100px, -150px) scale(1.1); }
  66% { transform: translate(-150px, 100px) scale(0.9); }
  100% { transform: translate(50px, 50px) scale(1.2); }
}

/* Service Item Hover Effects */
.service-icon-wrapper {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-item:hover .service-icon-wrapper {
  transform: scale(1.15) rotate(5deg);
  background-color: var(--color-accent);
  border-color: var(--color-accent);
  box-shadow: 0 0 30px rgba(255, 96, 55, 0.5);
}

.service-item:hover .service-icon-wrapper svg {
  color: white !important;
  transform: scale(1.1);
}

.service-item:hover h3 {
  color: var(--color-accent);
  transition: color 0.3s ease;
}

/* Timeline glow effect on hover */
.timeline-line::before {
  transition: all 0.5s ease;
}

#about:hover .timeline-line::before {
  background-color: var(--color-accent);
  box-shadow: 0 0 10px rgba(255, 96, 55, 0.5);
}
`;

fs.appendFileSync('src/styles.css', newCss);
console.log('Appended CSS animations to styles.css');
