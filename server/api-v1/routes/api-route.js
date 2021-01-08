/**
 * Copyright 2020 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an 'AS IS' BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

// import dependencies and initialize the express router
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const ApiController = require('../controllers/api-controller.js');
const appVersion = require('../../../package').version;
const router = express.Router();
const swaggerDoc = require('../config/swagger');

// update the app version in the swagger doc from package.json
swaggerDoc.info.version = appVersion;

// define routes
router.get('/messages', ApiController.getMessages);
router.post('/messages', ApiController.postMessages);
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

module.exports = router;
