import Joi from "joi";

import { update } from "../../database/functions/answers";

export default {
  tags: ["api", "questions"],
  description: "Update a answer with its id",
  notes: "It will update the answer",
  validate: {
    params: Joi.object({
      testId: Joi.string().required()
    }),
    payload: Joi.object({
      question: Joi.string(),
      answers: Joi.array()
    })
  },
  async handler(request, reply) {
    try {
      const { testId } = request.params;

      const { question, answers } = request.payload;

      const res = await update({ testId, question, answers });

      return res;
    } catch (error) {
      console.error(error);

      return error;
    }
  }
};
