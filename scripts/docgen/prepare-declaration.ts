import { ComponentDoc } from 'react-docgen-typescript';

const replace = {
  MantineNumberSize: 'number | "xs" | "sm" | "md" | "lg" | "xl"',
  MantineSize: '"xs" | "sm" | "md" | "lg" | "xl"',
  GroupPosition: '"right" | "center" | "left" | "apart"',
  DefaultMantineColor: 'MantineColor',
  ReactText: 'string | number',
  'ReactElement<any, string | ((props: any) => ReactElement<any, any>) | (new (props: any) => Component<any, any, any>)>':
    'ReactElement',
  'string | number | boolean | {} | ReactElement<any, string | ((props: any) => ReactElement<any, any>) | (new (props: any) => Component<any, any, any>)> | ReactNodeArray | ReactPortal | ((value: number) => ReactNode)':
    'ReactNode | (value: number) => ReactNode',
};

export function prepareDeclaration(declaration: ComponentDoc) {
  const data: ComponentDoc = { ...declaration };
  delete data.tags;
  // @ts-ignore
  delete data.methods;
  // @ts-ignore
  delete data.filePath;

  Object.keys(data.props).forEach((prop) => {
    delete data.props[prop].parent;
    delete data.props[prop].declarations;
    // @ts-ignore
    delete data.description;

    if (data.props[prop].type.name in replace) {
      data.props[prop].type.name = replace[data.props[prop].type.name];
    }

    if (data.props[prop].type.name === 'enum') {
      data.props[prop].type.name = data.props[prop].type.value
        .map((val: { value: string }) => val.value)
        .join(' | ');
    }
  });

  // This sorts the props object in ascending order
  const ordered = Object.keys(data.props)
    .sort()
    .reduce((obj, key) => {
      // eslint-disable-next-line no-param-reassign
      obj[key] = data.props[key];
      return obj;
    }, {});

  data.props = ordered;

  return data;
}
