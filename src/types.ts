export const MSGS = {
  EXAMPLE: "EXAMPLE",
} as const;

export type MsgType = typeof MSGS[keyof typeof MSGS];

export type Model = {
  example: boolean;
};

export type ActionType = { type: "EXAMPLE"; example: boolean };

export type DispatchType = (action: ActionType) => void;
