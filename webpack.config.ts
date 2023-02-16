import * as path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  entry: './src/game/main.ts',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'main'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'development',
  devServer: {
    open: true,
    watchFiles: ['src/**/*'],
  }
};
