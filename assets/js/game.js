var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 20;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
  // Alert users that they are starting the round
  window.alert("Welcome to Robot Gladiators!");

  // 3.1.8 skip or fight?
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  console.log(promptFight);

  // 3.1.8 if player choses to fight, then fight
      if (promptFight === "fight" || promptFight === "FIGHT") {
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      // 3.1.7 Log a resulting message to the console so we know that it worked.
      console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
      );

            // 3.1.7 check enemy's health
            if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

      // 3.1.8 remove player's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      // 3.1.7 Log a resulting message to the console so we know that it worked.
      console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      );

          // 3.1.7 check player's health
          if (playerHealth <= 0) {
          window.alert(playerName + " has died!");
          } else {
          window.alert(playerName + " still has " + playerHealth + " health left.");
          }

      } else if (promptFight === "skip" || promptFight === "SKIP") {
          window.alert(playerName + " has chosen to skip the fight!");
          } else {
          window.alert("You need to pick a valid option. Try again!");
          }
      


};

fight();