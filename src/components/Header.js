const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        margin: "1rem auto",
        height: "8rem",
      }}
    >
      <div>
        <h1>Prakash Medicine Shop</h1>
      </div>
      <div>
        <button>Cart</button>
      </div>
    </div>
  );
};
export default Header;
