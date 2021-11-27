import { gql } from '@urql/core';
import React, { useEffect, useState } from 'react'
import { useQuery } from 'urql';
import { useSession } from 'next-auth/client'
import { QueryProfileDataArgs, UpdateProfileMutationResponses } from '../../generated/graphql';
import { withUrqlClient } from 'next-urql'
import { log } from 'console';
let PROFILE_DATA = gql`

query ($userUid:String!){
    profileData(userUid:$userUid){
        name,
        profileImg,
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
        socialLinks{
            facebook,
            twitter,
            tiktok,
            youtube
        }
    }
}

`

const useProfileData = () => {
    const [session, loading] = useSession()

    return { userUid: session?.user.uid, PROFILE_DATA }



}

export default useProfileData;