const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8').replace(/\r\n/g, '\n');

const targetStart = code.indexOf('                    ) : activeCategory === "assistente" ? (');
const targetEnd = code.indexOf('                    ) : activeCategory === "achadinhos" ? (');

if (targetStart === -1 || targetEnd === -1) {
  console.log('Blocks not found');
  process.exit(1);
}

const block = code.substring(targetStart, targetEnd);

// Remove the block from the original location
code = code.substring(0, targetStart) + code.substring(targetEnd);

// Find where to inject
const regex = /        \) : \(\n          <>\n            \{\/\* Days Navigator \*\//;
const match = code.match(regex);

if (!match) {
  console.log('Inject point not found');
  process.exit(1);
}

const injectIndex = match.index;

const newBlock = block.replace('                    ) : activeCategory === "assistente" ? (', '        ) : activeCategory === "assistente" ? (\n          <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">\n            <div className="pt-8">').replace(/\n$/, '') + '\n            </div>\n          </div>\n';

code = code.substring(0, injectIndex) + newBlock + code.substring(injectIndex);

fs.writeFileSync('app/page.tsx', code);
console.log('Success');
