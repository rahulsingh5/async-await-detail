const {process01, process02} = require('./processes');

async function main() {
    try {
        console.time('Total Running time');

        /**
         * If try-catch block is not used in any of the following await method - the error will be bubbled to catch method of calling function -
         *
         * The issue with above implementation is - if any function fails - it will stop execution of next function
         *
         * To fix this issue we should wrap each async function in try-catch block
         */

        const value01 = await process01();
        const value02 = await process02();

        console.log('Process01 Returned: ', value01);
        console.log('Process02 Returned: ', value02);

        console.log();

        console.timeEnd('Total Running time');
    } catch (error) {
        console.log('error ', error);
    }
}

main();