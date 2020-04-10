/**
 * Validate all required parameters are send to the action
 * @param {import('actions-toolkit').Toolkit} tools
 * @param {string[]} requiredParameters
 */
module.exports = (tools, requiredParameters) => {
  const emptyRequiredValues = requiredParameters.filter(requiredParameter => {
    tools.log.info(`requiredParameter: ${requiredParameter} - value input: ${tools.inputs[requiredParameter]}`);
    return !tools.inputs[requiredParameter];
  });

  if (emptyRequiredValues.length !== 0) {
    tools.exit.failure(`You forgot to provide some required values: [${emptyRequiredValues.join(', ')}]`);
  }
};
