const index = (req, res) => {
    req.render('index', {title: 'Travlr Getaways'});
};

module.exports = {
    index
}