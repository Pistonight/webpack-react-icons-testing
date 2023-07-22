# Issue
Webpack seems to load the full react-icons
bundle even if only 1 icon is used

This is an issue because react-icons
is an dependency of @fluentui/react-components

# Repro steps
1. Clone the repo
2. `npm i`
3. `npm run build`
4. Observe the output bundle size is around **9MB**

# Fix
1. Change the `module` field in `tsconfig.json` from `"commonjs"` to `"esnext"`
2. `npm run build`
3. The output bundle size should now be around 144KB
