import {e2eSelector} from "../util/selector";
import { t } from "testcafe";

export class Detail {
    public async writeValues(englishWord: string, frenchWord: string, ): Promise<void> {
        //await t.expect(e2eSelector("english_word").value).eql(value)
         await t.typeText(e2eSelector("english_word"), englishWord)
         await t.typeText(e2eSelector("french_word"), frenchWord)
    }

    public async writeValuesTest(englishWord: string, frenchWord: string, t: TestController): Promise<void> {
        //await t.expect(e2eSelector("english_word").value).eql(value)
        await t.typeText(e2eSelector("english_word"), englishWord)
        await t.typeText(e2eSelector("french_word"), frenchWord)
    }

    public async submitTranslation() {
        await t.click(e2eSelector("submit_translation"));
    }

    public async submitTranslationTest(t: TestController) {
        await t.click(e2eSelector("submit_translation"));
    }
}