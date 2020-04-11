const existsLabel = require('./exists-label');

/**
 * Create a label
 * @param {import('actions-toolkit').Toolkit} tools
 * @param {string} labelName
 * @param {object} options
 * @param {string} options.color
 */
module.exports = async (tools, labelName, options = {}) => {
  const existsLabelToCreate = await existsLabel(tools, labelName);
  if (existsLabelToCreate) {
    tools.log.info(
      `The label [${labelName}] already exists, we don't need to create it`,
    );
    return;
  }
  try {
    tools.log.info(`Creating the label [${labelName}]`);
    await tools.github.issues.createLabel({
      ...tools.context.repo,
      name: labelName,
      color: options.color || 'fedbf0',
      request: { retries: 0 },
    });
  } catch (error) {
    tools.log.info(`Error happens when we was creating the label: ${error}`);
  }
};
