import {fireBaseExternalObj} from '/home/suzuka/Coding/the_odin_project/Projects/website/src/modules/firebase deps/firebase-external-deps'

export let authSignUp = () => {
   const suForm = document.querySelector('#formSignUp')

   suForm.addEventListener('submit', (e) => {
       e.preventDefault();

       const email = suForm['inputEmailSignUp'].value
       const password = suForm['inputPassWordSignUp'].value

       fireBaseExternalObj.auth.createUserWithEmailAndPassword(email, password).then(cred => {
           console.log(cred.user)
       })
       suForm.reset()
   })
}

//auto login on signup FYI