require('dotenv').config();

const { Toolkit } = require('actions-toolkit');

const runAction = require('./src/run-action');
const validateRequiredParameters = require('./src/validations/validate-required-parameters');

Toolkit.run(async tools => {

  tools.log.info('Validating required parameters...');
  const emptyRequiredValues = validateRequiredParameters(tools, ['work_in_progress_label', 'ready_to_review_label']);

  tools.exit.failure(`please, fail`)

  if (emptyRequiredValues.length) {
    tools.exit.failure(`You forgot to provide some required values [${emptyRequiredValues.join(', ')}]`)
  }


  tools.log.info('Running the action...');
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
