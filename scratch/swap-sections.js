const fs = require('fs');

let html = fs.readFileSync('src/app/app.html', 'utf8');

// The markers
const servicesMarker = '<!-- Services / Offerings -->';
const processMarker = '<!-- Process Section -->';
const newsMarker = '<!-- News Section -->';

// Split the HTML into chunks
const part1 = html.substring(0, html.indexOf(servicesMarker));
const servicesPart = html.substring(html.indexOf(servicesMarker), html.indexOf(processMarker));
const processPart = html.substring(html.indexOf(processMarker), html.indexOf(newsMarker));
const part2 = html.substring(html.indexOf(newsMarker));

// Reassemble with Process before Services
const newHtml = part1 + processPart + servicesPart + part2;

fs.writeFileSync('src/app/app.html', newHtml);
console.log('Successfully swapped Process and Services sections.');
