# @outroll/api

## 12.0.5

### Patch Changes

- 853cc61: Bump auth0/node-jws to 3.2.3
- 853cc61: Bump node-forge to 1.3.2

## 12.0.4

### Patch Changes

- fae5aba: Bump nodemailer from 7.0.7 to 7.0.11

## 12.0.3

### Patch Changes

- Updated dependencies [a020496]
  - @outroll/app@9.34.0

## 12.0.2

### Patch Changes

- 7a257b0: Bump js-yaml to 4.1.1
- 7a257b0: Fix OpenID login failure caused by mismatched redirect URI

## 12.0.1

### Patch Changes

- 3e418cf: Add redirect on login or on redirect uri OpenID error
- Updated dependencies [3e418cf]
  - @outroll/app@9.33.8

## 12.0.0

### Major Changes

- a561d87: Migrate to Node.js 22 runtime

### Patch Changes

- Updated dependencies [a561d87]
  - @outroll/storage-driver-cloudinary@10.0.0
  - @outroll/storage-driver-azure@10.0.0
  - @outroll/storage-driver-local@10.0.0
  - @outroll/storage-driver-gcs@10.0.0
  - @outroll/storage-driver-s3@10.0.0
  - @outroll/extensions-sdk@10.0.0
  - @outroll/update-check@10.0.0
  - @outroll/exceptions@10.0.0
  - @outroll/constants@10.0.0
  - @outroll/storage@10.0.0
  - @outroll/schema@10.0.0
  - @outroll/utils@10.0.0
  - @outroll/app@9.33.7

## 11.1.6

### Patch Changes

- b1a0105: fix mailjet and ses compatibility

## 11.1.5

### Patch Changes

- bdcd952: Security update change, manual and dependabot updates
- Updated dependencies [bdcd952]
  - @outroll/app@9.33.6
  - @outroll/extensions-sdk@9.27.4
  - @outroll/storage-driver-azure@9.26.10
  - @outroll/storage-driver-cloudinary@9.27.3
  - @outroll/storage-driver-gcs@9.26.10
  - @outroll/storage-driver-local@9.26.10
  - @outroll/storage-driver-s3@9.26.12
  - @outroll/update-check@9.28.1
  - @outroll/utils@9.29.3

## 11.1.4

### Patch Changes

- 0cc629f: Bump dependencies
- Updated dependencies [0cc629f]
  - @outroll/app@9.33.5

## 11.1.3

### Patch Changes

- 49466be: Display directus version instead of api version
- Updated dependencies [49466be]
  - @outroll/app@9.33.4

## 11.1.2

### Patch Changes

- 3e74c9e: Add transversal session_id for activity audit
- Updated dependencies [3e74c9e]
  - @outroll/app@9.33.3
  - @outroll/exceptions@9.26.4
  - @outroll/extensions-sdk@9.27.3
  - @outroll/utils@9.29.2

## 11.1.1

### Patch Changes

- 0d32bf9: Fix Token Expired Exception

## 11.1.0

### Minor Changes

- da7e17f: Limit access token to GET assets in cookies

## 11.0.8

### Patch Changes

- 6085327: Bump form-data from 4.0.0 to 4.0.4

## 11.0.7

### Patch Changes

- d4be10c: Fix SSRF Loopback IP filter bypass

## 11.0.6

### Patch Changes

- Updated dependencies [f907b36]
  - @outroll/utils@9.29.2
  - @outroll/app@9.33.2
  - @outroll/extensions-sdk@9.27.2
  - @outroll/storage-driver-azure@9.26.9
  - @outroll/storage-driver-cloudinary@9.27.2
  - @outroll/storage-driver-gcs@9.26.9
  - @outroll/storage-driver-local@9.26.9
  - @outroll/storage-driver-s3@9.26.11

## 11.0.5

### Patch Changes

- 645ef51: Bump dependencies to fix security alerts
- Updated dependencies [645ef51]
  - @outroll/specs@9.26.5
  - @outroll/storage-driver-cloudinary@9.27.1

## 11.0.4

### Patch Changes

- 3786de8: fix url to be bypassed by catch

## 11.0.3

### Patch Changes

