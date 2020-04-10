/**
 * Check if the label already exists in the repository
 * @param {import('actions-toolkit').Toolkit} tools
 * @param {string} labelName
 */
module.exports = async (tools, labelName) => {
  try {
    const {
      data: labelsForRepository,
    } = await tools.github.issues.listLabelsForRepo({
      ...tools.context.repo,
    });

    return !!labelsForRepository.find(label => {
      return label.name === labelName;
    });
  } catch (error) {
    tools.log.info(
      `Error happens when we was checking labels in the repository: ${error}`,
    );
    return false;
  }
};
