/**
 * Add labels to an issue
 * @param {import('actions-toolkit').Toolkit} tools
 * @param {string} labelName
 */
module.exports = async (tools, labelName) => {
  tools.log.info(`Adding the label [${labelName}] to this pull request`);
  return tools.github.issues.addLabels({
    ...tools.context.repo,
    issue_number: tools.context.issue.number,
    labels: [labelName],
  });
};
