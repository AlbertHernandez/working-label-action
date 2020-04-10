const createLabel = require('./github/create-label')
const addLabel = require('./github/add-label')
const removeLabel = require('./github/remove-label')

module.exports = async tools => {
  const workInProgressLabel = tools.inputs.work_in_progress_label;
  const readyToReviewLabel = tools.inputs.ready_to_review_label;

  await Promise.all([createLabel(tools, readyToReviewLabel), createLabel(tools, workInProgressLabel)])

  await Promise.all([removeLabel(tools, readyToReviewLabel), addLabel(tools, workInProgressLabel)])
};
