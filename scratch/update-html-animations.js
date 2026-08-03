const fs = require('fs');

let html = fs.readFileSync('src/app/app.html', 'utf8');

// Replace Hero Background Orbs
const oldHeroBg = `  <!-- Orange Blur Effect -->
  <div class="absolute top-1/2 left-1/4 -translate-y-1/2 w-[800px] h-[800px] z-0 pointer-events-none">
    <div class="orange-blur opacity-60"></div>
  </div>`;

const newHeroBg = `  <!-- Animated Hero Orbs Background -->
  <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <div class="hero-orb orb-1"></div>
    <div class="hero-orb orb-2"></div>
    <div class="hero-orb orb-3"></div>
  </div>`;

html = html.replace(oldHeroBg, newHeroBg);
if (html.includes(newHeroBg)) {
    console.log('Hero background updated');
} else {
    console.log('Failed to update Hero background');
}

// Add service-item and service-icon-wrapper classes to Services section
// Find: <div class="relative flex items-center mb-16 reveal
// Replace: <div class="relative flex items-center mb-16 reveal service-item
// And similarly for the delay ones
html = html.replace(/<div class="relative flex items-center mb-16 reveal/g, '<div class="relative flex items-center mb-16 reveal service-item');
html = html.replace(/<div class="relative flex items-center reveal delay-300">/g, '<div class="relative flex items-center reveal delay-300 service-item">');

// Find the icon circles
// <div class="absolute left-1/2 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 max-md:left-5 w-20 h-20 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center z-10 shadow-sm">
const oldCircle = `max-md:left-5 w-20 h-20 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center z-10 shadow-sm">`;
const newCircle = `max-md:left-5 w-20 h-20 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center z-10 shadow-sm service-icon-wrapper">`;
html = html.split(oldCircle).join(newCircle);

fs.writeFileSync('src/app/app.html', html);
console.log('Successfully updated app.html with animation classes');
