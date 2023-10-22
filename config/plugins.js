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
          user: 'info@bioinnova.com.ua',
          pass: env('USER_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: 'info@bioinnova.com.ua',
        defaultReplyTo: 'info@bioinnova.com.ua',
      },
    },
  },
});
