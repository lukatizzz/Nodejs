let getHomePage = (req, res) => {
    return res.render("homePage.ejs");
};
 
// export this module
module.exports = {
    getHomePage: getHomePage
};