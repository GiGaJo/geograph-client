"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initApollo;

var _reactApollo = require("react-apollo");

var _isomorphicFetch = require("isomorphic-fetch");

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = _isomorphicFetch2.default;
}

function create(initialState) {
  return new _reactApollo.ApolloClient({
    initialState: initialState,
    networkInterface: (0, _reactApollo.createNetworkInterface)({
      uri: '"https://geograph-api.now.sh/"' // Server URL (must be absolute)
    })
  });
}

function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9pbml0QXBvbGxvLmpzIl0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCIsImNyZWF0ZU5ldHdvcmtJbnRlcmZhY2UiLCJmZXRjaCIsImFwb2xsb0NsaWVudCIsInByb2Nlc3MiLCJicm93c2VyIiwiZ2xvYmFsIiwiY3JlYXRlIiwiaW5pdGlhbFN0YXRlIiwibmV0d29ya0ludGVyZmFjZSIsInVyaSIsImluaXRBcG9sbG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxBQUFTLEFBQWM7O0FBQ3ZCLEFBQU87Ozs7OztBQUVQLElBQUksZUFBSixBQUFtQjs7QUFFbkI7QUFDQSxJQUFJLENBQUMsUUFBTCxBQUFhLFNBQVMsQUFDcEI7U0FBQSxBQUFPLEFBQVEsQUFDaEI7OztBQUVELFNBQUEsQUFBUyxPQUFULEFBQWdCLGNBQWMsQUFDNUI7O2tCQUF3QixBQUV0Qjs7V0FBeUMsQUFDbEMsaUNBSFQsQUFBTyxBQUFpQixBQUVKLEFBQXVCLEFBQ0QsQUFHM0M7QUFKNEMsQUFDdkMsS0FEZ0I7QUFGSSxBQUN0QixHQURLLEFBQUk7QUFRYjs7QUFBZSxTQUFBLEFBQVMsV0FBVCxBQUFvQixjQUFjLEFBQy9DO0FBQ0E7QUFDQTtNQUFJLENBQUMsUUFBTCxBQUFhLFNBQVMsQUFDcEI7V0FBTyxPQUFQLEFBQU8sQUFBTyxBQUNmO0FBRUQ7O0FBQ0E7TUFBSSxDQUFKLEFBQUssY0FBYyxBQUNqQjttQkFBZSxPQUFmLEFBQWUsQUFBTyxBQUN2QjtBQUVEOztTQUFBLEFBQU8sQUFDUiIsImZpbGUiOiJpbml0QXBvbGxvLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qb2NhL1dlYi9nZW9ncmFwaC9nZW9ncmFwaC1jbGllbnQifQ==