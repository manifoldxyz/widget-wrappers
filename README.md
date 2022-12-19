# Manifold Widget Wrappers

Frameworks-specific wrappers around our widgets.

## Architecture
Each framework has it's own package and completely controls its own build. The actual code for the different widgets is in different repos and is mostly written in Vue. However we actually only consume the widgets via a `<script>` tag as opposed to directly importing via npm. This repository bridges that gap and makes the different widgets consumable in different frameworks natively.


```sh
# folder structure
- packages
  - @manifoldxyz-react
  - @manifoldxyz-vue
```
