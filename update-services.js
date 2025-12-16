const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Find and replace the first four service cards
const lines = html.split('\n');
let gapDone = false, hiitDone = false, boxDone = false, funcDone = false;

for (let i = 0; i < lines.length; i++) {
    if (!gapDone && lines[i].includes('<!-- Cardio GAP -->')) {
        // Find the next service-card class within a few lines
        for (let j = i; j < i + 5 && j < lines.length; j++) {
            if (lines[j].includes('service-card group')) {
                lines[j] = lines[j].replace('service-card group', 'service-card group service-card-gap');
                gapDone = true;
                break;
            }
        }
    }
    if (!hiitDone && lines[i].includes('<!-- Cardio HIIT -->')) {
        for (let j = i; j < i + 5 && j < lines.length; j++) {
            if (lines[j].includes('service-card group')) {
                lines[j] = lines[j].replace('service-card group', 'service-card group service-card-hiit');
                hiitDone = true;
                break;
            }
        }
    }
    if (!boxDone && lines[i].includes('<!-- SharkBox -->')) {
        for (let j = i; j < i + 5 && j < lines.length; j++) {
            if (lines[j].includes('service-card group')) {
                lines[j] = lines[j].replace('service-card group', 'service-card group service-card-sharkbox');
                boxDone = true;
                break;
            }
        }
    }
    if (!funcDone && lines[i].includes('<!-- Entrenamiento Funcional -->')) {
        for (let j = i; j < i + 5 && j < lines.length; j++) {
            if (lines[j].includes('service-card group')) {
                lines[j] = lines[j].replace('service-card group', 'service-card group service-card-functional');
                funcDone = true;
                break;
            }
        }
    }
}

html = lines.join('\n');
fs.writeFileSync('index.html', html, 'utf8');
console.log('Service cards updated successfully!');
