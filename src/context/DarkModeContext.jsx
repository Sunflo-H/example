import { createContext, useState } from "react";

export const DarkModeContext = createContext(); // 컨텍스트 생성, 필요한 데이터를 여기에 담고있다.

export function DarkModeProvider({ children }) {
  // 우산 컴포넌트라 생각하면된다.
  const [darkMode, setDarkMode] = useState(false);
  const [song, setSong] = useState("mySong");
  const toggleDarkMode = () => setDarkMode((mode) => !mode);
  return (
    <DarkModeContext.Provider // 우산을 씌움
      value={{ darkMode: darkMode, toggleDarkMode: toggleDarkMode, song }} // 우산에 씌워진 하위 컴포넌트들이 사용가능한 obj
    >
      {children}
    </DarkModeContext.Provider>
  );
}
