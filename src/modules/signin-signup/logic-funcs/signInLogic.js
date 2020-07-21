import { fireBaseExternalObj } from "/home/suzuka/Coding/the_odin_project/Projects/website/src/modules/firebase deps/firebase-external-deps";
import { uniqueUserDataObj } from "/home/suzuka/Coding/the_odin_project/Projects/website/src/modules/signin-signup/logic-funcs/userdatacollection";

export let authSignIn = () => {
  const liForm = document.querySelector("#formBoxSignIn");

  liForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = liForm["inputEmailSignIn"].value;
    const password = liForm["inputPassWordSignIn"].value;

    fireBaseExternalObj.auth
      .signInWithEmailAndPassword(email, password)
      .then((cred) => {
        //pushing object containing cred.user.id into array so it can be extracted -->
        //to global scope and then exported for future queries to database
        const thisUid = uniqueUserDataObj(cred.user.uid);
        arrUid.length = 0;
        arrUid.push(thisUid);

        liForm.reset();
      });
  });
};

//add then after auth method call for content stuff related to login
//add method to handle err throw
