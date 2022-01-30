export async function getVillager() {
  const resp = await fetch('https://acnhapi.com/v1a/');
  const data = await resp.json();
  return data;
}
