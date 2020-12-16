const { create, index, update, destroy } = require('../controllers/quotes');
const passport = require('passport');

// const passport = require('passport'); needed to use passport
//, passport.authenticate('jwt', {session: false}) used to authenticate user for actions
module.exports = router => {

    //GET localhost:4000/quotes
    router.get('/quotes', index);

    //POST localhost:4000/quotes
    router.post('/quotes', passport.authenticate('jwt', {session: false}), create);

    //POST localhost:4000/quotes/update
    router.post('/quotes/update', passport.authenticate('jwt', {session: false}), update);

    //POST localhost:4000/quotes/destroy
    router.post('/quotes/destroy', passport.authenticate('jwt', {session: false}), destroy);
};