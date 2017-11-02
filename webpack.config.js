module.exports = {
  entry: [
    './index.jsx'
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
           loader:'eslint-loader' 
          }
        ]
        
      }
    ]
  },
  output: {
    filename: 'bundle.js' 
  },
  devServer: {
  	historyApiFallback: true,
    overlay: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}