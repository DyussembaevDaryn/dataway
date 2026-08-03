const fs = require('fs');

const css = `
/* Modal Animations */
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scale-up {
  from { opacity: 0; transform: scale(0.95) translateY(10px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}

.animate-fade-in {
  animation: fade-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-scale-up {
  animation: scale-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
`;

fs.appendFileSync('src/styles.css', css);
console.log('Appended modal animations');
