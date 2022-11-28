const questions= [
    { 
        // First question
        'que': 'Tajmahal is situated in which city',
        'a': 'Agra',
        'b': 'Delhi',
        'c': 'Mumbai',
        'd': 'Kolkata',
        'correct': 'a'
    },
    // second question
    {
        'que': 'How many sides does the Pentagon have?',
        'a': '2',
        'b': '5',
        'c': '6',
        'd': 'none',
        'correct': 'b'
    },
    // third question
    {
        'que': 'Which state in India has the longest coastline?',
        'a': 'Gujrat',
        'b': 'Andhra Pradesh',
        'c': 'Maharastra',
        'd': 'none',
        'correct': 'a'
    },
    // Fourth question
    {
        'que': 'Which year did India celebrate its first Republic Day?',
        'a': '1950',
        'b': '1949',
        'c': '1947',
        'd': 'none',
        'correct': 'a'
    },
    // Fifth question
    {
        'que': 'Which metal is in liquid form?',
        'a': 'mercury',
        'b': 'Hydrogen',
        'c': 'Nitrogen',
        'd': 'none',
        'correct': 'a'
    },
    // sixth question
    {
        'que': 'Who was  the last Mughal Emperor?',
        'a': 'Auranzeb',
        'b': 'Akabar',
        'c': 'Bahadur Shah Zafar',
        'd': 'none',
        'correct': 'c'
    },
    // seventh question
    {
        'que': 'What is the language from which the word Tsunami comes from?',
        'a': 'Pakista',
        'b': 'India',
        'c': 'Japan',
        'd': 'none',
        'correct': 'c'
    },
    // eight question
    {
        'que': 'When is Earth day celebrated?',
        'a': '22nd April',
        'b': '29nd April',
        'c': '12nd April',
        'd': 'none',
        'correct': 'a'
    },
    // ninth question
    {
        'que': 'How many MBs are there in 1 GB?',
        'a': '2042',
        'b': '1048',
        'c': '1024',
        'd': 'none',
        'correct': 'c'
    },
    // 10th question
    {
        'que': 'When was the camera invented?',
        'a': '1916',
        'b': '1816',
        'c': '1998',
        'd': 'none',
        'correct': 'b'
    },
];
let index = 0;
let total= questions.length;
let right= 0;
let wrong= 0;
const quesBox = document.getElementById("quesBox")
const optionInputs= document.querySelectorAll('.options')
const loadquestion = () => {
    if(index == total){
       return endQuiz()
    } 
    reset();
    const data = questions[index]
    // console.log(data)
    quesBox.innerText = ` ${index+1} ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d; 
    const submitButton = document.getElementById("butn");
}

const submitQuiz = () => {
    
    const ans= getAnswer()
    if (ans == data.correct){
        right++;
    } else{
        wrong++;
    }
    index++;
    loadquestion();
    return;
}

const getAnswer = ()=> {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked){
                answer= input.value;
               
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked= false;
        }
    )
}
const endQuiz =() =>{
document.getElementById("box").innerHTML = `
<h1> Quiz result</h1>
<p>Your Result Is:</p>
<p>Total Question:${total}</p>
<p>Attempt:${total}</p>
<p>Right:${right}</p>
<p>Wrong:${wrong}</p>
<p>Percentage:${right}/${total}</p>
`
}
loadquestion();