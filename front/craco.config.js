const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '#apis': path.resolve(__dirname, 'src/apis/'),
      '#commons': path.resolve(__dirname, 'src/commons/'),
      '#components': path.resolve(__dirname, 'src/components/'),
      '#contexts': path.resolve(__dirname, 'src/contexts/'),
      '#hooks': path.resolve(__dirname, 'src/hooks/'),
      '#pages': path.resolve(__dirname, 'src/pages/'),
      '#styles': path.resolve(__dirname, 'src/styles/'),
      '#stores': path.resolve(__dirname, 'src/stores/'),
      '#utils': path.resolve(__dirname, 'src/utils/'),
    },
  },
};
