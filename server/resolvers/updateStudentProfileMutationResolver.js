const Profile = require("../model/profile");
const Student = require("../model/student");


let updateStudentProfileMuatationResolver = async (parent, args, ctx) => {
    let {
        userUid,
        name,
        fathername,
        rollNumber,
        gmail,
        phoneNumber,
        birthDate,
        birthplace,
        currentlocation,
        hobby,
        studingAt,
        studiedAt,
        workingAs,
        facebook,
        twitter,
        tiktok,
        youtube
    } = args




    let studentx = await Student.findOne({ uid: userUid })

    let profilex = await Profile.findOneAndUpdate({ _id: studentx.profile }, {
        $set: {
            name,
            fathername,
            gmail,
            phoneNumber,
            rollNumber,
            birthDate,
            birthplace,
            currentlocation,
            hobby,
            studingAt,
            studiedAt,
            workingAs,
            socialLinks: {
                facebook: facebook,
                twitter: twitter,
                tiktok: tiktok,
                youtube: youtube
            }
        }
    })

    return {
        name: profilex.name,
        fathername: profilex.fathername,
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

module.exports = updateStudentProfileMuatationResolver