const {process01, process02} = require('./processes');

async function main() {
    try {
        console.time('Total Running time');

        const data = await Promise.all([process01(), process02()]);

        console.log('Process01 Returned: ', data[0]);
        console.log('Process02 Returned: ', data[1]);

        console.log();

        console.timeEnd('Total Running time');
    } catch (error) {
        console.log('error ', error);
    }
}

main();