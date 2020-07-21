import { authSignIn } from '/home/suzuka/Coding/the_odin_project/Projects/website/src/modules/signin-signup/logic-funcs/signInLogic'

export let signInBox = () => {

        let boxMaker = () => {
          const box = document.createElement('div');
          box.id = 'signInBox'
      
          const signInTxt = document.createElement('h1')
          signInTxt.textContent = 'Sign In'
          signInTxt.id = 'signInTxt'

          const form = document.createElement('form')
          form.id = 'formSignIn'
      
          const formBoxSignIn = document.createElement('div')
          formBoxSignIn.id = 'formBoxSignIn'
      
          const inputFieldEmail = document.createElement('input')
          inputFieldEmail.id = 'inputEmailSignIn'
          inputFieldEmail.type = 'email'
          inputFieldEmail.placeholder = 'Email'
          inputFieldEmail.setAttribute("style", "display: inline-block;  margin-top: 15px; margin-bottom: 15px;")
      
          const inputFieldPassword = document.createElement('input')
          inputFieldPassword.id = 'inputPassWordSignIn'
          inputFieldPassword.placeholder = 'Password'
          inputFieldPassword.type = 'password'
          inputFieldPassword.setAttribute("style", "display: inline-block;  margin-top: 15px; margin-bottom: 15px;")
      
          const divButton = document.createElement('button')
          divButton.setAttribute("style", "display: inline-block;  margin-top: 15px; margin-bottom: 15px;")
          divButton.textContent = 'Login to an account'
          divButton.id = 'buttonSignIn'
      
          document.getElementById('signInMaster').appendChild(box)
          box.appendChild(signInTxt)
          box.appendChild(formBoxSignIn)
          box.appendChild(form)
          form.appendChild(formBoxSignIn)
          formBoxSignIn.appendChild(inputFieldEmail)
          formBoxSignIn.appendChild(inputFieldPassword)
          formBoxSignIn.appendChild(divButton)
        }
      
        boxMaker()

}