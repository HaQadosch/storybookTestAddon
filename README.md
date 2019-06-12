# boilerplate

## bundle

Boilerplate for React applications:

- create-react-app
- material UI and CSS
- storybook and addons
  - links
  - a11y
  - notes
  - knobs
  - storyshots
  - viewports
  - backgrounds
- testing-library/react

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

## Folder structure

All the assets are in the `public/` folder.
All the magic happens in `src/` :

- The components should be created in `components/`, naming convention is _MyComp.tsx_
- The css is in the same folder, name _MyComp.css_ and you `import './MyComp.css'` in the MyComp.tsx component
- The test file is in the `__tests__` folder, naming convention is _MyComp.test.tsx_
- The story is created in `stories`, name is _MyComp.story.tsx_
