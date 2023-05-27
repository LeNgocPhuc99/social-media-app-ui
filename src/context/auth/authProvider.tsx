import { useEffect, useState } from "react";
import { AuthContext } from "./authContext";

interface User {
  id: string;
  name: string;
  email: string;
}

export const AuthProvider = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const [user, setUser] = useState<User | null>(JSON.parse(localStorage.getItem("social.app.user") as string) as User);

  const login = () => {
    console.log("login");
    setUser({
      id: "1",
      name: "Asura",
      email: "asura@gmail.com",
    });
  };

  useEffect(() => {
    if (user) {
      console.log("set local storage", user);
      localStorage.setItem("social.app.user", JSON.stringify(user));
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
