import {loButtonAel} from '/home/suzuka/Coding/the_odin_project/Projects/website/src/modules/signin-signup/logic-funcs/logoutbutton'

export let signInCheckTest = () => {
    const checkBox = document.createElement("div");
    checkBox.id = 'checkBox'

    const loButton = document.createElement('button')
    loButton.id = 'logoutButton'
    loButton.textContent = 'Log out'

    loButton.addEventListener('click', (e) => {
        loButtonAel(e)
    })

    checkBox.appendChild(loButton)
    document.body.appendChild(checkBox);
  };
  