- c71b9d5: Bump samlify from 2.8.10 to 2.10.0

## 11.0.2

### Patch Changes

- 4b4b098: Fix: Run Script Operation Not Executing in Directus Flows

## 11.0.1

### Patch Changes

- da7afa2: Bump xml-crypto

## 11.0.0

### Major Changes

- 03314e1: Switched from 'vm2 'to 'isolated-vm' to sandbox the "Run Script" functionality in Flows

  ## Breaking change

  ### Removed Support for Custom NPM Modules in the "Run Script" Operation in Flows

  Previously, Directus used vm2 to execute code in Run Script operations within Flows. However, vm2 is now unmaintained
  and has critical security vulnerabilities that could allow sandbox escapes, potentially compromising the host machine.
  To ensure a secure execution environment, we have migrated to isolated-vm.

  If your script requires a third-party library, you will need to create a custom operation extension.

### Patch Changes

- Updated dependencies [03314e1]
  - @outroll/app@9.33.0

## 10.6.0

### Minor Changes

- 40644e2: npm security updates

### Patch Changes

- Updated dependencies [40644e2]
  - @outroll/update-check@9.28.0
  - @outroll/app@9.32.0
  - @outroll/extensions-sdk@9.27.1
  - @outroll/exceptions@9.26.4
  - @outroll/utils@9.29.1

## 10.5.0

### Minor Changes

- af89302: npm security updates

### Patch Changes

- Updated dependencies [af89302]
  - @outroll/storage-driver-cloudinary@9.27.0
  - @outroll/extensions-sdk@9.27.0
  - @outroll/update-check@9.27.0
  - @outroll/constants@9.28.0
  - @outroll/app@9.31.0
  - @outroll/utils@9.29.1
  - @outroll/storage-driver-azure@9.26.8
  - @outroll/storage-driver-gcs@9.26.8
  - @outroll/storage-driver-local@9.26.8
  - @outroll/storage-driver-s3@9.26.10

## 10.4.0

### Minor Changes

- 91ab5d6: fix security vulnerabilies and authentification issues

### Patch Changes

- Updated dependencies [91ab5d6]
  - @outroll/app@9.30.0
  - @outroll/constants@9.27.0
  - @outroll/utils@9.29.0
  - @outroll/extensions-sdk@9.26.7
  - @outroll/exceptions@9.26.4
  - @outroll/storage-driver-azure@9.26.7
  - @outroll/storage-driver-cloudinary@9.26.7
  - @outroll/storage-driver-gcs@9.26.7
  - @outroll/storage-driver-local@9.26.7
  - @outroll/storage-driver-s3@9.26.9

## 10.3.1

### Patch Changes

- b59e970: npm security updates
- Updated dependencies [b59e970]
  - @outroll/app@9.29.1
  - @outroll/constants@9.26.4
  - @outroll/exceptions@9.26.4
  - @outroll/extensions-sdk@9.26.6
  - @outroll/schema@9.26.4
  - @outroll/specs@9.26.4
  - @outroll/storage@9.26.4
  - @outroll/storage-driver-azure@9.26.6
  - @outroll/storage-driver-cloudinary@9.26.6
  - @outroll/storage-driver-gcs@9.26.6
  - @outroll/storage-driver-local@9.26.6
  - @outroll/storage-driver-s3@9.26.8
  - @outroll/update-check@9.26.4
  - @outroll/utils@9.28.1

## 10.3.0

### Minor Changes

- fcf6cf4: Empty realease to update d9 version

## 10.2.0

### Minor Changes

- bce4637: Make patitionned optional

## 10.1.0

### Minor Changes

- 4d186ff: This pull request introduces the "Partitioned" tag for the sessions cookie to prevent it from being treated
  as a third-party cookie by browsers. Additionally, it adds an environment variable REFRESH_TOKEN_COOKIE_PARTITIONED
  which can be set to false to deactivate this feature.

## 10.0.0

### Major Changes

- 65185c3: Refactored and fixed Oauth and OpendId flows

### Minor Changes

- 65185c3: Revoke tokens on sessions logout for OpenId SSO

## 9.29.0

### Minor Changes

