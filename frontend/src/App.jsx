import { useState } from "react";

import "./App.css";

import AuthPage from "./assets/AuthPage";
import ChatsPage from "./assets/ChatPage";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;