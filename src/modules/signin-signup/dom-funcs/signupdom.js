export let signUpBox = () => {
    let boxMaker = () => {
      const box = document.createElement('div');
      box.id = 'signUpBox'

      const signUpTxt = document.createElement('h1')
      signUpTxt.textContent = 'Sign Up'
      signUpTxt.id = 'signUpTxt'
  
      const formBoxSignUp = document.createElement('div')
      formBoxSignUp.id = 'formBoxSignUp'
  
      const inputFieldName = document.createElement('input')
      inputFieldName.id = 'inputNameSignUp'
      inputFieldName.placeholder = 'Name'
      inputFieldName.setAttribute("style", "display: inline-block; margin-top: 15px; margin-bottom: 15px;")
  
      const inputFieldEmail = document.createElement('input')
      inputFieldEmail.id = 'inputEmailSignUp'
      inputFieldEmail.placeholder = 'Email'
      inputFieldEmail.setAttribute("style", "display: inline-block;  margin-top: 15px; margin-bottom: 15px;")
  
      const inputFieldPassword = document.createElement('input')
      inputFieldPassword.id = 'inputPassWordSignUp'
      inputFieldPassword.placeholder = 'Password'
      inputFieldPassword.setAttribute("style", "display: inline-block;  margin-top: 15px; margin-bottom: 15px;")
  
      const divButton = document.createElement('button')
      divButton.setAttribute("style", "display: inline-block;  margin-top: 15px; margin-bottom: 15px;")
      divButton.textContent = 'Create an account'
      divButton.id = 'buttonSignUp'
  
      document.getElementById('signInMaster').appendChild(box)
      box.appendChild(signUpTxt)
      box.appendChild(formBoxSignUp)
      formBoxSignUp.appendChild(inputFieldName)
      formBoxSignUp.appendChild(inputFieldEmail)
      formBoxSignUp.appendChild(inputFieldPassword)
      formBoxSignUp.appendChild(divButton)
    }
  
    boxMaker()
  }
  
  
  
  