const createLabelIfNotExists = require('./github/create-label-if-not-exists');
const addLabel = require('./github/add-label');
const removeLabel = require('./github/remove-label');
const isAddedLabel = require('./github/is-added-label');

module.exports = async tools => {
  const workInProgressLabel = tools.inputs.work_in_progress_label;
  const readyToReviewLabel = tools.inputs.ready_to_review_label;

  await Promise.all([
    createLabelIfNotExists(tools, readyToReviewLabel),
    createLabelIfNotExists(tools, workInProgressLabel),
  ]);

  await Promise.all([
    async () => {
      if (await isAddedLabel(tools, readyToReviewLabel)) {
        await removeLabel(tools, readyToReviewLabel);
      }
    },
    async () => {
      if (!(await isAddedLabel(tools, workInProgressLabel))) {
        await addLabel(tools, workInProgressLabel);
      }
    },
  ]);
};
