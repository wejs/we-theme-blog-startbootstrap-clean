/**
 * @module  Theme
 * @name    we-theme-blog-startbootstrap-clean
 */

module.exports = {
  imageThumbnail: '',
  imageLarge: '',
  description: 'Simple blog template',

  // theme config
  configs: {
    emailTemplates: {
      path: 'templates/email',
    },
    javascript: 'files/public/script.js',
    stylesheet: 'files/public/style.css',
    colors: {
      default: {
        label: 'Cor padrão do tema',
        stylesheet: 'files/public/style.css',
        colors: [
          { value: '#2D7240' },
          { value: '#000' },
          { value: '#fff' }
        ]
      },
    }
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
        beforeContent: {
          name: 'Before content'
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
        beforeContent: {
          name: 'Before content'
        },
        afterContent: {
          name: 'After content'
        }
      }
    },
    'user-layout': {
      template: __dirname + '/templates/server/layouts/user.hbs',
      regions: {
        highlighted: {
          name: 'Highlighted'
        },
        beforeContent: {
          name: 'Before content'
        },
        afterContent: {
          name: 'After content'
        },
        sidebar: {
          name: 'Sidebar'
        }
      }
    },
    'portfolio-layout': {
      template: __dirname + '/templates/server/layouts/portfolio.hbs',
      regions: {
        highlighted: {
          name: 'Highlighted'
        },
        beforeContent: {
          name: 'Before content'
        },
        afterContent: {
          name: 'After content'
        }
      }
    },
    'fullwidth': {
      template: __dirname + '/templates/server/layouts/fullwidth.hbs',
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
