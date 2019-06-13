# boilerplate

## bundle

Boilerplate for React applications:

- create-react-app with typescript (https://reactjs.org/) (https://facebook.github.io/create-react-app/) (https://www.typescriptlang.org/)
- pre-commit hook for prettier
- material UI and CSS (https://material-ui.com/)
- storybook and addons (https://storybook.js.org/)
  - a11y
  - backgrounds
  - info
  - knobs
  - links
  - notes
  - storyshots
  - viewports
- testing-library/react (https://testing-library.com/docs/react-testing-library/intro)

## what would J. do?

Like all the hipsters he would drink some oat flat white and then:

```
git clone
cd boilerplate/boilerplate
npm i
```

He would drink some ️kombucha and then:

```
npm start // in one tab
npm t // in another tab
npm storybook // in a 3rd tab
```

And then he would code like no one is watching.

## Process

1. Write the unit tests and watch them fail: Red
2. Write the component and one by one pass the tests: Green
3. Clean a bit: Refactor
4. Write a story for the component.
   1. If possible create some screen that use a mix of relevant components.
   2. Make sure the snapshots are all passing.
5. Once a functional unit is done, add to the main App and commit to master.
6. Rince and Repeat.

## Folder structure

All the assets are in the `public/` folder.
All the magic happens in `src/` :

- The components should be created in `components/`, naming convention is _MyComp.tsx_
- The css is in the same folder, name _MyComp.css_ and you `import './MyComp.css'` in the MyComp.tsx component
- The test file is in the `__tests__` folder, naming convention is _MyComp.test.tsx_
- The story is created in `stories`, name is _MyComp.story.tsx_
