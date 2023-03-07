module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A beautiful, smart, and loving person will be coming into your life.", "A faithful friend is a strong defense.", "All will go well with your new project.", "Believe it can be done.", "Failure is the path of lease persistence."];
      
        let randomNumber = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomNumber];
      
        res.status(200).send(randomFortune);
    },

    getUplifted: (req, res) => {
        const uplifts = ["Sea otters hold hands when they sleep :D", "Gentoo penguins propose to their mates with a pebble :)", "Crows like to give presents <3",  "There’s a basketball court on top of the U.S. Supreme Court building XD"];
      
        let randomNumber = Math.floor(Math.random() * uplifts.length);
        let randomUplift = uplifts[randomNumber];
      
        res.status(200).send(randomUplift);
    },

    getHappy: (req, res) => {
        const happies = [":)", ":D", ":^)", ":^D"];
      
        let randomNumber = Math.floor(Math.random() * happies.length);
        let randomHappy = happies[randomNumber];
      
        res.status(200).send(randomHappy);
    },

    getAnimal: (req, res) => {
        const animals = ["Puffins", "Black Vultures", "Diplozoon paradoxum", "Beavers"];
      
        let randomNumber = Math.floor(Math.random() * animals.length);
        let randomAnimal = animals[randomNumber];
      
        res.status(200).send(randomAnimal);
    },
}