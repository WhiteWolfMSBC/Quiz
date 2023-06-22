import React, { useState } from 'react';
import './Style.css'
import  {quizData , IquizData} from './Data/QuizData'
import { Box, Button, Checkbox, FormControlLabel, FormGroup, Radio, RadioGroup, Typography } from '@mui/material';
import Result from './Result';


function QuizCom() {

    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [score, setScore] = useState<number>(0);
    const [selectOption, setSelectOption] = useState<any>(0);
    const [showResult, setShowResult] = useState<boolean>(false);
    const [select, setSelect] = useState<any>('');


    // Next-Question
  const handleChangeQue = () => {
    handleClickAns();
 if (currentQuestion < quizData.length - 1) {
   setCurrentQuestion(currentQuestion + 1);
   setSelectOption(0);
 } else {
     setShowResult(true);
 }
};

// select-ans
const handleClickAns = () => {
 if (selectOption === quizData[currentQuestion].answer) {
   setScore(score + 1);
  localStorage.setItem("answer", JSON.stringify({selectOption}));
 } else {
     console.log("wrong" , score);
 }
};

// back-btn
const handlePrevios = ()=>{
if (currentQuestion > 0) {
  setCurrentQuestion(currentQuestion - 1);
}
}

 const handleCheck = (e:any) =>{
   setSelect(e.target.value)
   console.log(e.target.value);
 }



  return (
    <Box>
        <Box sx={{ marginTop: "7%", bgcolor: "#cfd8dc", 
            height: "70vh", width: "45%", marginLeft: "29%",
            borderRadius: "9px", boxShadow: "16" }}
            >

            {
                showResult ?  
                (
                    <Result/>
                )
                 :
                (
                    <>
                        {/* Question */}
                   <Box sx={{ padding: "5%" }}>
                   <Typography
                     variant="subtitle1"
                     sx={{ fontWeight: "500", fontSize: "19px" , marginTop:"9%" }}
                   >
                     <span>{currentQuestion + 1}. </span>
                     {quizData[currentQuestion].question}
                   </Typography>
                </Box>


                    {/* Options */}
                <Box sx={{ marginTop: "1%" }}>
                   {quizData[currentQuestion].options.map((option :any, i:any) => {
                     return (
                       <Box key={i} sx={{ marginLeft: "24%" }}>
                         {quizData[currentQuestion].type === "radio" ? (
                           <RadioGroup
                             row
                             aria-labelledby="demo-row-radio-buttons-group-label"
                             name="row-radio-buttons-group"
                             value={select}
                             onChange={(e: any) => handleCheck(e)}
                           >
                             <FormControlLabel
                               value={option}
                               control={<Radio />}
                               label={option}
                               onClick={() => setSelectOption(i + 1)}
                             />
                           </RadioGroup>
                         ) : (
                           <FormGroup>
                             <FormControlLabel
                              
                               control={<Checkbox />}
                               label={option}
                               onClick={() => setSelectOption(i + 1)}
                             />
                           </FormGroup>
                         )}
                       </Box>
                     );
                   })}
                 </Box>

                   {/* buttons */}
                 <Button
                  disabled={currentQuestion === 0}
                  onClick={handlePrevios}
                  variant="outlined"
                  sx={{
                    marginTop: "7%",
                    marginBottom: "5%",
                    paddingX: "5%",
                    marginRight: "3%",
                  }}
                >
                  previous👈
                </Button>

                <Button
                  onClick={handleChangeQue}
                  variant="outlined"
                  sx={{
                    marginTop: "7%",
                    marginBottom: "5%",
                    paddingX: "5%",
                  }}
                >
                  Next👉
                </Button>
                    </>
                  )
            }

         </Box>
    </Box>
  );
}

export default QuizCom ;
