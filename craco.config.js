const path = require('path')
module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@images': path.resolve(__dirname, 'src/assets/images/'),
      '@fonts': path.resolve(__dirname, 'src/assets/fonts/'),
      '@apis': path.resolve(__dirname, 'src/apis/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@providers': path.resolve(__dirname, 'src/providers/'),
    },
  },
}
