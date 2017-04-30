//makie a phome call on click event  --- phoneCall.js

require('https');

function getPhone() {
    ('#call_button').on('click', function() {


        var objDate = new Date.getDate();
        var hours = objDate.getHours();

        //compariso is made.  If business hours continue, otherwise prompted to try abain later
        if (hours < 8 || hours > 17) {
            alert('Try you call again during regular business hours., any');
        } else {

            var querystring = "www.algaecal.com/wp-json/acf/v2/options?Default_Phone_Number";

            var pn;
            var optionset = {
                host: '/www.algaecal.com',
                sessionId: null,
                port: 443,
                path: '/wp-json/acf/v2/options?Default_Phone_Number',
                method: 'GET'
            };

            //Console notifications of progress
            console.info('Options prepared:');
            console.info(optionset);
            console.info('Performing GET Call');

            // do the GET request
            var reqGet = https.request(optionset, function(res) {
                console.log("statusCode: ", res.statusCode);

                // header details displayed in console
                console.log("headers: ", res.headers);

                //response is receives and written to console
                res.on('data', function(d) {
                    console.info('GET result:\n');
                    process.stdout.write(d);
                    console.info('\n\nCall completed');
                });

                //Close the http request and perform error handeling
                reqGet.end();
                reqGet.on('error', function(e) {
                    console.error(e);
                });
            });
        }
    });
}
//******************************************************************************** */
//AJAX Request-not used
// var btn = (this).button('loading');
// var defaultPhoneNumber
//     //ajax call to get default phone number
// $.ajax({
//     url: 'https://www.algaecal.com/wp-json/acf/v2/options?default_phone_number',
//     datatype: 'json',
//     type: 'GET',
//     data: {
//         'default_phone_number': defaultPhoneNumber

//Simple Rest call
// var request = require('request');
// request(' https://www.algaecal.com/wp-json/acf/v2/options?default_phone_number, function(error, response, body) {
//     if (!error && response.statusCode == 200), {
//         console.log(body) // Print the google web page
//     }
// }
//
//** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** *
//**