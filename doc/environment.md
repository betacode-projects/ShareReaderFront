# サンプルソース
## dev.env.js
```javascript
'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
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