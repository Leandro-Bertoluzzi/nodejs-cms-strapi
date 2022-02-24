module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e0be27741ea6330619b8e79a3dfd5d2c'),
  },
});
