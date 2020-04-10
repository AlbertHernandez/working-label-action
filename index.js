require('dotenv').config();

const { Toolkit } = require('actions-toolkit');

const runAction = require('./src/run-action');

Toolkit.run(async tools => {
  await runAction(tools);
  tools.log.success('Label successfully applied!');
}, {
  event: [
    'pull_request.opened',
    'pull_request.edited',
    'pull_request.synchronize',
  ],
  secrets: [
    'GITHUB_TOKEN'
  ],
});
