import Joi from "joi";

import { getAllByAuthorId } from "../../database/functions/test";

export default {
  tags: ["api", "answers"],
  description: "Display all questions by a particular author",
  notes: "It will display all questions",
  validate: {
    params: Joi.object({
      authorId: Joi.string().required()
    })
  },
  async handler(request, reply) {
    try {
      const { authorId } = request.params;

      const res = await getAllByAuthorId({ authorId });

      return res;
    } catch (error) {
      console.error(error);

      return error;
    }
  }
};
