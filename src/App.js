// import logo from './logo.svg';
//packages
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

//components

import Navbar from "./components/Navbar.js";
import Users from "./components/Users.js";
//pages
import Contact from "./pages/Contact.js";
import About from "./pages/About.js";
import UserPage from "./pages/UserPage.js";
import Footer from "./components/Footer.js";
//Key
let key = "";//Your key

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get("https://api.github.com/users", {
          headers: {
            Authorization: `Bearer ${key}`,
          },
        });
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  const searchUsers = async (username) => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/search/users?q=${username}`,
        {
          headers: {
            Authorization: `Bearer ${key}`,
          },
        }
      );
      // console.log(data.items);
      setUsers(data.items);
    } catch (err) {
      console.log(err);
    }
  };

  const getUser = async (username) => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${username}`,
        {
          headers: {
            Authorization: `Bearer ${key}`,
          },
        }
      );
      setUser(data);
    } catch (err) {
      console.log(err);
    }
  };
  const getRepos = async (username) => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${username}/repos`,
        {
          headers: {
            Authorization: `Bearer ${key}`,
          },
        }
      );
      setRepos(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Navbar data={searchUsers} />
      <center>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Users data={users} />
              </>
            }
          ></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/user/:username"
            element={
              <UserPage
                getUser={getUser}
                user={user}
                getRepos={getRepos}
                repos={repos}
              />
            }
          ></Route>
        </Routes>
        <Footer />
      </center>
    </>
  );
}
export default App;
