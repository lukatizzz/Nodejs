import db from "../models/index.js";
import CRUDService from "../services/CRUDService.js";
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render("homePage.ejs", {
            data: JSON.stringify(data)
        });
    } catch (error) {
        console.log(error);
    }
};

let getCRUD = (req, res) => {
    return res.render("crud.ejs");
};

let postCRUD = async (req, res) => {
    let message = await CRUDService.createdNewUser(req.body);
    console.log(message);
    return res.send(message);
};

let displayGetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUsers();
    console.log(data);
    return res.render("displayCRUD.ejs", {
        dataTable: data
    });
};

let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let data = await CRUDService.getUserInfoById(req.query.id);
        if (data) {
            return res.render("editCRUD.ejs", {
                user: data
            });
        }
    } else {
        return res.send("User not found");
    }
};

let putCRUD = async (req, res) => {
    let data = req.body;
    let allUsers = await CRUDService.updateUserData(data);
    return res.render("displayCRUD.ejs", {
        dataTable: allUsers
    });
}

let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDService.deleteUserById(id);
        let allUsers = await CRUDService.updateUserData(data);
        return res.render("displayCRUD.ejs", {
            dataTable: allUsers
        });
    } else {
        return res.send("User not found!");
    }
}


// export this module
module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD
};