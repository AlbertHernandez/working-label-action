const createLabel = require('./github/create-label')
const addLabel = require('./github/add-label')

module.exports = async tools => {
  const label = 'Work in progress';

  await createLabel(tools, label);
  await addLabel(tools, label);

  tools.log.success('Label successfully applied. Have a nice day!');
};
