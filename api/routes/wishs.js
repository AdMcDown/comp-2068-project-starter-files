const { create, index, show, update, destroy } = require('../controllers/wishs');
const passport = require('passport');

// const passport = require('passport'); needed to use passport
//, passport.authenticate('jwt', {session: false}) used to authenticate user for actions
module.exports = router => {

    //GET localhost:4000/wishs
    router.get('/wishs', index);

    //GET Localhost:4000/wishs/id
    router.get('/wishs/:id', show);

    //POST localhost:4000/wishs
    router.post('/wishs', passport.authenticate('jwt', {session: false}), create);

    //POST localhost:4000/wishs/update
    router.post('/wishs/update', passport.authenticate('jwt', {session: false}), update);

    //POST localhost:4000/wishs/destroy
    router.post('/wishs/destroy', passport.authenticate('jwt', {session: false}), destroy);
};