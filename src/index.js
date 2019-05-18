const mix = require("laravel-mix");

class LaravelMixPostCssConfigPlugin {
  /**
   * The optional name to be used when called by Mix.
   * Defaults to the class name, lowercased.
   *
   * @return {String|Array}
   */
  name() {
    return "postCssConfig";
  }

  /**
   * All dependencies that should be installed by Mix.
   *
   * @return {Array}
   */
  dependencies() {
    return ["postcss-loader"];
  }

  /**
   * Register the component.
   *
   * @param options
   * @return {void}
   */
  register(options = {}) {
    this.options = options;
  }

  /**
   * Rules to be merged with the master webpack loaders.
   *
   * @return {Array|Object}
   */
  webpackRules() {
    return {
      rules: [
        {
          test: /\.css/,
          use: [{ loader: "postcss-loader", options: this.options }]
        }
      ]
    };
  }
}

mix.extend("postCssConfig", new LaravelMixPostCssConfigPlugin());
