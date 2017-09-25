const util = require('util');
const wait = util.promisify(setTimeout);

module.exports = {
    async process01() {
        console.log('Process01 started');
        console.time('Process01 ended');

        await wait(5000);

        console.timeEnd('Process01 ended');

        console.log();

        return 'process01-value';
    },


    async process02() {
        console.log('Process02 started');
        console.time('Process02 ended');

        await wait(3000);

        console.timeEnd('Process02 ended');

        console.log();

        return 'process02-value';
    }
};