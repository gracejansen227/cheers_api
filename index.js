'use strict';

const Hapi = require('@hapi/hapi');
const barlist = require('./barlist');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path:'/cheers',
        handler: (request, h) => {
        
        const results = barlist.get();
        console.log('results', results);

        }
    }),

    await server.start();
    console.log('Server running on %s', server.info.uri);
};


process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();