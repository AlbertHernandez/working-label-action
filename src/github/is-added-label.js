/**
 * Check if the label is added in the pull request
 * @param {import('actions-toolkit').Toolkit} tools
 * @param {string} labelName
 */
module.exports = async (tools, labelName) => {
  try {
    const { data: labelsOnIssue } = await tools.github.issues.listLabelsOnIssue(
      {
        ...tools.context.repo,
        issue_number: tools.context.issue.number,
      },
    );

    return !!labelsOnIssue.find(labelOnIssue => {
      return labelOnIssue.name === labelName;
    });
  } catch (error) {
    tools.log.info(
      `Error happens when we was checking if the label [${labelName}] was added to the repository: ${error}`,
    );
    return false;
  }
};
