
    function calculateLove() {
      const name1 = document.getElementById('name1').value.trim();
      const name2 = document.getElementById('name2').value.trim();

      if (name1 === '' || name2 === '') {
        document.getElementById('result').innerText = "Please enter both names!";
        return;
      }

      // Simple "love calculation" based on combined name character codes
      const combined = (name1 + name2).toLowerCase();
      let score = 0;
      for (let i = 0; i < combined.length; i++) {
        score += combined.charCodeAt(i);
      }

      // Map the score to a percentage
      const percentage = (score % 101); // between 0 and 100
      let message = "";

      if (percentage > 80) {
        message = "You're a perfect match! 💖";   
      } else if (percentage > 50) {
        message = "There's definitely something there! 💕";
      } else if (percentage > 30) {
        message = "Maybe give it a shot? 💌";
      } else {
        message = "Hmm... friends maybe? 💬";
      }

      document.getElementById('result').innerText = `${name1} ❤️ ${name2} = ${percentage}%\n${message}`;
    }
