/** User related routes. */

const User = require('../models/user');
const express = require('express');
const router = express.Router();
const ExpressError = require('../helpers/expressError');
const { authUser, requireLogin, requireAdmin } = require('../middleware/auth');

router.get('/', authUser, requireLogin, async function(req, res, next) {
  try {
    let users = await User.getAll();
    return res.json({ users });
  } catch (err) {
    return next(err);
  }
});

router.get('/:username', authUser, requireLogin, async function(
  req,
  res,
  next
) {
  try {
    let user = await User.get(req.params.username);
    if (!user) {
      throw new ExpressError('User not found', 404);
    }
    return res.json({ user });
  } catch (err) {
    return next(err);
  }
});

router.patch('/:username', authUser, requireLogin, async function(
  req,
  res,
  next
) {
  try {
    const isAdmin = req.curr_admin;
    const isUser = req.curr_username === req.params.username;

    if (!isAdmin && !isUser) {
      throw new ExpressError('Only the user themselves or an admin can update user details', 401);
    }

    let fields = { ...req.body };
    delete fields._token;

    let user = await User.update(req.params.username, fields);
    return res.json({ user });
  } catch (err) {
    return next(err);
  }
});

router.delete('/:username', authUser, requireAdmin, async function(
  req,
  res,
  next
) {
  try {
    const result = await User.delete(req.params.username);
    if (result === 0) {
      throw new ExpressError('User not found', 404);
    }
    return res.json({ message: 'deleted' });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
