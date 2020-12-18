const Wish = require('../models/wish');
const User = require('../models/user');

exports.create = async (req, res, next) => {
    try {
        const { creator, item, price, websiteLink, description } = req.body;

        const user = await User.findById(req.user._id);

        const wsh = await Wish.create({
            creator: user.name,
            item: item,
            price: price,
            websiteLink: websiteLink,
            description: description
        });

        res.status(200).json({message: "Your wish was created successfully.", item: wsh});

    } catch (error) {
        next(error);
    }
};

exports.show = async (req, res, next) => {
    try {
        const wish = await Wish.findById(req.params.id);

        res.status(200).json(wish);
    }
    catch (error) {
        next(error)
    }
};

exports.index = async (req, res, next) => {
    try {
        const wishs = await Wish.find(req.params.user);
        res.status(200).json(wishs);
    } catch(error) {
        next(error);
    }
};

exports.update = async (req, res, next) => {
    try {
        const { _id, item, price, websiteLink, description } = req.body;

        const wsh = await Wish.findOneAndUpdate({_id}, {
            item,
            price,
            websiteLink,
            description
        });

        res.status(200).json({message: 'Your wish was updated seccuessfully', item: wsh});
    } catch (error) {
        next(error);
    }
}

exports.destroy = async (req, res, next) => {
    console.log(req.body);
    try {
        const { _id } = req.body;
    await Wish.findOneAndDelete({ _id: _id });

        res.status(200).json({message: 'Your wish was deleted seccuessfully'});
    } catch (error) {
        next(error);
    }
}