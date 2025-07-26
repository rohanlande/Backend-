import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/apiError.js";
import {User} from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import {ApiResponse} from "../utils/apiResponse.js"
const registerUser =  asyncHandler(async(req,res)=>{
    // steps to register a user
    // Get User details from frontned - req.body
    // Validate User details
    // Check if user already exists
    // check for images, check for avatar
    // uplaod them to cloudinary
    // create a user object - create a user in database
    // remove password and refresh token from user object response
    // cheak for user creation success
    // send response to frontend
    const {username, email, password, fullName}= req.body;
    console.log(username, email, password, fullName);

    // Hard Syntax for validation but  industry approach
    //can use simple if else for each field
    if ([fullName,email,username,password].some((field)=>
        field?.trim() === "")
    ){
        throw new  ApiError (400,"All Fileds are required")
    }

    const existedUser = User.findOne({
        $or: [{username}, {email}]
    })

    if(existedUser){
        throw new ApiError(409,"User With email or username already exists")
    }
    const avatarLocalPath = req.files?.avatar[0]?.path ;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if(!avatarLocalPath){
        throw new ApiError(400,"Avatar filed is required")
    }
    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);

    if(!avatar){
         throw new ApiError(400, "Avatar filed is required");
    }
    const user = await User.create({
        fullName,
        avatar:avatar.url,
        coverImage:coverImage.url || "",
        email,
        password,
        username: username.toLowerCase()
    })
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser){
        throw new ApiError(500,"Something went wrong while registering user")
    }
    return res.status(201).json(
        new ApiResponse(200,createdUser,"User registered Succesfully")
    )



    res.status(200).json({
        message:"ok"
    })
})

export {registerUser};
