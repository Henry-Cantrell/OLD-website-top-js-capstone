import { fireBaseExternalObj } from "/home/suzuka/Coding/the_odin_project/Projects/website/src/modules/firebase deps/firebase-external-deps";
import {uniqueUserDataObj} from '/home/suzuka/Coding/the_odin_project/Projects/website/src/modules/signin-signup/logic-funcs/userdatacollection'
import {arrUid} from '/home/suzuka/Coding/the_odin_project/Projects/website/src/modules/signin-signup/logic-funcs/arrUid'

export let authSignUp = () => {
  const suForm = document.querySelector("#formSignUp");

  suForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = suForm["inputEmailSignUp"].value;
    const password = suForm["inputPassWordSignUp"].value;

    fireBaseExternalObj.auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        //pushing object containing cred.user.id into array so it can be extracted --> 
        //to global scope for export and then exported for future queries to database
        const thisUid = uniqueUserDataObj(cred.user.uid)
        arrUid.length = 0;
        arrUid.push(thisUid)

        return fireBaseExternalObj.dataBase
          .collection("users")
          .doc(cred.user.uid)
          .set({
            email: suForm["inputEmailSignUp"].value,
          });
      })
      .then(() => {
        suForm.reset();
      });
  });
};
//auto login on signup**
//add then to createUser async for content stuff related to login
//add method to handle err throw
