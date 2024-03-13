import { createSlot } from "@player-tools/dsl";
import { Collection } from "@devtools-ui/collection";
import { Text } from "@devtools-ui/text";

/** A utility for quickly creating named slots using the text and collection factories */
const slotFactory = (name: string, isArray = false) =>
  createSlot({
    name,
    TextComp: Text,
    CollectionComp: Collection,
    isArray,
    wrapInAsset: true,
  });

export const LabelSlot = slotFactory("label");
export const ValuesSlot = slotFactory("values", true);
export const ItemsSlot = slotFactory("items", true);
export const ValueSlot = slotFactory("value");
export const HeaderSlot = slotFactory("header");
export const TitleSlot = slotFactory("title");
export const SubtitleSlot = slotFactory("subtitle");
export const RowsSlot = slotFactory("rows", true);
export const TitleImageSlot = slotFactory("titleImage");
export const CalloutSlot = slotFactory("callout");
export const PrimaryInfoSlot = slotFactory("primaryInfo");
export const AdditionalInfoSlot = slotFactory("additionalInfo");
export const FieldsSlot = slotFactory("fields");
export const ActionsSlot = slotFactory("actions", true);
export const FooterSlot = slotFactory("footer");
export const ResultTextSlot = slotFactory("resultText");
export const SurveySlot = slotFactory("survey");
export const NoteSlot = slotFactory("note");
export const IconSlot = slotFactory("icon");
export const ContentSlot = slotFactory("content");
export const NavigationSlot = slotFactory("navigation", true);
export const HeaderActionsSlot = slotFactory("headerActions", true);
export const SummarySlot = slotFactory("summary");
export const ImageSlot = slotFactory("image");
export const HelpSlot = slotFactory("help");
export const DescriptionSlot = slotFactory("description");
export const AffirmativeActionSlot = slotFactory("affirmativeAction");
export const NegativeActionSlot = slotFactory("negativeAction");
export const ChoiceDetailSlot = slotFactory("choiceDetail");
