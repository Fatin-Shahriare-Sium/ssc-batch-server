const Profile = require("../model/profile")
const Student = require("../model/student")

let updateProfilePicMutationResolver = async (parent, args, ctx) => {
    let { src, alt, userUid } = args
    console.log('src', userUid);

    let studentx = await Student.findOneAndUpdate({ uid: userUid }, {
        $set: { profileImg: src }
    })

    let profilex = await Profile.findOneAndUpdate({ _id: studentx.profile }, {
        $set: { profileImg: src }
    })

    console.log(profilex);
    return {
        success: true,
        msg: 'Successfully,updated your profilePic'
    }

}

module.exports = updateProfilePicMutationResolver