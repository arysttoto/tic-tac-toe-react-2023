function Menu(props) {
  return (
    <div className="container">
      <div className="menu grid h-screen place-items-center">
        <button
          type="button"
          onClick={props.skipMenu}
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-l px-10 py-5 text-center mr-2 mb-2"
        >
          Start Game!
        </button>
      </div>
    </div>
  );
}

export default Menu;
