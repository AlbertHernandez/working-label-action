const createLabelIfNotExists = require('./github/create-label-if-not-exists');
const addLabel = require('./github/add-label');
const removeLabel = require('./github/remove-label');

module.exports = async tools => {
  tools.log.info('Hello from dev');
  const workInProgressLabel = tools.inputs.work_in_progress_label;
  const readyToReviewLabel = tools.inputs.ready_to_review_label;

  await Promise.all([
    createLabelIfNotExists(tools, readyToReviewLabel),
    createLabelIfNotExists(tools, workInProgressLabel),
  ]);

  await Promise.all([
    removeLabel(tools, readyToReviewLabel),
    addLabel(tools, workInProgressLabel),
  ]);
};
