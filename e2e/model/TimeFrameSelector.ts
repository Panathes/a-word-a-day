import { t } from "testcafe";
import { e2eSelector } from "../util/selector";
import { TIME_FRAME_VALUE, TIME_FRAME_INCREMENT, TIME_FRAME_DECREMENT, TRANSLATION_CREATED_AT } from "./selectors";

export class TimeFrameSelector {
  public async increment(): Promise<void> {
    await t.click(e2eSelector(TIME_FRAME_INCREMENT));
  }
  public async decrement(): Promise<void> {
    await t.click(e2eSelector(TIME_FRAME_DECREMENT));
  }
  public async expectValueToEqual(value: string): Promise<void> {
    await t.expect(e2eSelector(TIME_FRAME_VALUE).innerText).eql(value);
  }
  public async getTranslationLength(): Promise<number> {
    return await e2eSelector(TRANSLATION_CREATED_AT).count;
  }
  public async expectGreaterThan(expected: number, returned: number): Promise<void> {
    await t.expect(returned).gte(expected);
  }
}
