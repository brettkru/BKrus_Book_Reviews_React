import profileImg from '../assets/profilepic.png'

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-content">
        <img
          src= {profileImg}
          className="profile"
          alt="profile-picture"
        />
        <h3>Bretts Book Reviews</h3>
      </div>
    </header>
  );
}
