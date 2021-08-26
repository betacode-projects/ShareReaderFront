# サンプルソース
## dev.env.js
```javascript
'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  SOCKET_URL: '"ws://localhost:4000"',
  API_URL: '"http://localhost:3000/v1/api'
})
```

## prod.env.js
```javascript
'use strict'
module.exports = {
  NODE_ENV: '"production"'
}
```

## test.env.js
```javascript
'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"'
})
```