var jazz = require('jazz');

var usernames = {
    'github.com': 'cliffano'
};

var services = {
    'badge.fury.io/js': {
        badge: 'https://badge.fury.io/js/{project}.png?branch=master',
        page: 'http://badge.fury.io/js/{project}'
    },
    'coveralls.io': {
        badge: 'https://coveralls.io/repos/{username}/{project}/badge.png',
        page: 'https://coveralls.io/r/{username}/{project}?branch=master',
    },
    'david-dm.org': {
        badge: 'https://david-dm.org/{username}/{project}.png',
        page: 'http://david-dm.org/{username}/{project}'
    },
    'github.com': {
        page: 'http://github.com/{username}/{project}'
    },
    'nodei.co': {
        badge: 'https://nodei.co/npm/{project}.png',
        page: 'http://npmjs.org/package/{project}'
    },
    'travis-ci.org': {
        badge: 'https://secure.travis-ci.org/{username}/{project}.png?branch=master',
        page: 'http://travis-ci.org/{username}/{project}'
    }
};

function url(project, service, type, cb) {
    var params = { project: project, username: usernames['github.com'] };
    jazz.compile(services[service][type]).process(params, cb);
}

exports.params = {
    sitemap: {
        'index.html': { title: 'Status' }
    },
    projects: {
        ae86: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'badge.fury.io/js' ]
        },
        bagofcli: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'badge.fury.io/js' ]
        },
        bagofholding: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'badge.fury.io/js' ]
        },
        bagofrequest: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'badge.fury.io/js' ]
        },
        bagoftext: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'badge.fury.io/js' ]
        },
        blogmap4j: {
            scm: 'github.com',
            status: ['travis-ci.org' ]
        },
        bloojm: {
            scm: 'github.com',
            status: ['travis-ci.org' ]
        },
        bob: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'badge.fury.io/js' ]
        },
        breaker: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'badge.fury.io/js' ]
        },
        buildlight: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'badge.fury.io/js' ]
        },
        'cliffano.github.io-ae86': {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org' ]
        },
        cmdt: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'badge.fury.io/js' ]
        },
        couchpenter: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'badge.fury.io/js' ]
        },
        couchtato: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'badge.fury.io/js' ]
        },
        datagen: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'badge.fury.io/js' ]
        },
        eggtart: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'badge.fury.io/js' ]
        },
        'generator-bob': {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'badge.fury.io/js' ]
        },
        health: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'badge.fury.io/js' ]
        },
        'jazz-cli': {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'badge.fury.io/js' ]
        },
        nestor: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'badge.fury.io/js' ]
        },
        pkjutil: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'badge.fury.io/js' ]
        },
        repoman: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'badge.fury.io/js' ]
        },
        roombox: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'badge.fury.io/js' ]
        },
        sapi: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'badge.fury.io/js' ]
        },
        sendman: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'badge.fury.io/js' ]
        },
        tagyu4j: {
            scm: 'github.com',
            status: ['travis-ci.org' ]
        },
        ute: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'badge.fury.io/js' ]
        }
    },
    url: url
};
