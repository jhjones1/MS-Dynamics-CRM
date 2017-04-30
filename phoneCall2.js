//  * Get the value of a querystring
//              * @param  {String} field The field to get the value of
//              * @param  {String} url   The URL to get the value from (optional)
//              * @return {String}       The field value
function getPhone() {
    ('#call_button').on('click', function() {

        //get date objects to compare with hours of operation 8am to 5pm
        var date = new Date();
        var objDate = date.getDate();
        var hours = objDate.getHours();

        //comparison is made.  If business hours continue, otherwise prompted to try again later
        if (hours < 8 || hours > 17) {
            alert('Try you call again during regular business hours.');
        } else {
            var url = "www.algaecal.com/wp-json/acf/v2/options/";
            getQueryString = function(Default_Phone_Number, url) {
                var href = url ? url : window.location.href;
                var reg = new RegExp('[?&]${ {2}field {2}}=([^&#]*)', 'i');
                var string = reg.exec(href);
            };
            //var querystring = "www.algaecal.com/wp-json/acf/v2/options?Default_Phone_Number";
            var https = nodeRequire('https');
            var pn;
            var optionset = {
                host: '/www.algaecal.com',
                sessionId: null,
                port: 443,
                path: 'wp-json/acf/v2/options?Default_Phone_Number',
                method: 'GET'
            };

            // //Console notifications of progress
            // console.info('Options prepared:');
            // console.info(optionset);
            // console.info('Performing GET Call');

            // do the GET request
            var reqGet = https.request(optionset, function(res) {
                // console.log("statusCode: ", res.statusCode);

                // // header details displayed in console
                // console.log("headers: ", res.headers);

                //response is receives and written to console
                res.on('data', function(d) {
                    //console.info('GET result:\n');
                    process.stdout.write(d);
                    //console.info('\n\nCall completed');
                });

                //Close the http request and perform error handeling
                reqGet.end();
                reqGet.on('error', function(e) {
                    //console.error(e);
                });
            });
        }
    });
}