/**
 * Validate all required parameters are send to the action
 * @param {import('actions-toolkit').Toolkit} tools
 * @param {string[]} requiredParameters
 */
module.exports = (tools, requiredParameters) => {
  const emptyRequiredValues = requiredParameters.filter(requiredParameter => {
    return tools.inputs[requiredParameter] === undefined;
  });

  tools.log.info('emptyRequiredValues: ', emptyRequiredValues);

  if (emptyRequiredValues.length) {
    tools.exit.failure(`You forgot to provide some required values [${emptyRequiredValues.join(', ')}]`)
  }
};
