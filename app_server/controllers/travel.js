const travel = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Travel';
    res.render('travel', {title: {title: pageTitle}});
};

module.exports = {
    travel
}