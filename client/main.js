const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const upliftingBtn = document.getElementById("upliftingButton")
const happyBtn = document.getElementById("happyButton")
const mateBtn = document.getElementById("mateButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getUplifted = () => {
    axios.get("http://localhost:4000/api/uplifting/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
};

const getHappy = () => {
    axios.get("http://localhost:4000/api/happy/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
};

const getAnimal = () => {
    axios.get("http://localhost:4000/api/mate/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
};

happyBtn.addEventListener('click', getHappy)
mateBtn.addEventListener('click', getAnimal)
upliftingBtn.addEventListener('click', getUplifted)
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)