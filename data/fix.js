const fs = require('fs')

fs.readFile(
  './us-zip-code-latitude-and-longitude.json',
  'utf8',
  (err, data) => {
    if (err) {
      console.log(`Error reading file from disk: ${err}`)
    } else {
      // parse JSON string to JSON object
      const zipcodes = JSON.parse(data)

      const dict = zipcodes.reduce((acc, zipcode) => {
        return {
          ...acc,
          [zipcode.fields.zip]: zipcode.fields.geopoint,
        }
      }, {})

      console.log(dict['38732'])

      fs.writeFile(
        './zipcode-dict.json',
        JSON.stringify(dict),
        'utf8',
        (err) => {
          if (err) {
            console.log(`Error writing file: ${err}`)
          } else {
            console.log(`File is written successfully!`)
          }
        }
      )

      // // print all databases
      // databases.forEach(db => {
      //     console.log(`${db.name}: ${db.type}`);
      // });
    }
  }
)
