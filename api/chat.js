export default function handler(req, res) {
  const { message } = req.body;

  const reply = `Ho ricevuto: "${message}". Dimmi pure cosa vuoi creare e ti aiuto.`;

  res.status(200).json({ reply });
}
