import "./wrapper.css";

const Wrapper = () => {
  const logo =
    "https://images-ext-1.discordapp.net/external/9z1XfkwHsO0FdcoAStO5yEewVdECt_uhF6wKN_hPAN4/https/cryptologos.cc/logos/elrond-egld-egld-logo.png?width=660&height=660";

  return (
    <div className={"Wrapper"}>
      <div className={"Wrapper__Box"}>
        <div className={"Wrapper__Logo"}>
          <img src={logo} alt={"logo"} />
        </div>
        <div className={"Wrapper__Text"}>
          <h4>The best ecommerce website </h4>
          <h4>By Anton Takashvili</h4>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
