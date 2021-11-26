import { gql } from '@urql/core';
import React from 'react'
import { useMutation } from 'urql';
import { CreateStudentMutationResponses, MutationCreateStudentArgs } from '../../generated/graphql';


let CREATE_STUDENT_MUTATION = gql`

mutation ($name:String!,$gmail:String!){
    createStudent(name:$name,gmail:$gmail){
        msg
    }
}


`


const useSignup = () => {

    let [createStudentResults, createStudent] = useMutation<CreateStudentMutationResponses, MutationCreateStudentArgs>(CREATE_STUDENT_MUTATION)

    async function createNewStudent(gmail: string, name: string) {
        console.log('gmail in hook', gmail);

        let results = await createStudent({ gmail: gmail, name: name })
        console.log('result after signin', results);

    }





}

export default useSignup;

// export let createNewStudent = () => {
//     let results = await createStudent({ gmail: gmail, name: name })
//     console.log('result after signin', results);
// }
