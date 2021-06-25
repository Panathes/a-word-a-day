 import {APPLICATION_URL, Challenge, Detail} from "../model";

const challenge = new Challenge();
const detail = new Detail();

 fixture("Challenge")
     .page(APPLICATION_URL + "/challenge")


 test("Test display word", async (t) => {
     await t.navigateTo(APPLICATION_URL + "/detail")
     await detail.writeValuesTest("bed", "lit", t)
     await detail.submitTranslationTest(t)
     await t.navigateTo(APPLICATION_URL + "/challenge")
     await challenge.clickHidden()
})