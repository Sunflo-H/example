import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/Profile";
import Avatar from "./components/Avatar";

function AppProfile() {
  const clickHandler = (e) => {
    console.log(e);
  };
  return (
    <>
      <button onClick={clickHandler}>버튼</button>
      <Avatar title="beauty" isNew={true} />
      <Profile name="황병준" job="프론트엔드개발자" isNew={true} />
      <Profile name="제임스" job="언덕위의제임스" isNew={false} />
      <Profile name="토마스" job="기차" isNew={false} />
    </>
  );
}

export default AppProfile;
