import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const handleMount = async () => {
    console.log("handleMount is called");
    try {
      const { data } = await axios.get("dj-rest-auth/user/");
      console.log("User data fetched:", data);
      setCurrentUser(data);
      console.log("User data:", data)
    } catch (err) {
      console.log("Something went wrong")
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("useEffect is running");
    handleMount();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        <div className={styles.App}>
          <div className="NavBar">
            <NavBar />
            <Container className={styles.Main}>
              <Switch>
                <Route exact path="/" render={() => <h1>Home Page</h1>} />
                <Route exact path="/newpost" render={() => <h1>New Post</h1>} />
                <Route
                  exact
                  path="/likedposts"
                  render={() => <h1>Liked Posts</h1>}
                />
                <Route exact path="/mygames" render={() => <h1>My Games</h1>} />
                <Route exact path="/profile" render={() => <h1>Profile</h1>} />
                <Route exact path="/signup" render={() => <SignUpForm />} />
                <Route exact path="/login" render={() => <SignInForm />} />
                <Route exact path="/logout" render={() => <h1>Log Out</h1>} />
                <Route render={() => <h1>404 page not found</h1>} />
              </Switch>
            </Container>
          </div>
        </div>
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
