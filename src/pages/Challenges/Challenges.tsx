
import { Link } from 'react-router-dom';
import './styles.scss';

export const Challenges = () => {
    return (
      <div className="Challenges">
        <header className="content">
          <h1>About the challenges</h1>
        </header>
        <section className="content">
          <p>
            The project also include a Storybook with the common components I
            have created for the challenges to ensuring consistency in language
            across the components featured in the pages and games of this
            project is a priority. I strive to produce a uniform language that
            maintains a cohesive and seamless experience throughout.
          </p>
        </section>
        <section className="content">
          <h2>See the following challenges:</h2>
          <ol>
            <li><Link className='link' to="/rock-paper-scissors-game">Rock, Paper, Scissors game</Link></li>
          </ol>
        </section>
      </div>
    );
  }
