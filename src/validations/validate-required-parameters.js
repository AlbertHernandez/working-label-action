const getEmptyRequiredValues = (tools, requiredParameters) => {
  return tools.inputs.filter(input => {
    if(!requiredParameters.includes(input)) {
      return false;
    }

    return input === undefined;
  });
};

/**
 * Validate all required parameters are send to the action
 * @param {import('actions-toolkit').Toolkit} tools
 * @param {string[]} requiredParameters
 */
module.exports = (tools, requiredParameters) => {
  const emptyRequiredValues = getEmptyRequiredValues(tools, requiredParameters);
  if (emptyRequiredValues.length) {
    tools.exit.failure(`You forgot to provide some required values [${emptyRequiredValues.join(', ')}]`)
  }
}
