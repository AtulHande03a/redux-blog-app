import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";
import { fetchUsers } from "./features/users/usersSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { fetchPosts } from "./features/posts/postsSlice";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

store.dispatch(fetchPosts());
store.dispatch(fetchUsers());

root.render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>
);
