const fs = require('fs');
const path = 'C:\\Users\\alfre\\.openclaw\\workspace\\website\\index.html';
let c = fs.readFileSync(path, 'utf8');

// Fix broken emoji mojibake
c = c.replace(/ðŸŽ¬/g, '🎬');
c = c.replace(/ðŸ"¸/g, '📸');
c = c.replace(/ðŸŽ¨/g, '🎨');
c = c.replace(/âœ¨/g, '✨');
c = c.replace(/ðŸ"®/g, '🔮');
c = c.replace(/ðŸš€/g, '🚀');

// Fix remaining dashes and quotes
c = c.replace(/â€"/g, '—');
c = c.replace(/â€™/g, "'");
c = c.replace(/â€œ/g, '"');

fs.writeFileSync(path, c, 'utf8');
console.log('Emojis fixed');
