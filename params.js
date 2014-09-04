var jazz = require('jazz');

var services = {
    'badge.fury.io/js': {
        badge: 'https://badge.fury.io/js/{project}.png?branch=master',
        page: 'http://badge.fury.io/js/{project}'
    },
    'coveralls.io': {
        badge: 'https://coveralls.io/repos/cliffano/{project}/badge.png',
        page: 'https://coveralls.io/r/cliffano/{project}?branch=master',
    },
    'david-dm.org': {
        badge: 'https://david-dm.org/cliffano/{project}.png',
        page: 'http://david-dm.org/cliffano/{project}'
    },
    'github.com': {
        page: 'http://github.com/cliffano/{project}'
    },
    'travis-ci.org': {
        badge: 'https://secure.travis-ci.org/cliffano/{project}.png?branch=master',
        page: 'http://travis-ci.org/cliffano/{project}'
    }
};

function url(project, service, type, cb) {
    jazz.compile(services[service][type]).process({ project: project }, cb);
}

exports.params = {
    sitemap: {
        'index.html': { title: 'Home' },
        'status.html': { title: 'Status' }
    },
    projects: {
        couchtato: {
            scm: 'github.com',
            status: ['david-dm.org', 'coveralls.io', 'badge.fury.io/js' ]
        },
        nestor: {
            scm: 'github.com',
            status: ['david-dm.org', 'coveralls.io', 'badge.fury.io/js' ]
        }
    },
    url: url
};
