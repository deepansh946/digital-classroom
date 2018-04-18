import Joi from "joi";

import { Delete } from "../../database/functions/users";

export default {
  tags: ["api", "users"],
  description: "Delete a new user",
  notes: "It will delete a new user",
  validate: {
    params: Joi.object({
      userId: Joi.string().required()
    })
  },
  async handler(request, reply) {
    try {
      const { userId } = request.params;

      const res = await Delete({ userId });

      return res;
    } catch (error) {
      console.error(error);

      return error;
    }
  }
};
