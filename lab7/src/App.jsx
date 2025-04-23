import { NavLink, Outlet } from "react-router";

function App() {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/a">Page A</NavLink>
          <NavLink to="/b">Page B</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
