const createLabel = require('./github/create-label')
const addLabel = require('./github/add-label')

module.exports = async tools => {
  const workInProgressLabel = tools.inputs.work_in_progress_label

  await createLabel(tools, workInProgressLabel);
  await addLabel(tools, workInProgressLabel);

  tools.log.success('Label successfully applied. Have a nice day!');
};
