// import Raven from 'raven-js';


function init() {

   // Raven.config("https://2cfd4ade6a79457992f126f24059ba1f@o1356066.ingest.sentry.io/6641056",).install();

}

function log(error) {
   // Raven.captureException(error);

   console.error(error);
}

export default {
    init,
    log
};