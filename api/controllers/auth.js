const router = require('express').Router();
const { User } = require('../models');
const passport = require('../middlewares/authentication');


router.post('/signup', (req, res) => {
  console.log("POST body: ", req.body);
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    city: req.body.city,
  })
    .then((user) => {
      user.password = undefined;
      req.login(user, () => res.status(201).json(user));
    })
    .catch((err) => {
      res.status(400).json({ msg: 'Failed Signup', err });
    });
});

router.put('users/:id', function(req, res) {
  User.findById(req.params.id, function(err, user) {
      if (err) res.send(err);
      if (req.body.fullName) user.fullName = req.body.fullName;
      if (req.body.lastName) user.lastName = req.body.lastName;
      if (req.body.city) user.city = req.body.city;

      user.save(function(err) {
          if (err) return res.send(err);
          return res.send('User updated');
      });

  });
});

router.post('/login',
  passport.authenticate('local'),
  (req, res) => {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.json(req.user);
  });

router.get('/login', (req, res) => {
  if(req.user) {
    res.json(req.user)
  } else {
    res.sendStatus(401);
  }
})

router.post('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ message: 'Logout successful!' });
})

module.exports = router;