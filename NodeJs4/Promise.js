const fs = require('fs').promises;

async function readMultiFile() {
  try {
    const data = await fs.readFile('a.txt', 'utf-8');
    const data1 = await fs.readFile('a1.txt', 'utf-8');
    const data2 = await fs.readFile('a2.txt', 'utf-8');

    await fs.writeFile('result.txt', data + data1 + data2);
    console.log('All files read successfully');
  } catch {
    console.log('Error reading multiple files');
  }
}

async function readMultiFile1() {
  let data, data1, data2;

  try {
    data = await fs.readFile('a.txt', 'utf-8');
  } catch {
    console.log('Error reading file a.txt');
  }

  try {
    data1 = await fs.readFile('b.txt', 'utf-8'); // fixed from a.txt → b.txt
  } catch {
    console.log('Error reading file b.txt');
  }

  try {
    data2 = await fs.readFile('z.txt', 'utf-8');
  } catch {
    console.log('Error reading file z.txt');
  }

  try {
    await fs.writeFile('result.txt', (data || '') + (data1 || '') + (data2 || ''));
    console.log('Result written successfully');
  } catch {
    console.log('Error writing result file');
  }
}
