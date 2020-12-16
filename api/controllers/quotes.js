const Quote = require('../models/quote');
const User = require('../models/user');

exports.create = async (req, res, next) => {
    try {
        const { quote, date } = req.body;

        const user = await User.findById(req.user._id);

        const qt = await Quote.create({
            author: user.name,
            quote: quote,
            date: new Date(date)
        });

        res.status(200).json({message: "Quote was created successfully.", quote: qt});

    } catch (error) {
        next(error);
    }
};

exports.index = async (req, res, next) => {
    try {
        const quotes = await Quote.find();
        res.status(200).json(quotes);
    } catch(error) {
        next(error);
    }
};

exports.update = async (req, res, next) => {
    try {
        const { _id, quote, date } = req.body;

        const qt = await Quote.findOneAndUpdate({_id}, {
            quote,
            date: new Date(date)
        });

        res.status(200).json({message: 'Quote was updated seccuessfully', quote: qt});
    } catch (error) {
        next(error);
    }
}

exports.destroy = async (req, res, next) => {
    try {
        const { _id } = req.body;

        await Quote.findOneAndDelete({_id});

        res.status(200).json({message: 'Quote was deleted seccuessfully'});
    } catch (error) {
        next(error);
    }
}