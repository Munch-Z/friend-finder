const submitBtn = document.getElementById('survey_submit');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    postSurvey();
} );

function postSurvey() {
    console.log(document.querySelector('[name="survey_q1"]:checked').value);
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

    console.log(userData);

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