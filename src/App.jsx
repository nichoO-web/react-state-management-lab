import { useState } from "react";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  const [zombieFighters, setZombieFighters] = useState(
    [
      {
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://via.placeholder.com/150/92c952',
      },
      {
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://via.placeholder.com/150/771796',
      },
      {
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://via.placeholder.com/150/24f355',
      },
      {
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/d32776',
      },
      {
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://via.placeholder.com/150/1ee8a4',
      },
      {
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://via.placeholder.com/150/66b7d2',
      },
      {
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://via.placeholder.com/150/56acb2',
      },
      {
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://via.placeholder.com/150/8985dc',
      },
      {
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://via.placeholder.com/150/392537',
      },
      {
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/602b9e',
      },
    ]);

    const calculateTotalStrength = (teamArray) => {
      return teamArray.reduce((sum, member) => sum + member.strength, 0);
    };

    const calculateTotalAgility = (teamArray) => {
      return teamArray.reduce((sum, member) => sum + member.agility, 0);
    };

    const handleAddFighter = (fighter) => {
      if (money >= fighter.price) {
        const updatedTeam = [...team, fighter];
        setTeam(updatedTeam);
        setMoney(money - fighter.price);
        setTotalStrength(calculateTotalStrength(updatedTeam));
        setTotalAgility(calculateTotalAgility(updatedTeam));
      } else {
        console.log("Not enough money");
      }
    };

    const handleRemoveFighter = (index) => {
      const removedFighter = team[index];
      const updatedTeam = team.filter((_, i) => i !== index);
      setTeam(updatedTeam);
      setMoney(money + removedFighter.price);
      setTotalStrength(calculateTotalStrength(updatedTeam));
      setTotalAgility(calculateTotalAgility(updatedTeam));
    }

  return (
    <>
      <h3>Money: ${money}</h3>
      <h3>Team Strength: {totalStrength}</h3>
      <h3>Team Strength: {totalAgility}</h3>

      <ul>
        {zombieFighters.map((fighter, index) => (
          <li key={index}>
            <img src={fighter.img} alt={fighter.name} />
            <p><strong>Name:</strong> {fighter.name}</p>
            <p><strong>Price:</strong> {fighter.price}</p>
            <p><strong>Strength:</strong> {fighter.strength}</p>
            <p><strong>Agility:</strong> {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </li>
        ))}
      </ul>

      <h3>Your Team</h3>

      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <ul>
          {team.map((member, index) => (
          <li key={index}>
            <img src={member.img} alt={member.name} />
            <p><strong>Name:</strong> {member.name}</p>
            <p><strong>Price:</strong> {member.price}</p>
            <p><strong>Strength:</strong> {member.strength}</p>
            <p><strong>Agility:</strong> {member.agility}</p>
            <button onClick={() => handleRemoveFighter(index)}>Remove</button>
          </li>
        ))}
        </ul>
      )}
    </>
  );
}

export default App
