const {configValidator, registerPlugin} = require('@scullyio/scully');
const firebase = require('firebase/app');
require('firebase/firestore');
const firebaseKey = {
  apiKey: "AIzaSyBsaAOe37sS_D_e0q-1Ib8Q4t8XoeUydo4",
  databaseURL: "https://villanuevand-labs.firebaseio.com",
  projectId: "villanuevand-labs",
  appId: "1:24781245035:web:a0d223c4cffc6c22397f2e"
};
const app = firebase.initializeApp(firebaseKey);
function firestorePlugin(route, config) {
  let users = [];
  return app.firestore().collection('user-scully-demo').get()
    .then( (querySnapshot) => {
      // querySnapshot.doc()
      querySnapshot.forEach(function(doc) {
        users.push({route:`/firepana/${doc.id}`});
      });
      return users;
    });
}
firestorePlugin[configValidator] = async config => [];
registerPlugin('router', 'firestorePlugin', firestorePlugin);

module.exports.firestorePlugin = firestorePlugin;