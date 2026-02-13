const fs = require('fs');
const path = 'C:\\Users\\alfre\\.openclaw\\workspace\\website\\index.html';
let c = fs.readFileSync(path, 'utf8');

// Fix mojibake (UTF-8 bytes decoded as Windows-1252)
c = c.replace(/â˜…/g, '★');
c = c.replace(/â€"/g, '—');
c = c.replace(/â€™/g, "'");
c = c.replace(/Ã¨/g, 'è');
c = c.replace(/â€œ/g, '"');
c = c.replace(/\u00e2\u0080\u009d/g, '"');
c = c.replace(/Â·/g, '·');
c = c.replace(/Â\u00a0/g, ' ');
c = c.replace(/Â /g, ' ');

fs.writeFileSync(path, c, 'utf8');
console.log('Encoding fixed');
