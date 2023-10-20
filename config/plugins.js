module.exports = ({}) => ({
  // ...

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
          user: 'kalinichenko.andriy.smr@gmail.com',
          pass: 'iiuf awfh ousb srox',
        },
      },
      settings: {
        defaultFrom: 'kalinichenko.andriy.smr@gmail.com',
        defaultReplyTo: 'kalinamono@gmail.com',
      },
    },
  },
});
