import Joi from "joi";

import { create } from "../../database/functions/test";

export default {
  tags: ["api", "answers"],
  description: "Create a new test question",
  notes: "It will create a new test question",
  validate: {
    payload: Joi.object({
      question: Joi.string().required(),
      authorId: Joi.string().required(),
      answers: Joi.array().required()
    })
  },
  async handler(request, reply) {
    try {
      const { question, authorId, answers } = request.payload;

      const res = await create({ question, authorId, answers });

      return res;
    } catch (error) {
      console.error(error);

      return error;
    }
  }
};
