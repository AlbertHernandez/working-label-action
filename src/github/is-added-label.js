/** async
 * Check if the label is added in the pull request
 * @param {import('actions-toolkit').Toolkit} tools
 * @param {string} labelName
 */
module.exports = async (tools, labelName) => {
  try {
    const labelsOnIssue = await tools.github.issues.listLabelsOnIssue({
      ...tools.context.repo,
      issue_number: tools.context.issue.number,
    });

    tools.log.info(`labelsOnIssue: ${JSON.stringify(labelsOnIssue)}`);

    const isAddedLabel = !!labelsOnIssue.find(labelOnIssue => {
      return labelOnIssue.name === labelName;
    });

    tools.log.info(
      `The label [${labelName}] ${
        isAddedLabel ? 'is' : 'is not'
      } added in the pull request`,
    );

    return isAddedLabel;
  } catch (error) {
    tools.log.info(
      `Error happens when we was checking if the label [${labelName}] was added to the repository: ${error}`,
    );
    return false;
  }
};
