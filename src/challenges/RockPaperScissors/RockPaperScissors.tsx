import { Button } from '../../common';
import './styles.scss';

export const RockPaperScissors = () => {
    return (
    <div className="RockPaperScissors">
        <header className="header">
            <h1>Rock, Paper and Scissors</h1>
            <div>Score</div>
        </header>
        <section className="playground">
        
        </section>
        <footer className="footer">
            <Button onClick={() => {}}>Rules</Button>
        </footer>
      </div>
    );
  }
  
