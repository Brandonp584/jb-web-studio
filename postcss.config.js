module.exports = {
  plugins: [
    require('postcss-import'),          // optional: allows @import in CSS
    require('autoprefixer'),            // adds vendor prefixes
    require('cssnano')({ preset: 'default' }),  // minifies CSS
    require('@fullhuman/postcss-purgecss')({
      content: ['./index.html', './**/*.html', './js/**/*.js'],
      safelist: {
        standard: [/^card/, /^portfolio-item/, /^nav/, /^why-us/], // keep classes used dynamically
      },
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    })
  ]
}
