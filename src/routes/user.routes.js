import {Router} from "express";
import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js"; // Assuming you have a middleware for handling file uploads

const router = Router();

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        }, 
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
    )
// upload.fields is used to handle multiple file uploads, where 'avatar' and 'coverImage' are the names of the fields in the form data.
// upload is multer middleware that handles file uploads.
// middlerware concept: age jate vaqt muzhse milte jana , to register karne se pehle upload karne ka kaam karega
export default router;