- 41a3210: Revoke tokens on sessions logout for OpenId SSO

## 9.28.0

### Minor Changes

- 7255037: Fix openid connector for keycloack
- 6d7f40e: fix cache compression

### Patch Changes

- Updated dependencies [9d909a7]
  - @outroll/app@9.29.0

## 9.27.0

### Minor Changes

- 7c1b7c7: Fix M2M panel visualization for collections

### Patch Changes

- Updated dependencies [7c1b7c7]
  - @outroll/utils@9.28.0
  - @outroll/app@9.28.0
  - @outroll/extensions-sdk@9.26.5
  - @outroll/storage-driver-azure@9.26.5
  - @outroll/storage-driver-cloudinary@9.26.5
  - @outroll/storage-driver-gcs@9.26.5
  - @outroll/storage-driver-local@9.26.5
  - @outroll/storage-driver-s3@9.26.7

## 9.26.7

### Patch Changes

- Updated dependencies
  - @outroll/app@9.27.0

## 9.26.6

### Patch Changes

- 5998365: update aws-sdk
- Updated dependencies [5998365]
  - @outroll/storage-driver-s3@9.26.6

## 9.26.5

### Patch Changes

- b2b739e: update aws-sdk
- Updated dependencies [b2b739e]
  - @outroll/storage-driver-s3@9.26.5

## 9.26.4

### Patch Changes

- Updated dependencies [9740cc5]
  - @outroll/utils@9.27.0
  - @outroll/app@9.26.4
  - @outroll/extensions-sdk@9.26.4
  - @outroll/storage-driver-azure@9.26.4
  - @outroll/storage-driver-cloudinary@9.26.4
  - @outroll/storage-driver-gcs@9.26.4
  - @outroll/storage-driver-local@9.26.4
  - @outroll/storage-driver-s3@9.26.4

## 9.26.3

### Patch Changes

- f1b4684: change package organization
- Updated dependencies [f1b4684]
  - @outroll/storage-driver-cloudinary@9.26.3
  - @outroll/storage-driver-azure@9.26.3
  - @outroll/storage-driver-local@9.26.3
  - @outroll/storage-driver-gcs@9.26.3
  - @outroll/storage-driver-s3@9.26.3
  - @outroll/extensions-sdk@9.26.3
  - @outroll/update-check@9.26.3
  - @outroll/exceptions@9.26.3
  - @outroll/constants@9.26.3
  - @outroll/storage@9.26.3
  - @outroll/schema@9.26.3
  - @outroll/specs@9.26.3
  - @outroll/utils@9.26.3
  - @outroll/app@9.26.3

## 9.26.2

### Patch Changes

- 973f4bb: update packages
- Updated dependencies [973f4bb]
  - @outroll/app@9.26.2
  - @outroll/constants@9.26.2
  - @outroll/exceptions@9.26.2
  - @outroll/extensions-sdk@9.26.2
  - @outroll/schema@9.26.2
  - @outroll/specs@9.26.2
  - @outroll/storage@9.26.2
  - @outroll/storage-driver-azure@9.26.2
  - @outroll/storage-driver-cloudinary@9.26.2
  - @outroll/storage-driver-gcs@9.26.2
  - @outroll/storage-driver-local@9.26.2
  - @outroll/storage-driver-s3@9.26.2
  - @outroll/update-check@9.26.2
  - @outroll/utils@9.26.2

## 9.26.1

### Patch Changes

- 9e4a63a: @directus9
- Updated dependencies [9e4a63a]
  - @outroll/storage-driver-cloudinary@9.26.1
  - @outroll/storage-driver-azure@9.26.1
  - @outroll/storage-driver-local@9.26.1
  - @outroll/storage-driver-gcs@9.26.1
  - @outroll/storage-driver-s3@9.26.1
  - @outroll/extensions-sdk@9.26.1
  - @outroll/update-check@9.26.1
  - @outroll/exceptions@9.26.1
  - @outroll/constants@9.26.1
  - @outroll/storage@9.26.1
  - @outroll/schema@9.26.1
  - @outroll/specs@9.26.1
  - @outroll/utils@9.26.1
  - @outroll/app@9.26.1
