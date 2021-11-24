import "./faq.scss"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Typography from '@mui/material/Typography';



export default function Faq() {
    const questions = [
        {
            'question': "Question 1: Where are you located?",
            'answer': 'We are headquartered in Boston, MA and Los Angeles, CA.'
        },
        {
            'question': "Question 2: How do I join the crew?",
            'answer': 'We have bi-annual auditions (January and july) for each location. Details will be posted on our IG accounts.'
        },
        {
            'question': "Question 3: Is there an age restriction for joining the crew?",
            'answer': 'We require all auditionees to be at least 15. If you are under 18, we may ask for a parent or guardian to sign for specific events.'
        },
        {
            'question': "Question 4: How old is Hush Crew?",
            'answer': 'Hush Boston was founded in May of 2019 by Aaliyah, Alex, Alice, and Cecilia. Since then, Aaliyah and Charlene founded Hush Los Angeles in September of 2021.'
        },
        {
            'question': "Question 5:",
            'answer': 'Input your answer 5 here'
        },
        {
            'question': "Question 6:",
            'answer': 'Input your answer 6 here'
        },
        {
            'question': "Question 7:",
            'answer': 'Input your answer 7 here'
        },
    ]
    return(
        <div className="faq">
            <div className="container">
                <h1>Frequently Asked Questions (FAQ)</h1>
                <div className="questions">
                    {questions.map((item) => 
                        <Accordion className="acc">
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <h1>{item.question}</h1>
                            </AccordionSummary>
                            <AccordionDetails>
                                <span>{item.answer}</span>
                            </AccordionDetails>
                        </Accordion>
                    )}
                </div>
            </div>
        </div>
    )
}