import { useState } from "react";
import MainLayout from "./layouts/MainLayout";
import Zagruzka from "./components/Zagruzka";
import Grid from "./components/Grid";
import Button from "./components/Button";
import Menu from "./components/Menu";

function App() {
  const [grid, setGrid] = useState([
    { id: 1, text: "" },
    { id: 2, text: "" },
    { id: 3, text: "" },
    { id: 4, text: "" },
    { id: 5, text: "" },
    { id: 6, text: "" },
    { id: 7, text: "" },
    { id: 8, text: "" },
    { id: 9, text: "" },
  ]);
  const [user, setUser] = useState(true);
  const [darkTheme, setDarkTheme] = useState(false);
  const [winner, setWinner] = useState("no-one");
  const [menuStatus, setMenuStatus] = useState(true);
  const handleTheme = () => {
    toggleThemeHtml(!darkTheme);
    setDarkTheme(!darkTheme);
  };

  const toggleThemeHtml = (theme) => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  function changeMenuStatus() {
    setMenuStatus(!menuStatus);
  }

  function checkWin(fake_grid) {
    const arr = [
      // row
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // column
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // diagonals
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < arr.length; i++) {
      let count = 0;
      for (let j = 0; j < arr[i].length; j++) {
        if (fake_grid[arr[i][j]].text === "X") {
          count++;
        }
      }
      if (count === 3) {
        setWinner("X");
      }
    }

    for (let i = 0; i < arr.length; i++) {
      let count = 0;
      for (let j = 0; j < arr[i].length; j++) {
        if (fake_grid[arr[i][j]].text === "O") {
          count++;
        }
      }
      if (count === 3) {
        setWinner("O");
      }
    }
  }

  function handlePlay(elementID) {
    //NO NO push splice pop shift unshift
    //OK map forEach slice filter find some
    const newGrid = grid.map((item) => {
      if (item.id === elementID && !item.text) {
        return { ...item, text: user ? "X" : "O" };
      } else return item;
    });
    setUser(!user);
    setGrid(newGrid);
    checkWin(newGrid);
  }

  // if (!user) {
  //   return (
  //     <MainLayout>
  //       <Zagruzka />
  //     </MainLayout>
  //   );
  // }

  return (
    <MainLayout>
      {menuStatus ? (
        <Menu skipMenu={changeMenuStatus}></Menu>
      ) : (
        <>
          <Button handleChangeUser={setMenuStatus}> Back to menu </Button>
          <Button handleChangeUser={handleTheme}> Switch Theme </Button>
          <Grid grid={grid} handlePlay={handlePlay} winner={winner} />
        </>
      )}
    </MainLayout>
  );
}

export default App;
