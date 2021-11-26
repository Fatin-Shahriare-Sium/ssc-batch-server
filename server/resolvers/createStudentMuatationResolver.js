
let Student = require('../model/student.js')
let Profile = require('../model/profile.js')

let createStudentMutationResolver = async (parents, args, ctx) => {
    let { name, gmail, uid } = args

    let alreadyHave = await Student.find({ gmail: gmail })
    console.log(alreadyHave);
    if (alreadyHave.length < 1) {
        let newProfile = new Profile({
            name,
            profileImg: '',
            fathername: "",
            gmail,
            phoneNumber: '',
            birthDate: '',
            birthplace: '',
            currentlocation: "",
            hobby: "",
            studingAt: '',
            studiedAt: "",
            socialLinks: {
                facebook: "",
                twitter: "",
                tiktok: '',
                youtube: ""
            },
        })

        let profilex = await newProfile.save()

        let newStudent = new Student({
            name,
            gmail,
            uid,
            profileImg: '',
            news: [],
            profile: profilex._id
        })

        let student = await newStudent.save()

        return {
            msg: `${name} has successfully created an account`,
            id: student._id,
            email: student.gmail,
            success: true
        }
    } else {

        return {
            msg: `Already,created account with this gmail:${gmail}`,
            success: false
        }
    }
}

module.exports = createStudentMutationResolver