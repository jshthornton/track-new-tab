module.exports = {
  module: {
    noParse: [
      /node_modules\/sinon/,
    ],

    resolve: {
      alias: {
        sinon: 'sinon/pkg/sinon.js'
      }
    },

    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        //include: [
          //path.resolve(__dirname, 'lib')
        //]
      }
    ]
  }
};