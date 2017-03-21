import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

/* eslint-disable no-console */

process.env.NODE_ENV = 'production';
// important if you create a dev-specific configuration for Babel in your .babelrc file
// Babel and other libraries look for that env-variable to determine how they are built

console.log(chalk.blue('Generating minified bundle for production. This will take a moment...'));

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(chalk.red(err));
    return 1;
  }

  // Ensures that warnings, errors and stats are displayed to the console
  const jsonStats = stats.toJson();
  if(jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(chalk.red(error)));
  }
  if(jsonStats.hasWarnings()) {
    console.log(chalk.yellow('Webpack generated the following warnings: '));
    return jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
  }
  console.log(`Wwebpack stats: ${stats}`);
  // If we got this far, the build succeeded
  console.log(chalk.green('Your app has been built for production and written to /dist!'));

  return 0; // 0 signifies success
});
