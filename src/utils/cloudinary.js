import {v2 as cloudinary} from "cloudinary"
import fs from "fs"



const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null;
        //upload the file on cloudinary
        const uploadResult = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has uploaded successfully
        // console.log("file is uploaded on cloudinary", uploadResult);
        fs.unlinkSync(localFilePath)
        return uploadResult;
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the loaclly saved tempory file as the upload operation got failed
        console.log("error uploading",error);
        return null;
    }
}

export {uploadOnCloudinary}