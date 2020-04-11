/**
 * Check if the label already exists in the repository
 * @param {import('actions-toolkit').Toolkit} tools
 * @param {string} labelName
 */
module.exports = async (tools, labelName) => {
  try {
    const labelsOnIssue = await tools.github.issues.listLabelsForRepo({
      ...tools.context.repo,
    });

    return !!labelsOnIssue.find(labelOnIssue => {
      return labelOnIssue.name === labelName;
    });
  } catch (error) {
    tools.log.info(`Error happens when we was checking labels in the repository: ${error}`);
    return false;
  }
};
