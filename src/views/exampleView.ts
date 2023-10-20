import { h } from "@jhonm/blanc-vdom/src";
import { DispatchType, Model } from "../types";
import { getExampleMsg } from "../core/Update";

export function exampleView(dispatch: DispatchType, model: Model) {
  return h(
    "Button",
    { style: "display: block;", onclick: () => dispatch(getExampleMsg(true)) },
    "Click to change example"
  );
}
