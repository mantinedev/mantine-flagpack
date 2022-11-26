import fs from 'fs-extra';
import chalk from 'chalk';
import { prepareDeclaration } from './prepare-declaration';
import { docgenParser } from './docgen-parser';

export function generateDeclarations(paths: string[]) {
  paths.forEach((componentPath) => {
    if (!fs.existsSync(componentPath)) {
      process.stdout.write(chalk.red`Path ${componentPath} does not exist \n`);
      process.exit(1);
    }
  });

  return docgenParser.parse(paths).reduce((acc, declaration) => {
    const componentName = declaration.displayName.replace(/@mantine\/([^\s]+)\//, '');
    acc[componentName] = prepareDeclaration(declaration);
    return acc;
  }, {});
}
