import { QuizContainer } from "./styles";
import Widget from "../src/components/Widget";
import Global from "../style/global";
import db from "../db.json";
import QuizLogo from "../src/components/QuizLogo";
import QuizBackground from "../src/components/QuizBackground";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";

export default function Home() {
  // No arquivo index, deve existir uma funcao default para ser exportada, dessa forma o next saberá montar a tela
  return (
    <Global>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <p>{db.description}</p>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <h1>Quizes da Galera</h1>

              <p>lorem ipsum dolor sit amet...</p>
            </Widget.Content>
          </Widget>
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/RafaelMuniz94" />
        <Footer />
      </QuizBackground>
    </Global>
  );
}
