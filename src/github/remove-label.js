const isAddedLabel = require('./is-added-label');

/**
 * Removes the specified label from the issue, and returns the remaining labels on the issue
 * @param {import('actions-toolkit').Toolkit} tools
 * @param {string} labelName
 */
module.exports = async (tools, labelName) => {
  if (!(await isAddedLabel(tools, labelName))) {
    tools.log.info(`The label [${labelName}] was not in the issue, we don't need to remove it`);
    return;
  }
  try {
    tools.log.info(`Removing the label [${labelName}]`);
    await tools.github.issues.removeLabel({
      ...tools.context.repo,
      issue_number: tools.context.issue.number,
      name: labelName,
    });
  } catch (error) {
    tools.log.info(`Error happens when we was removing the label: ${error}`);
  }
};
