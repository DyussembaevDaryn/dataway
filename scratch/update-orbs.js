const fs = require('fs');

let css = fs.readFileSync('src/styles.css', 'utf8');

const oldHeroOrbs = `/* Hero Orbs Animation */
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
}`;

const newHeroOrbs = `/* Hero Orbs Animation */
.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(70px);
  opacity: 0.8;
  mix-blend-mode: screen;
  animation: orb-float 15s infinite ease-in-out alternate;
  pointer-events: none;
}

.orb-1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(255,160,120,0.8) 0%, rgba(255,96,55,0.4) 70%, transparent 100%);
  top: -100px;
  left: -100px;
  animation-delay: 0s;
}

.orb-2 {
  width: 550px;
  height: 550px;
  background: radial-gradient(circle, rgba(220,250,255,0.8) 0%, rgba(160,200,202,0.4) 70%, transparent 100%);
  bottom: -50px;
  right: -50px;
  animation-delay: -5s;
}

.orb-3 {
  width: 750px;
  height: 750px;
  background: radial-gradient(circle, rgba(255,200,190,0.6) 0%, rgba(200,100,100,0.3) 70%, transparent 100%);
  top: 30%;
  left: 30%;
  animation-delay: -10s;
}`;

css = css.replace(oldHeroOrbs, newHeroOrbs);
fs.writeFileSync('src/styles.css', css);
console.log('Updated orb styles');
