import { SectionCreator } from "./join-us-section.js";
import { validator } from "./src/email-validator.js";
import './styles/style.css'

const factory = new SectionCreator;
const standard = factory.create('standard');

// const adv = factory.create('advanced');
// factory.remove();
