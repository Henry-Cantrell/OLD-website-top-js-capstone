import {fireBaseExternalObj} from '/home/suzuka/Coding/the_odin_project/Projects/website/src/modules/firebase deps/firebase-external-deps'

export let loButtonAel = (e) => {
    e.preventDefault();
   
    fireBaseExternalObj.auth.signOut
}
//add .then to handle signout event with content change back to login/signup page