import User from "../models/User.model.js";

export const singUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userEmail = await User.findOne({ email });

    if (userEmail) {
      return res.status(404).send('user already exists');
    }

    const user = await User.create({ name, email, password });

    res.status(200).json({
      success: true,
      message: 'user create successfully',
      user: user,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
