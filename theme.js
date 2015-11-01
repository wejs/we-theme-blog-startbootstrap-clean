/**
 * @module  Theme
 * @name    we-theme-blog-startbootstrap-clean
 */

module.exports = {
  // theme config
  configs: {
    emailTemplates: {
      path: 'templates/email',
    },
    javascript: 'files/public/js/main.js',
    stylesheet: 'files/public/css/main.css'
  },
  autoLoadAllTemplates: true,
  // will be auto loaded
  templates: {},
  // set layouts here
  layouts: {
    'default': {
      template: __dirname + '/templates/server/layouts/full-layout.hbs',
      regions: {
        highlighted: {
          name: 'Highlighted'
        },
        afterContent: {
          name: 'After content'
        },
        sidebar: {
          name: 'Side bar'
        }
      }
    },
    'article-layout': {
      template: __dirname + '/templates/server/layouts/article.hbs',
      regions: {
        highlighted: {
          name: 'Highlighted'
        },
        afterContent: {
          name: 'After content'
        }
      }
    }
  },
  widgets: {}
};
