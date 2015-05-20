var jazz = require('jazz');

var usernames = {
    'github.com': 'cliffano'
};

var services = {
    'npmjs.com': {
        badge: 'https://img.shields.io/npm/v/{project}.svg',
        page: 'http://www.npmjs.com/package/{project}'
    },
    'pypi.python.org': {
        badge: 'https://img.shields.io/pypi/v/{project}.svg',
        page: 'http://pypi.python.org/pypi/{project}'
    },
    'coveralls.io': {
        badge: 'https://img.shields.io/coveralls/{username}/{project}.svg',
        page: 'https://coveralls.io/r/{username}/{project}?branch=master',
    },
    'david-dm.org': {
        badge: 'https://img.shields.io/david/{username}/{project}.svg',
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
        badge: 'https://img.shields.io/travis/{username}/{project}.svg',
        page: 'http://travis-ci.org/{username}/{project}'
    }
};

function url(project, service, type, cb) {
    var params = { project: project, username: usernames['github.com'] };
    jazz.compile(services[service][type]).process(params, cb);
}

exports.params = {
    sitemap: {
        'index.html': { title: 'Project Status' },
        'developers_guide.html': { title: 'Developer\'s Guide' }
    },
    projects: {
        ae86: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'npmjs.com' ]
        },
        'ansible-role-droplet-docker': {
            scm: 'github.com',
            status: ['travis-ci.org' ]
        },
        bagofcli: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'npmjs.com' ]
        },
        bagofholding: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'npmjs.com' ]
        },
        bagofrequest: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'npmjs.com' ]
        },
        bagoftext: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'npmjs.com' ]
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
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'npmjs.com' ]
        },
        breaker: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'npmjs.com' ]
        },
        buildlight: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'npmjs.com' ]
        },
        'cliffano.github.io-ae86': {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org' ]
        },
        cmdt: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'npmjs.com' ]
        },
        couchpenter: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'npmjs.com' ]
        },
        couchtato: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'npmjs.com' ]
        },
        datagen: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'npmjs.com' ]
        },
        eggtart: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'npmjs.com' ]
        },
        feedpaper: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org' ]
        },
        'generator-bob': {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'npmjs.com' ]
        },
        health: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'npmjs.com' ]
        },
        'jazz-cli': {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'npmjs.com' ]
        },
        nestor: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'npmjs.com' ]
        },
        'nestor-buildlight': {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'npmjs.com' ]
        },
        'nestor-lifx': {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'npmjs.com' ]
        },
        'nestor-ninjablocks': {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'npmjs.com' ]
        },
        'packer-post-processor-json-updater': {
            scm: 'github.com',
            status: ['travis-ci.org']
        },
        pkjutil: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'npmjs.com' ]
        },
        repoman: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'npmjs.com' ]
        },
        roombox: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'npmjs.com' ]
        },
        sapi: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'npmjs.com' ]
        },
        sendman: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'npmjs.com' ]
        },
        tagyu4j: {
            scm: 'github.com',
            status: ['travis-ci.org' ]
        },
        ute: {
            scm: 'github.com',
            status: ['travis-ci.org', 'david-dm.org', 'coveralls.io', 'npmjs.com' ]
        },
        wordniksearch: {
            scm: 'github.com',
            status: ['travis-ci.org' ]
        },
        'wp-emptiness': {
            scm: 'github.com',
            status: ['travis-ci.org' ]
        }
    },
    url: url
};
