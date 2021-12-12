import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Home = () => {
  const {user, signIn, signOut} = useContext(UserContext)

  return (
    <div>
      <h1>Home</h1>
      <h2 className="mt-2">{user ? "Conectado" : "Desconectado"}</h2>
      {user ? (
        <>
          <button className="btn btn-primary" onClick={signOut}>
            Desconectar
          </button>
          <Link to="/protected" className="btn btn-warning ms-3">Protected route</Link>
        </>
      ) : (
        <button className="btn btn-primary" onClick={signIn}>
          Acceder
        </button>
      )}
    </div>
  );
};

export default Home;
