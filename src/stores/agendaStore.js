import { createStore } from "redux"
import agenda from "../reducer/agenda"

const agendaStore = createStore(agenda)

export { agendaStore }