const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const ImageminPlugin = require('imagemin-webpack-plugin').default;


module.exports = {
  entry: {
    index: "./src/js/index.js",   //エントリポイント
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  watchOptions: {
    ignored: "/node_modules/"
  },
  devtool: "source-map", // mapファイルを作成可能
  devServer: {
    static: path.resolve(__dirname, 'dist'), // `dist` を配信
    hot: true, // HMR（ホットモジュールリプレースメント）を有効化
    open: true, // ブラウザで自動的に開く
    port: 8080, // ポート番号（任意）
    watchFiles: ['src/**/*'], // `src` フォルダ内の変更を監視
  },
  module: {
    rules: [
      // sassファイルの読み込みとコンパイル
      {
        test: /\.scss$/, // 対象となるファイルの拡張子
        use: [
          // linkタグに出力する機能
          "style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          {
            // CSSをバンドルするための機能
            loader: "css-loader",
            options: {
              // オプションでCSS内のurl()メソッドの取り込みを禁止する
              url: false,
              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              importLoaders: 2,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  // Autoprefixerを有効化
                  ["autoprefixer", { grid: true }],
                ],
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      // jsファイルのコンパイル
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/style.css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
		new CopyPlugin({
			patterns: [
				{
					from: `${path.resolve(__dirname, 'src')}/images`,
					to: `${path.resolve(__dirname, 'dist')}/images`
				}
			],
		}),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      pngquant: {
        quality: "65-80",
      },
      gifsicle: {
        interlaced: false,
        optimizationLevel: 1,
        colors: 256
      },
      svgo: {
      },
    }),
  ],
  // ES5(IE11等)向けの指定（webpack 5以上で必要）
  target: ["web", "es5"],
};
