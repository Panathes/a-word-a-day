import {e2eSelector} from "../util/selector";
import { t } from "testcafe";
import {CHALLENGE_HIDDEN} from "./selectors";

export class Challenge {
    public async clickHidden() {
        await t.click(e2eSelector(CHALLENGE_HIDDEN))
    }
}