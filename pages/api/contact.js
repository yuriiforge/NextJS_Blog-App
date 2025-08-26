import clientPromise from '../../lib/mongodb';

async function handler(req, res) {
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
      createdAt: new Date(),
    };

    try {
      const client = await clientPromise;
      const db = client.db();

      const result = await db.collection('messages').insertOne(newMessage);

      res.status(201).json({
        message: 'Successfully stored message!',
        id: result.insertedId,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Storing message failed!' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default handler;
