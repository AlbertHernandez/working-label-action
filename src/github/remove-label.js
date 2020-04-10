/**
 * Removes the specified label from the issue, and returns the remaining labels on the issue
 * @param {import('actions-toolkit').Toolkit} tools
 * @param {string} labelName
 */
module.exports = async (tools, labelName) => {
  tools.log.debug(`Removing the label [${labelName}]`)
  return tools.github.issues.removeLabel({
    ...tools.context.repo,
    issue_number: tools.context.issue.number,
    name: labelName
  })
}
