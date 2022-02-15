module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cef7781a116a5997f5e34e2298952ca0'),
  },
});
