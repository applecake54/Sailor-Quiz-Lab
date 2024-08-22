
const scouts = [
  {
    id: 1,
    name: 'Sailor Moon',
    description: 'Soy una Sailor Scout que lucha por el amor y la justicia. ¡Soy Sailor Moon y te castigaré, en el nombre de la Luna!',
    image: 'https://uvn-brightspot.s3.amazonaws.com/assets/vixes/btg/sailor_moon-2.gif'
  },
  {
    id: 2,
    name: 'Sailor Mercury',
    description: 'Soy una Sailor Scout que lucha por el amor y el conocimiento. ¡Soy Sailor Mercury, y te castigaré en el nombre de Mercurio!',
    image: 'https://pa1.aminoapps.com/7030/db0da4a5c122afa862b045e281aff390bd3937c0r1-500-281_hq.gif'
  },
  {
    id: 3,
    name: 'Sailor Mars',
    description: 'Soy una Sailor Scout que lucha por el amor y la pasión. ¡Soy Sailor Mars, y te castigaré en el nombre de Marte!',
    image: 'https://pa1.aminoapps.com/6317/32b35207145f6ad892c26ef0fefb5c3078f5a1cb_00.gif'
  },
];

export const determineScout = (answers) => {
  if (answers.includes('¡Helado! Siempre es la mejor recompensa.')) {
    return scouts.find(scout => scout.name === 'Sailor Moon');
  }
  if (answers.includes('Un buen plato de pasta, ¡necesito energía!')) {
    return scouts.find(scout => scout.name === 'Sailor Mercury');
  }
  if (answers.includes('Algo elegante y delicioso, como sushi.')) {
    return scouts.find(scout => scout.name === 'Sailor Mars');
  }

  return scouts[0];
};

export default scouts;
