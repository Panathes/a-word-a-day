import { TimeFrameSelector, APPLICATION_URL } from "../model";

const timeFrameSelector = new TimeFrameSelector();

fixture("List").page(APPLICATION_URL + "/list");

test("The user should land on the list page", async (t) => {
  let length = 0
  length = await testOneDurationWithIncrement("1 week", length)
  length = await testOneDurationWithIncrement("3 weeks", length)
  length = await testOneDurationWithIncrement("1 month", length)
  await timeFrameSelector.decrement()
  await timeFrameSelector.expectValueToEqual("3 weeks")
})

const testOneDurationWithIncrement = async function(value: string, length: number): Promise<number> {
  await timeFrameSelector.increment()
  await timeFrameSelector.expectValueToEqual(value)
  const number = await timeFrameSelector.getTranslationLength()
  await timeFrameSelector.expectGreaterThan(length, number)
  return number
}