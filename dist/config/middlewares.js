"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = [
    'strapi::logger',
    'strapi::errors',
    'strapi::security',
    {
        name: 'strapi::security',
        config: {
            contentSecurityPolicy: {
                directives: {
                    'img-src': [
                        "'self'",
                        'data:',
                        'blob:',
                        'https:',
                    ],
                },
            },
        },
    },
    'strapi::cors',
    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
];
exports.default = config;
