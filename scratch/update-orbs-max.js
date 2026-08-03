const fs = require('fs');

let css = fs.readFileSync('src/styles.css', 'utf8');

const regex = /\/\* Hero Orbs Animation \*\/[\s\S]*?@keyframes orb-float {[\s\S]*?}/;

const newHeroOrbs = `/* Hero Orbs Animation */
.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 1;
  animation: orb-float 12s infinite ease-in-out alternate;
  pointer-events: none;
}

.orb-1 {
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(255, 96, 55, 0.9) 0%, rgba(255, 96, 55, 0.4) 60%, transparent 100%);
  top: -20%;
  left: -10%;
  animation-delay: 0s;
}

.orb-2 {
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, rgba(160, 200, 202, 0.9) 0%, rgba(160, 200, 202, 0.4) 60%, transparent 100%);
  bottom: -10%;
  right: -10%;
  animation-delay: -4s;
}

.orb-3 {
  width: 900px;
  height: 900px;
  background: radial-gradient(circle, rgba(115, 54, 53, 0.7) 0%, rgba(115, 54, 53, 0.3) 60%, transparent 100%);
  top: 40%;
  left: 40%;
  animation-delay: -8s;
}

.orb-4 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 70%);
  top: 50%;
  left: 20%;
  animation-delay: -2s;
  mix-blend-mode: overlay;
}

@keyframes orb-float {
  0% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(15vw, -15vh) scale(1.2); }
  66% { transform: translate(-15vw, 15vh) scale(0.8); }
  100% { transform: translate(10vw, 20vh) scale(1.3); }
}`;

css = css.replace(regex, newHeroOrbs);
fs.writeFileSync('src/styles.css', css);
console.log('Updated orb styles for maximum visibility');
