import { Link } from 'react-router-dom';
import './styles.scss';

export const Home = () => {
  return (
    <div className="Home">
      <header className="content">
        <h1>Welcome to my project App</h1>
      </header>
      <section className="content">
        <h2>Nice to meet you! 👋</h2>
        <p>
          I am Nofar Baranes and I am a Lead Front-End developer based in
          Israel.
        </p>
        <p>
          I have 10 years of experience in planning, developing, and executing
          multiple projects in the latest technologies.
          <br />
          My expertise includes coding with ES6/TypeScript, React (+ Hooks),
          Redux, MobX, Sass, styled-components, and more.
          <br />I am a motivated, determined, and independent quick learner of
          new technologies with high standards of professionalism.
        </p>
      </section>
      <section className="content">
        <h2>About the project</h2>
        <p>
          This project includes frontend <Link className='link' to="/challenges">Challenges</Link>, such as games and tools,
          aimed at improving my skills in React and TypeScript.
        </p>
      </section>
    </div>
  );
}