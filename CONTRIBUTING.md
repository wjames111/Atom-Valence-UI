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
5. Try to group styles in similar categories. use /*--to-start-new-category--*/ add three empty lines between categories
6. Include categories in TOC at begining of file.

Don't kill yourself over following these guidelines, just help keep things neat and readable.
Try not to overuse nested styles. I'm guilty of this throughout, I will need to refactor at some point.

### JavaScript

Guidelines comming...
