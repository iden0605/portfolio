import '../../App.css';
import Profile from './Profile';
import Terminal from './Terminal';

function Body() {
  // render the main content sections
  return (
    <main className="main-content">
      <Profile />
      <Terminal />
    </main>
  );
}

export default Body;
