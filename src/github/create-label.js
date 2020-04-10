/**
 * @param {import('actions-toolkit').Toolkit} tools
 * @param {string} labelName
 * @param {object} options
 * @param {string} options.color
 */
module.exports = async (tools, labelName, options = {}) => {
  try {
    await tools.github.issues.createLabel({
      ...tools.context.repo,
      name: labelName,
      color: options.color || 'fedbf0',
      request: { retries: 0 }
    });

    tools.log.debug(`Making label [${labelName}]`)
  } catch {}
}
