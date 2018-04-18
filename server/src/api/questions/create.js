import Joi from "joi";

import { create } from "../../database/functions/questions";

export default {
  tags: ["api", "questions"],
  description: "Create a new question",
  notes: "It will create a new question",
  validate: {
    payload: Joi.object({
      text: Joi.string().required()
    })
  },
  async handler(request, reply) {
    try {
      const { text } = request.payload;

      const res = await create({ text });

      return res;
    } catch (error) {
      console.error(error);

      return error;
    }
  }
};
