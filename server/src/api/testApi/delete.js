import Joi from "joi";

import { Delete } from "../../database/functions/test";

export default {
  tags: ["api", "answers"],
  description: "Delete a test question",
  notes: "It will delete a test question",
  validate: {
    params: Joi.object({
      testId: Joi.string().required()
    })
  },
  async handler(request, reply) {
    try {
      const { testId } = request.params;

      const res = await Delete({ testId });

      return res;
    } catch (error) {
      console.error(error);

      return error;
    }
  }
};
