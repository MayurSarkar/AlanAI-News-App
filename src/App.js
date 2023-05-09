import React, {useState, useEffect} from "react";
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from "./components/NewsCards/NewsCards";
import useStyles from './styles.js';


const alanKey = 'f454777f39c5acd408b5e142227a0aae2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
const [newsArticles, setNewsArticles] = useState([]);
const [activeArticle, setActiveArticle] = useState(-1);
const classes = useStyles();

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command,articles }) => {
                if (command === 'newHeadLines'){
                    setNewsArticles(articles);
                    setActiveArticle(-1)
                } else if(command === 'highlight')
                    setActiveArticle((prevActiveArticle) => prevActiveArticle+1)
            }
        }
        )
    }, [])

    return (
        <div>
            <div className={classes.logoContainer}>
                <img src="https://voicebot.ai/wp-content/uploads/2019/10/alan.jpg" className={classes.alanLogo} alt='alan logo'/>
            </div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
        </div>
    );
}

export default App;