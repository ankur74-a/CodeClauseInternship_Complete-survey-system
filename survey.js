document.addEventListener('DOMContentLoaded', function () {
    const surveyForm = document.getElementById('surveyForm');

    surveyForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const gender = document.getElementById('gender').value;
        const feedback = document.getElementById('feedback').value;

        // Store survey data in local storage (you may want to replace this with a server-side solution)
        const surveyData = {
            name: name,
            age: age,
            gender: gender,
            feedback: feedback,
        };

        localStorage.setItem('surveyData', JSON.stringify(surveyData));

        alert('Survey submitted successfully!');
        surveyForm.reset();
    });
});
