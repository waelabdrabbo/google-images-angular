// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  GCS_API_KEY: 'YOUR_API_KEY_HERE',
  GCS_API_URL: 'https://www.googleapis.com/customsearch/v1?key=',
  GCS_ID: 'YOUR_GCS_ID_HERE'
};
