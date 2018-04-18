import Joi from "joi";

import { create } from "../../database/functions/answers";

export default {
  tags: ["api", "answers"],
  description: "Create a new answer",
  notes: "It will create a new answer",
  validate: {
    payload: Joi.object({
      text: Joi.string().required(),
      authorId: Joi.string().required(),
      questionId: Joi.string().required()
    })
  },
  async handler(request, reply) {
    try {
      const { text, authorId, questionId } = request.payload;

      const res = await create({ text, authorId, questionId });

      return res;
    } catch (error) {
      console.error(error);

      return error;
    }
  }
};
