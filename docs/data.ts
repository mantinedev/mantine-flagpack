export interface PackageData {
  /** Package name as in npm, for example, `mantine-extension-template` */
  packageName: string;

  /** Description of the package, displayed below the title in documentation */
  packageDescription: string;

  /** Link to the documentation mdx file, used in "Edit this page button" */
  mdxFileUrl: string;

  /** Link to the repository on GitHub, used in header github icon and in "View source code button" */
  repositoryUrl: string;

  /** Link to the license file */
  licenseUrl?: string;

  /** Information about the author of the package */
  author: {
    /** Package author name, for example, `John Doe` */
    name: string;

    /** Author GitHub username, for example, `rtivital` */
    githubUsername: string;
  };
}

export const PACKAGE_DATA: PackageData = {
  packageName: 'mantine-extension-template',
  packageDescription:
    'A template for mantine extensions, includes full setup for package development and documentation',
  mdxFileUrl:
    'https://github.com/rtivital/mantine-extension-template/blob/master/docs/pages/index.mdx',
  repositoryUrl: 'https://github.com/rtivital/mantine-extension-template',
  licenseUrl: 'https://github.com/rtivital/mantine-extension-template/blob/master/LICENSE',
  author: {
    name: 'Vitaly Rtishchev',
    githubUsername: 'rtivital',
  },
};
