import "./faq.scss"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Typography from '@mui/material/Typography';



export default function Faq() {
    const questions = [
        {
            'question': "Question 1:",
            'answer': 'Input your answer 1 here'
        },
        {
            'question': "Question 2:",
            'answer': 'Input your answer 2 herfdsfsfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsde'
        },
        {
            'question': "Question 3:",
            'answer': 'Input your answer 3 here'
        },
        {
            'question': "Question 4:",
            'answer': 'Input your answer 4 here'
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
            <h1>Frequently Asked Questions (FAQ)</h1>
            <div className="questions">
                {questions.map((item) => 
                    <Accordion className="acc">
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            {item.question}
                        </AccordionSummary>
                        <AccordionDetails>
                            {item.answer}
                        </AccordionDetails>
                    </Accordion>
                )}
            </div>
        </div>
    )
}