import { BasicInstance } from ".";

export async function getList(language?: string) {
  if (language) {
    return await BasicInstance.get(
      `leaders?country_code=SG&language=${language}`
    );
  } else {
    return await BasicInstance.get("leaders?country_code=SG");
  }
}
