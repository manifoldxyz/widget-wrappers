# Manifold Widget Wrappers

Frameworks-specific wrappers around our widgets.

## Architecture
Each framework has it's own package and completely controls its own build. The actual code for the different widgets is in different repos and is mostly written in Vue. However we actually only consume the widgets via a `<script>` tag as opposed to directly importing via npm. This repository bridges that gap and makes the different widgets consumable in different frameworks natively.


```sh
# folder structure
- packages
  - @manifoldxyz-react
  - @manifoldxyz-vue
- shared
  utils.ts
```

The `shared` directory is symlinked to the `src` folder of each package.

## Modify a package
Change something in the package, then change the version number in package.json. Make a Pull Request and once merged in the new version in package.json will be published.
