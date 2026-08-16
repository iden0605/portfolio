import '../../App.css';
import Profile from './Profile';
import GithubSection from './GithubSection';
import Terminal from './Terminal';

function Body() {
  // render the main content sections
  return (
    <main className="main-content">
      <Profile />
      <Terminal />
      <GithubSection />
    </main>
  );
}

export default Body;
