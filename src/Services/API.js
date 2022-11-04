export async function getDatabaseServices() {
  const res = await fetch('someurl');
  return await res.json();
}