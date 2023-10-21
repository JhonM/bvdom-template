/**
 * @jest-environment jsdom
 */

import { render as domRender } from "@jhonm/blanc-vdom";
import { screen } from "@testing-library/dom";
import { exampleView } from "./example-view";

describe("example view", () => {
  it("shows example", () => {
    const view = exampleView(() => {}, { example: false });

    document.body.appendChild(domRender(view));

    expect(screen.getByText("Click to change example"));
  });
});
