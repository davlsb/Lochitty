# Lochitty
A location based connection application, focused to reconnect people and ease our communities back to pre-pandemic norm.
This project has a hyperlocal setup, so esentially, with a click of a button, any logged in user can post a chat message or plan an event so that any other user within the same zip code can see them.

## Stack

*API*

- express.js
- sequelize.js

*React client*

- Built using `create-react-app` and configured to work with the api.
- Bootstrap 4.x added to `/client/public/index.html`
- React Router


## Credits

- Team members Thamesh Prittipaul and Dee Slawotsky.
- Penelope Seelochan for designing the logo.



## Project Structure

<pre>
.
├── README.md
├── <strong>api</strong>
│   ├── app.js
│   ├── <strong>config</strong>
│   │   └── config.json
│   ├── <strong>controllers</strong>
│   │   ├── appConfig.js
│   │   ├── auth.js
│   │   ├── index.js
│   │   └── posts.js
│   ├── <strong>middlewares</strong>
│   │   ├── authentication.js
│   └── <strong>models</strong>
│       ├── index.js
│       ├── post.js
│       └── user.js
├── <strong>client</strong>
│   ├── README.md
│   ├── package-lock.json
│   ├── package.json
│   ├── <strong>public</strong>
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   └── <strong>src</strong>
│       ├── App.css
│       ├── App.js
│       ├── App.test.js
│       ├── <strong>components</strong>
│       │   ├── AuthButton.js
│       │   ├── EventModal.js
│       │   ├── Loading.js
│       │   ├── Modal.js
│       │   ├── Post.js
│       │   ├── PostModal.js
│       │   ├── PrivateRoute.js
│       │   ├── eventFetcher.js
│       │   ├── extendedfab.js
│       │   ├── fab.js
│       │   ├── fancyButtons.css
│       │   ├── header.css
│       │   ├── header.js
│       │   ├── lochitty.png
│       │   ├── map.txt
│       │   ├── mockData.json
│       │   └── snackBar.js
│       ├── index.css
│       ├── index.js
│       ├── logo.svg
│       ├── <strong>pages</strong>
│       │   ├── AboutUsPage.js
│       │   ├── PostFormPage.js
│       │   ├── PostsListPage.js
│       │   └── ShowPostPage.js
│       └── serviceWorker.js
├── package-lock.json
└── package.json
</pre>

