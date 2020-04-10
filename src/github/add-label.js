const isAddedLabel = require('./is-added-label');

/**
 * Add labels to an issue
 * @param {import('actions-toolkit').Toolkit} tools
 * @param {string} labelName
 */
module.exports = async (tools, labelName) => {
  if (await isAddedLabel(tools, labelName)) {
    tools.log.info(`The label [${labelName}] was added in the issue, we don't need to add it`);
    return;
  }

  try {
    tools.log.info(`Adding the label [${labelName}]`);
    await tools.github.issues.addLabels({
      ...tools.context.repo,
      issue_number: tools.context.issue.number,
      labels: [labelName],
    });
  } catch (error) {
    tools.log.info(`Error happens when we was adding the label: ${error}`);
  }
};
