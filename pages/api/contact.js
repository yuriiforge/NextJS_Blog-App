function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      !message ||
      name.trim() === '' ||
      message.trim() === ''
    ) {
      return res.status(422).json({ message: 'Invalid input data!' });
    }

    //Store in DB
    const newMessage = {
      email,
      name,
      message,
    };

    res.status(201).json({ message: 'Successfully stored message!' });
  }
}

export default handler;
