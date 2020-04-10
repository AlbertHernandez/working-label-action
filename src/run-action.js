const createLabel = require('./github/create-label')
const addLabel = require('./github/add-label')
const removeLabel = require('src/github/remove-label')

module.exports = async tools => {
  const workInProgressLabel = tools.inputs.work_in_progress_label
  const readyToReviewLabel = tools.inputs.ready_to_review_label

  await createLabel(tools, readyToReviewLabel);
  await createLabel(tools, workInProgressLabel);

  await removeLabel(tools, readyToReviewLabel);
  await addLabel(tools, workInProgressLabel);

  tools.log.success('Label successfully applied. Have a nice day!');
};
