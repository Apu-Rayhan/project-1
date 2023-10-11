export default async function getUsers() {
  const result = await fetch("https://dummyjson.com/users");
  return result.json();
}
