import QuizBackground from "../src/components/QuizBackground";
import GitHubCorner from "../src/components/GitHubCorner";
import Footer from "../src/components/Footer";
import Global from "../style/global";
import db from "../db.json";

export default function Quizes(){
    return(
        <Global>
            <QuizBackground backgroundImage={db.bg}>
            <GitHubCorner projectUrl="https://github.com/RafaelMuniz94" />
            <Footer />
            </QuizBackground>
            
        </Global>
    )
}