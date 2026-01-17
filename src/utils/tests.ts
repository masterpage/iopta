import { camelCase, compact } from 'lodash';

export const setTestId = (
  componentName: string,
  ...instanceNames: (string | undefined)[]
) => {
  const testId = compact([
    componentName,
    ...instanceNames.map((name) => name !== 'PROD' && camelCase(name)),
  ]).join('-');

  return testId;
};
