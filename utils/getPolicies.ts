import data from '../public/policies/data.json';
export function getPolicies(id: string) {
  if (id) {
    return data.find((policy) => policy.id === id);
  }
  return null;
}

export function getAllPolicies() {
  return data;
}
