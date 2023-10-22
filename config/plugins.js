module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        service: 'Gmail',
        host:  'smtp.gmail.com',
        ssl: false,
        tls: false,
        port: 465,
        auth: {
          user: env('USER_MAIL'),
          pass: env('USER_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: env('USER_MAIL'),
        defaultReplyTo: env('USER_MAIL'),
      },
    },
  },
});
