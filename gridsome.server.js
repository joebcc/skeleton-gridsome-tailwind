// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const fs = require('fs');
module.exports = function (api) {
  api.loadSource((actions) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    // console.log('starting');

    const collection = actions.addCollection({
      typeName: 'Photos'
    });

    let store = [];
    const folder = 'static/content/images/showcase/'
    
    fs.readdir(folder, (err, files) => {
      if (err) { console.log(err.message); return }
      else if (files) {
        // console.log('found ', store);
        files.forEach((post, pi) => {
          if (post === '.DS_Store') { return }
          collection.addNode({
            id: post,
          });
          // console.log(post, 'posting');
        });
      }
      // console.log('posted', collection);
    });
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    
  })
}
