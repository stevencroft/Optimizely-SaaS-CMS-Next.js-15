import { CodegenConfig } from '@graphql-codegen/cli'

const isSaas = process.env.USE_SAAS === 'true'

const config: CodegenConfig = {
  schema: `${process.env.OPTIMIZELY_API_URL}?auth=${process.env.OPTIMIZELY_SINGLE_KEY}`,
  documents: isSaas
    ? './lib/optimizely/saas/queries/**/*.graphql'
    : './lib/optimizely/paas/queries/**/*.graphql',
  generates: {
    './lib/optimizely/types/generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-generic-sdk',
      ],
      config: {
        rawRequest: true,
        avoidOptionals: true,
      },
    },
  },
}

export default config
