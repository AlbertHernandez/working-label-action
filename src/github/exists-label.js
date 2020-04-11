/**
 * Check if the label already exists in the repository
 * @param {import('actions-toolkit').Toolkit} tools
 * @param {string} labelName
 */
module.exports = async (tools, labelName) => {
  try {
    const labelsForRepository = await tools.github.issues.listLabelsForRepo({
      ...tools.context.repo,
    });
    tools.log.info(`labelsForRepository: ${JSON.stringify(labelsForRepository)}`);

    const existLabel = !!labelsForRepository.find(label => {
      return label.name === labelName;
    });

    tools.log.info(
      `The label [${labelName}] ${
        existLabel ? 'already' : 'no'
      } exists in the repository`,
    );

    return existLabel;
  } catch (error) {
    tools.log.info(
      `Error happens when we was checking labels in the repository: ${error}`,
    );
    return false;
  }
};
