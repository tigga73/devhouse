import * as Yup from 'yup';
import User from '../models/User';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
    });

    const { email } = req.body;

    if (!schema.isValid(req.body)) {
      return res.status(400).json({ error: 'E-mail é um campo obeigatório' });
    }

    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ email });
    }

    return res.json(user);
  }
}

export default new SessionController();
