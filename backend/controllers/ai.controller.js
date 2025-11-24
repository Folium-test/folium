const { recommendBooks } = require('../services/ai.service');

exports.getRecommendations = async (req, res) => {
  try {
    const userHistory = req.body.history || [];
    const recommendations = await recommendBooks(userHistory);
    res.json(recommendations);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao gerar recomendações' });
  }
};
