const submitBtn = document.getElementById('survey_submit');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (checkForm()) {
        postSurvey();
    }

} );

function postSurvey() {

    const userData = {
        name: document.getElementById('survey_name').value,
        photo: document.getElementById('survey_img').value,
        scores: [
            document.querySelector('[name="survey_q1"]:checked').value,
            document.querySelector('[name="survey_q2"]:checked').value,
            document.querySelector('[name="survey_q3"]:checked').value,
            document.querySelector('[name="survey_q4"]:checked').value,
            document.querySelector('[name="survey_q5"]:checked').value,
            document.querySelector('[name="survey_q6"]:checked').value,
            document.querySelector('[name="survey_q7"]:checked').value,
            document.querySelector('[name="survey_q8"]:checked').value,
            document.querySelector('[name="survey_q9"]:checked').value,
            document.querySelector('[name="survey_q10"]:checked').value,
        ]
    }

    fetch('/api/friends', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    })

}

function checkForm() {
    const radios = document.querySelectorAll('[type="radio"]:checked');
    const name = document.getElementById('survey_name').value;
    const photo = document.getElementById('survey_img').value;
    let isValid = true;


    if(name === "" || photo === "") {
        alert('You\'ve missed a required field!');
        return isValid = false;
    }


    if (radios.length < 10) {
        alert('Please make sure to answer all of the questions!');
        return isValid = false;
    }


    return isValid;
}