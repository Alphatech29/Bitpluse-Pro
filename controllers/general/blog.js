const asyncHandler = require("../../helpers/asyncHandler");

exports.blogPageGet = asyncHandler(async (req, res, next) => {
    
    return res.render("general/pages/blog/bloglist", {
        title: "Blog List"
    })
});

