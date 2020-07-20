import { authSignUp } from "/home/suzuka/Coding/the_odin_project/Projects/website/src/modules/signin-signup/logic-funcs/signUpLogic";

export let signUpBox = () => {
  let boxMaker = () => {
    const box = document.createElement("div");
    box.id = "signUpBox";

    const signUpTxt = document.createElement("h1");
    signUpTxt.textContent = "Sign Up";
    signUpTxt.id = "signUpTxt";

    const form = document.createElement("form");
    form.id = "formSignUp";

    const formBoxSignUp = document.createElement("div");
    formBoxSignUp.id = "formBoxSignUp";

    const inputFieldEmail = document.createElement("input");
    inputFieldEmail.id = "inputEmailSignUp";
    inputFieldEmail.placeholder = "Email";
    inputFieldEmail.type = "email";
    inputFieldEmail.setAttribute(
      "style",
      "display: inline-block;  margin-top: 15px; margin-bottom: 15px;"
    );

    const inputFieldPassword = document.createElement("input");
    inputFieldPassword.id = "inputPassWordSignUp";
    inputFieldPassword.placeholder = "Password";
    inputFieldPassword.type = "password";
    inputFieldPassword.setAttribute(
      "style",
      "display: inline-block;  margin-top: 15px; margin-bottom: 15px;"
    );

    const divButton = document.createElement("button");
    divButton.setAttribute(
      "style",
      "display: inline-block;  margin-top: 15px; margin-bottom: 15px;"
    );
    divButton.textContent = "Create an account";
    divButton.id = "buttonSignUp";
    divButton.addEventListener("click", () => {
      document.getElementById("inputPassWordSignUp").textContent = "";
      document.getElementById("inputEmailSignUp").textContent = "";
    });

    document.getElementById("signInMaster").appendChild(box);
    box.appendChild(signUpTxt);
    box.appendChild(formBoxSignUp);
    box.appendChild(form);
    form.appendChild(formBoxSignUp);
    formBoxSignUp.appendChild(inputFieldEmail);
    formBoxSignUp.appendChild(inputFieldPassword);
    formBoxSignUp.appendChild(divButton);
  };

  boxMaker();
  authSignUp();
};

  
  
  