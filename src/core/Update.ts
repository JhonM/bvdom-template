import type { ActionType, Model } from "../types";
import { MSGS } from "../types";

export function getExampleMsg(example: boolean) {
  return {
    type: MSGS.EXAMPLE,
    example,
  };
}

function update(msg: ActionType, model: Model): Model {
  switch (msg.type) {
    case MSGS.EXAMPLE:
      const { example } = msg;
      return { ...model, example };
    default:
      return model;
  }
}

export default update;
