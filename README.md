<h1 align="center">🔰 # User Board </h1>
<p align="center"><i>This is a react app with implementation of various react hooks such as - useEffect() useState() useContext() & useReducer()</i></p>
<div align="center">
  <a href="https://github.com/KhanAnupamShafi/smart-grade-react"><img src="https://img.shields.io/github/stars/KhanAnupamShafi" alt="Stars Badge"/></a>
<img src="https://img.shields.io/badge/MIT-license-blue" alt="License Badge"/></a>
</div>
<br>

`React` + `VITE` + `TailwindCSS`

## :zap: Wireframe / Component Analysis

[product-mockups]: public/wireframe.png

[![Product Name Screen Shot][product-mockups]](public/wireframe.png)

### :electric_plug: Installation

To clone and run this application, you'll need

- [Git](https://git-scm.com) and
- [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com))
  installed on your computer. From your command line:

```bash
# Clone this repository using
$ git clone

# Go into the repository
$ cd

# Install dependencies
$ npm install

# Run the app
$ npm run dev
```

### 📁 File Structure

```
public
   |-- vite.svg
src
   |-- App.css
   |-- App.tsx
   |-- assets
   |-- components
   |   |-- Loader.tsx
   |   |-- header
   |   |   |-- Header.tsx
   |   |   |-- Search.tsx
   |   |   |-- Sort.tsx
   |   |-- layout
   |   |   |-- Layout.tsx
   |   |-- user
   |   |   |-- AddUserForm.tsx
   |   |   |-- Pagination.tsx
   |   |   |-- UserCard.tsx
   |   |   |-- UserList.tsx
   |-- contextAPI
   |   |-- formProvider.tsx
   |   |-- index.ts
   |   |-- usersProvider.tsx
   |-- hooks
   |   |-- index.ts
   |   |-- useApi.ts
   |   |-- useDebounce.ts
   |-- index.css
   |-- interface
   |   |-- index.ts
   |   |-- props.interface.ts
   |   |-- user.interface.ts
   |-- main.tsx
   |-- pages
   |   |-- Home.tsx
   |   |-- UserDetail.tsx
   |-- router
   |   |-- routes.tsx
   |-- states
   |   |-- action.interface.ts
   |   |-- formReducer.ts
   |   |-- index.ts
   |-- util
   |   |-- getHighestId.ts


```

## 💻 Snapshot

[product-screenshot]: public/homepage.png

[![Product Name Screen Shot][product-screenshot]](public/homepage.png)
