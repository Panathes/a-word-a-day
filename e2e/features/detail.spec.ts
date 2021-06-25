import {Detail} from "../model/Detail";
import {APPLICATION_URL} from "../model";

const detail = new Detail()

fixture("Detail").page(APPLICATION_URL + "/detail")

test("Add translation in localstorage", async (t) => {
    await detail.writeValues("bed", "lit");
    await detail.submitTranslation();
})