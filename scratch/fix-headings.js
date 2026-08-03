const fs = require('fs');

let html = fs.readFileSync('src/app/app.html', 'utf8');

// Replace grayscale classes on partner logos
html = html.replace(/<img src="assets\/images\/hp\.png"([^>]+)grayscale hover:grayscale-0 transition-all duration-300([^>]*)>/g, '<img src="assets/images/hp.png"$1$2>');
html = html.replace(/<img src="assets\/images\/NZS\.png"([^>]+)grayscale hover:grayscale-0 transition-all duration-300([^>]*)>/g, '<img src="assets/images/NZS.png"$1$2>');
html = html.replace(/<img src="assets\/images\/sangfor\.png"([^>]+)grayscale hover:grayscale-0 transition-all duration-300([^>]*)>/g, '<img src="assets/images/sangfor.png"$1$2>');

// Replace font weights for headings
html = html.replace(/<h([1-6])([^>]*)class="([^"]*)"([^>]*)>/g, (match, tag, before, cls, after) => {
    let newCls = cls.replace(/\bfont-(extrabold|bold)\b/g, 'font-normal');
    return `<h${tag}${before}class="${newCls}"${after}>`;
});

fs.writeFileSync('src/app/app.html', html);
console.log('Successfully updated app.html');
