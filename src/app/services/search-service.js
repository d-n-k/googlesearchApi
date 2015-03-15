/* @ngInject */
module.exports = function googleService($resource) {
    'use strict';

    return {
        res: function () {

            return $resource('https://www.googleapis.com/freebase/v1/search',
                {
                    // key: ''
                },
                {
                    'search': {
                        method: 'GET',
                        interceptor: {
                            'response': function (response) {
                                console.log(response);
                                // look at 'stat'
                                switch (response.statusText) {
                                    case 'fail':
                                        console.error('GoogleService error: %s', response.data.message);
                                        return {};
                                    case 'OK':
                                        console.log(response.data.result);
                                        return response.data.result;

                                }

                            }
                        }
                    }
                }
            );
        }
    };

};
