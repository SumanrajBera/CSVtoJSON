module.exports.csvtojson = (data) => {
    // To seperate data into rows
    const rows = data.trim().split("\n")
    // Seperating header
    const header = parseCSVLine(rows[0]);
    const result = []

    // Putting data into result
    for (let i = 1; i < rows.length; i++) {
        // Parsing data so that comma seperated single data is not seperated
        const values = parseCSVLine(rows[i]);
        const flatEntry = {};

        header.forEach((header, idx) => {
            flatEntry[header] = values[idx] || null;
        });

        const nestedEntry = expandDottedKeys(flatEntry);
        result.push(nestedEntry);
    }

    return result;
}

function parseCSVLine(line) {
    return line.split(',').map(v => v.trim().replace(/\r$/, ''));
}

function expandDottedKeys(flatObj) {
    console.log(flatObj)
    const result = {};

    for (const key in flatObj) {
        const keys = key.split('.');
        let current = result;

        keys.forEach((part, idx) => {
            if (idx === keys.length - 1) {
                current[part] = flatObj[key];
            } else {
                if (!current[part] || typeof current[part] !== 'object') {
                    current[part] = {};
                }
                current = current[part];
            }
        });
    }

    return result;
}