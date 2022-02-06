/* eslint @typescript-eslint/no-var-requires: "off" */
require('colors');
const fs = require('fs');
const templates = require('./templates/templates');
const componentName = process.argv[2];

if (!componentName) {
  console.error('Please supply a valid component name'.red);
  process.exit(1);
}

console.log('Creating Component Templates with name: ' + componentName);

const componentDirectory = `./components/${componentName}`;

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${componentName} already exists.`.red);
  process.exit(1);
}

fs.mkdirSync(componentDirectory);

const generatedTemplates = templates.map(template => template(componentName));

generatedTemplates.forEach(template => {
  let name = template.name ? template.name : componentName;

  fs.writeFileSync(
    `${componentDirectory}/${name}${template.extension}`,
    template.content,
  );
});

/**
 * Todo: Add automatic import to scss
 */
console.log(
  `Successfully created component under: ${componentDirectory.green}
Add: ${
    `@import '../components/${componentName}';`.yellow
  } to ./stylesheets/index.scss
  `,
);
