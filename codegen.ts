/**
 * @see https://www.apollographql.com/docs/react/development-testing/static-typing
 */

import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000/",
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    'src/__generated__/': {
      preset: "client",
      plugins: [],
      // https://the-guild.dev/graphql/codegen/plugins/presets/preset-client
      presetConfig: {
        gqlTagName: 'gql',
      },
      config: {
        // https://the-guild.dev/graphql/codegen/plugins/typescript/typescript#avoidoptionals
        avoidOptionals: true,

        // https://the-guild.dev/graphql/codegen/plugins/typescript/typescript#allow-undefined
        maybeValue: 'T | undefined', // overrides default type of `T | null`

        // https://the-guild.dev/graphql/codegen/plugins/typescript/typescript#strictscalars
        strictScalars: true,
      },
    }
  },
  ignoreNoDocuments: true,
};

export default config;
