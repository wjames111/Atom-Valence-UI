#Want to Contribute to Atom Valence UI?

Think of something I left out that would be a great addition to Atom Valence UI theme?
Want to include a new setting you feel like should be available?

Fork this repo, make your changes, and submit a PR

```shell
git clone <your_forked_repo>
cd atom-valence-ui/
apm link -d && npm install
atom -d .
```


### CSS/.LESS

1. Indent with 2 spaces or set tab to 2 spaces.
2. Make sure closing bracket aligns with the begining of the opening selector.
3. Add empty line between each selector unless nested.
4. Use comments // as much as possible explaining what your code is styling.
5. Try to group styles in similar categories. use `/*--to-start-new-category--*/` add three empty lines between categories
6. Include categories in TOC at begining of file.


```scss
/*---category---*/
.selector {   // comments
  property: value;
  .nested {
    property: value;
  }
}

.selector2 {
  property: value;
}
/*---category-end--*/



/*---category-2--*/
....
```

Don't kill yourself over following these guidelines, just help keep things neat and readable.
Try not to overuse nested styles. I'm guilty of this throughout, I will need to refactor at some point.


### JavaScript

1. Make sure JS code is neat, readable and DRY.
2. Use appropriate indentation, provide at least one empty line between functions, objects and arrays.

JS code is well documented and should be pretty straightforward. To add a new setting include it in the package.json with the title, description, type and value.

```json
"newSetting": {
  "title": "Setting Name",
  "description": "Adds a new Setting.",
  "type": "boolean",
  "default": false
},
```

In classNames Obj add a new class name you would like to toggle followed by the selector name used in the JSON schema. Which would be newSetting in the above example.
