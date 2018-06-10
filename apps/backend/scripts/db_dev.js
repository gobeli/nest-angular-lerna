const dotenv = require('dotenv').config();
const child_process = require('child_process');
const program = require('commander');
const package = require('../package.json');

const db = {
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  port: process.env.TYPEORM_PORT,
};

program
  .version(package.version, '-v, --version')
  .option(
    '-c, --container [name]',
    'If the container already exists pass the name or the hash',
  )
  .parse(process.argv);

let command = 'docker';
const container = program.container || process.env.MYSQL_CONTAINER;
if (container) {
  command += ` start ${container}`;
} else {
  command += ` run -p ${db.port}:3306`;
  command += ` -e MYSQL_ROOT_PASSWORD=${db.password}`;
  command += ` -e MYSQL_DATABASE=${db.database}`;
  command += ` -d mysql:5`;
}

console.log(`$ ${command}`);
child_process.execSync(command);
