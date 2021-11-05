import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/* steps for authentication
----------------------------
Step-1: Initial Setup
1. firebase: create project
2. create web app
3. get configuration
4. initialize authentication
5. enable auth method

Step-2: Setup component
1. Create Login component
2. Create register component
3. create route for login & register

Step-3: set auth system
1. setup signin method
2. setup signout method
3. user state
4.special observer
5. return necessary methods and states form firebase

step-4: create auth context hook (useAuth)(context api)(props drilling)
1. Create a AuthContext
2. Create context Provider
3. Set context provider context value
4. use auth provider
5. Create useAuth hook

step-5: create private route
1. create private route
2. set private route

step-6: Redirect after login
1. after login redirect user to their desire destination
2. React hook form (powerful jinish)




*/
