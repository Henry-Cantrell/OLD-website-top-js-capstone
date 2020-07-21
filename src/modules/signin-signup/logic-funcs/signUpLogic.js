import { fireBaseExternalObj } from "/home/suzuka/Coding/the_odin_project/Projects/website/src/modules/firebase deps/firebase-external-deps";
import { uniqueUserDataObj } from "/home/suzuka/Coding/the_odin_project/Projects/website/src/modules/signin-signup/logic-funcs/userdatacollection";
import { arrUid } from "/home/suzuka/Coding/the_odin_project/Projects/website/src/modules/signin-signup/logic-funcs/arrUid";

export let authSignUp = () => {
  const suForm = document.querySelector("#formSignUp");

  suForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = suForm["inputEmailSignUp"].value;
    const password = suForm["inputPassWordSignUp"].value;

    fireBaseExternalObj.auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        //pushing object containing fb doc name cred.user.id into array as string so 
        //it can be extracted and then exported for future queries to database
        const thisUid = uniqueUserDataObj(cred.user.uid);
        arrUid.length = 0;
        arrUid.push(thisUid);
        //end of array methods

        const dataField = {
          email: suForm["inputEmailSignUp"].value
        };

        return fireBaseExternalObj.dataBase
          .collection("users")
          .doc(cred.user.uid)
          .set({
            dataField,
          });
      });
  });
};

//auto login on signup**
//add then to createUser async for content stuff related to login
//add method to handle err throw