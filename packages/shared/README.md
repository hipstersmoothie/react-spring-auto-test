# @autorelease/shared

This package contains modules which are **not imported** by the main module.

- `@autorelease/shared/colorMatchers`
  Regular expressions for color strings

- `@autorelease/shared/colors`
  The dictionary of named colors and their numeric values

- `@autorelease/shared/normalizeColor`
  Converts named colors, hexadecimal colors, `rgba` strings, and `hsla` strings
  into their numeric values

- `@autorelease/shared/stringInterpolation`
  Exports the `createStringInterpolator` function (with color support)

## Main module

Import `@autorelease/shared` to access these named imports:

- `Globals` object (updated with its `assign` method)
- `createInterpolator` function
- `is` functions (for runtime type checks)
- Utility hooks (like `useForceUpdate`)
- Every type in `src/types`
