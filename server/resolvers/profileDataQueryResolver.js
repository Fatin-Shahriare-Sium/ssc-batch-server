const Profile = require("../model/profile")
const Student = require("../model/student")

let profileDataQueryResolver = async (parent, args, ctx) => {
    let { userUid } = args

    let studentx = await Student.findOne({ uid: userUid })

    let profilex = await Profile.findOne({ _id: studentx.profile })

    return {
        name: profilex.name,
        fathername: profilex.fathername,
        profileImg: profilex.profileImg,
        gmail: profilex.gmail,
        phoneNumber: profilex.phoneNumber,
        rollNumber: profilex.rollNumber,
        birthDate: profilex.birthDate,
        birthplace: profilex.birthplace,
        currentlocation: profilex.currentlocation,
        hobby: profilex.hobby,
        studingAt: profilex.studingAt,
        studiedAt: profilex.studiedAt,
        workingAs: profilex.workingAs,
        socialLinks: {
            facebook: profilex.socialLinks.facebook,
            twitter: profilex.socialLinks.twitter,
            tiktok: profilex.socialLinks.tiktok,
            youtube: profilex.socialLinks.youtube
        }
    }
}

module.exports = profileDataQueryResolver