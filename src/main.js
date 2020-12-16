const { mindPlatformKoa, KOA_CORS_CONFIG } = require('@mindjs/platform-koa');

// TODO: investigate it
const AppModule = require('./app/app.module');

mindPlatformKoa({
  platformExtraProviders: [
    {
      provide: KOA_CORS_CONFIG,
      useValue: {
        allowMethods: 'GET,POST,PUT',
        origin: '*',
      },
    },
  ],
}).bootstrapModule(AppModule);
