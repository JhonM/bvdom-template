import { h } from "@jhonm/blanc-vdom";
import { DispatchType, Model } from "../types";
import { getExampleMsg } from "../core/Update";

export function exampleView(dispatch: DispatchType, model: Model) {
  return h(
    "button",
    { style: "display: block;", onclick: () => dispatch(getExampleMsg(true)) },
    "Click to change example"
  );
}
