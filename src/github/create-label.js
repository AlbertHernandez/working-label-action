/**
 * Create a label
 * @param {import('actions-toolkit').Toolkit} tools
 * @param {string} labelName
 * @param {object} options
 * @param {string} options.color
 */
module.exports = async (tools, labelName, options = {}) => {
  try {
    tools.log.info(`Making label [${labelName}]`);
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
