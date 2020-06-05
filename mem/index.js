module.exports = async function (context, req)  {
    const mem = [];
    const million = 1000000;
    mem[Math.floor(parseInt(10000, 10) * million)] = 'A';
    mem.fill('B');
    context.res.status(200).send('Pass');
  };