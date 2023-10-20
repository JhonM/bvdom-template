import initModel from "./core/Model";
import update from "./core/Update";
import view from "./core/View";
import app from "./core/App";
import "./styles.css";

const node = document.getElementById("app");

export default app(initModel, update, view, node);
