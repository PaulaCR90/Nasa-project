export const todayReverse = new Date(Date.now()).toLocaleString().slice(0, 8);

const Today = new Date(Date.now()).toISOString().slice(0, 10);

export default Today;
