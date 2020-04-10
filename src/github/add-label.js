/**
 * @param {import('actions-toolkit').Toolkit} tools
 * @param {string} labelName
 */
module.exports = async (tools, labelName) => {
  tools.log.debug(`Adding the label [${labelName}] to this pull request`)
  return tools.github.issues.addLabels({
    ...tools.context.repo,
    issue_number: tools.context.issue.number,
    labels: [labelName]
  })
}
