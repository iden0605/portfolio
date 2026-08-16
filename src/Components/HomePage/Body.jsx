import '../../App.css';
import Profile from './Profile';
import StatsStrip from './StatsStrip';
import Terminal from './Terminal';

function Body() {
  // render the main content sections
  return (
    <main className="main-content">
      <Profile />
      <StatsStrip />
      <Terminal />
    </main>
  );
}

export default Body;
