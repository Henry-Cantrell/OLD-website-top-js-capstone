import { fireBaseExternalObj } from "/home/suzuka/Coding/the_odin_project/Projects/website/src/modules/firebase deps/firebase-external-deps";

export let authSignIn = () => {
  const liForm = document.querySelector("#formBoxSignIn");

  liForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = liForm["inputEmailSignIn"].value;
    const password = liForm["inputPassWordSignIn"].value;

    fireBaseExternalObj.auth.signInWithEmailAndPassword(email, password)

    liForm.reset();
  });
};

//add then after auth method call for content stuff
//add method to handle err throw