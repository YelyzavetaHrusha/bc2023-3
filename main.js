const fs = require('fs');


function readJSONFile(filename) {
  try {
    const data = fs.readFileSync(filename, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Помилка зчитування файлу JSON:', error);
    return null;
  }
}


function findMaxExchangeRate(data) {
  let maxRate = 0;

  for (const item of data) {
    if (item.rate > maxRate) {
      maxRate = item.rate;
    }
  }

  return maxRate;
}

function main() {
  const filename = 'data.json'; 
  const data = readJSONFile(filename);

  if (data) {
    const maxRate = findMaxExchangeRate(data);
    const result = `Максимальний курс:${maxRate}`;


    fs.writeFileSync('output.txt', result);
    console.log(result);
  }
}

main(); 