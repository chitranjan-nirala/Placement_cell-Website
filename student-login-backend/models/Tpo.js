
import mongoose from 'mongoose';

const TPOSchema = new mongoose.Schema({
  tpoId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'TPO',
  },
});

const TPO = mongoose.model('TPO', TPOSchema);
export default TPO;
