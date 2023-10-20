import { h } from "@jhonm/blanc-vdom/src";
import type { DispatchType, Model } from "../types";
import { ExampleView } from "../views";

function view(dispatch: DispatchType, model: Model) {
  return h(
    "div",
    {},
    h(
      "pre",
      {},
      ...[ExampleView(dispatch, model), JSON.stringify(model, null, 2)]
    )
  );
}

export default view;
