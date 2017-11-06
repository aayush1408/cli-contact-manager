const program = require('commander');
const { addContact, getContact} = require('./logic.js');

program
        .version('0.0.1')
        .description('Contact management system');

program
        .command('addContact <firstname> <lastname> <phone> <email>')
        .alias('a')
        .description('Add a friend')
        .action((firstname,lastname,phone,email)=>{
            addContact({firstname,lastname,phone,email});
        });        
program
        .command('getContact <name>')
        .alias('r')
        .description('Get a contact')
        .action(name => getContact(name));

program.parse(process.argv);                
