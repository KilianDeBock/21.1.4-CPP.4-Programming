import { faker } from "@faker-js/faker";

import client from "./graphql_client";

const mutationCreateCommunity = `
mutation CreateCommunityMutation($name: String!, $description: String!, $type: CommunityType) {
  __typename
  createCommunity(data: {name: $name, description: $description, type: $type}) {
    name
    description
    type
  }
}
`;

(async () => {
  const allowedTypes = ["public", "private", "restricted"];
  const createCommunity = async ({ name, description, type }) => {
    try {
      const { createCommunity } = await client.request(
        mutationCreateCommunity,
        {
          name,
          description,
          type,
        }
      );

      if (!createCommunity) {
        throw new Error(`Can't create user!`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createCommunities = async (n = 2) => {
    const promises = [];
    for (let i = 0; i < n; i++) {
      const type = faker.helpers.arrayElement(allowedTypes);
      promises.push(
        await createCommunity({
          name: faker.internet.userName(),
          description: faker.lorem.sentence(),
          type,
        })
      );
    }
    return await Promise.all(promises);
  };

  await createCommunities();
})();
