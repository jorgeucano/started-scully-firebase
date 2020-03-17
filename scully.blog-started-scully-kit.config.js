require('./firestorePlugin');

exports.config = {
  projectRoot: "./src",
  projectName: "blog-started-scully-kit",
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
    '/firepana/:id': {
      type: 'firestorePlugin',
      manualIdleCheck: true
    }
  }
};