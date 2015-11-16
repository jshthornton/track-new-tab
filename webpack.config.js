module.exports = {
  module: {
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