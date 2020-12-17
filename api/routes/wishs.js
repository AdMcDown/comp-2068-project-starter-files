const { create, index, show, update, destroy } = require('../controllers/wishs');
const passport = require('passport');

// const passport = require('passport'); needed to use passport
//, passport.authenticate('jwt', {session: false}) used to authenticate user for actions
module.exports = router => {

    //GET localhost:4000/quotes
    router.get('/wishs', index);

    //GET Localhost:4000/quotes/id
    router.get('/wishs/:id', show);

    //POST localhost:4000/quotes
    router.post('/wishs', passport.authenticate('jwt', {session: false}), create);

    //POST localhost:4000/quotes/update
    router.post('/wishs/update', passport.authenticate('jwt', {session: false}), update);

    //POST localhost:4000/quotes/destroy
    router.post('/wishs/destroy', passport.authenticate('jwt', {session: false}), destroy);
};