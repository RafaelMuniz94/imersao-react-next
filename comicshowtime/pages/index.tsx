import Widget from "../src/components/Widget";
import Global from "../style/global";
import db from "../db.json";
import QuizLogo from "../src/components/QuizLogo";
import QuizContainer from "../src/components/QuizContainer";
import QuizBackground from "../src/components/QuizBackground";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";
import NameInput from "../src/components/NameInput";

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
              <NameInput />
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <h1>Quizes da Galera</h1>
              <ul>
                {db.external.map((link) => {
                  let [projeto,user] = link.replace(/\//g,'').replace('https:','').replace('.vercel.app','').split('.')
                  return (
                    <li key={link}>
                      <Widget.Topic href={link}>{`${user}/${projeto}`}</Widget.Topic>
                    </li>
                  );
                })}
              </ul>
            </Widget.Content>
          </Widget>
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/RafaelMuniz94" />
        <Footer />
      </QuizBackground>
    </Global>
  );
}
