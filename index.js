const chalk = require('chalk');
 
console.log(chalk.blue('Happy ') + chalk.bgGreen.red('Birthday ') 
+  chalk.magenta('to ') +  chalk.bgCyan('You!'));

console.log(chalk.green('Happy ' + chalk.bgBlue.blue('Birthday ') 
+ 'to ' + chalk.bgYellow('You!' )));

console.log(chalk.yellow('Happy ') + chalk.bgRed.green('Birthday ') 
+ chalk.blue('dear ') + chalk.bgGreen('Adam'));

console.log(chalk.red('Happy ' + chalk.yellow.bold('Birthday ') 
+ 'to You!'));