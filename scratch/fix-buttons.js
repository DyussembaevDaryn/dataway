const fs = require('fs');

let html = fs.readFileSync('src/app/app.html', 'utf8');

html = html.replace(/<button([^>]*)class="([^"]*)"/g, (match, before, cls) => {
    if (!cls.includes('cursor-pointer')) {
        cls += ' cursor-pointer';
    }
    return `<button${before}class="${cls}"`;
});

fs.writeFileSync('src/app/app.html', html);
console.log('Successfully updated buttons with cursor-pointer');
