import { GraphQLClient, gql } from 'graphql-request';

const endpoint = 'https://api.github.com/graphql';

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.GITHUB_TOKEN}`,  // Use the environment variable
  },
});

// Define the shape of the data you're expecting from the GitHub API
interface Repo {
  id: string;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  primaryLanguage: {
    name: string;
  };
}

interface GitHubResponse {
  user: {
    pinnedItems: {
      nodes: Array<{
        id: string;
        name: string;
        description: string;
        url: string;
        stargazerCount: number;
        forkCount: number;
        primaryLanguage: {
          name: string;
        };
      }>;
    };
  };
}

const query = gql`
  {
    user(login: "Mbensassi2026") {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            id
            name
            description
            url
            stargazerCount
            forkCount
            primaryLanguage {
              name
            }
          }
        }
      }
    }
  }
`;

export default async function getRepos(): Promise<Repo[]> {
  try {
    const data = await graphQLClient.request<GitHubResponse>(query);

    // Log the data to check the structure
    console.log("GitHub Response Data:", data);

    // Map the `url` field to `html_url` for compatibility with PinnedRepos
    return data.user.pinnedItems.nodes.map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.url,  // This maps `url` to `html_url`
      stargazers_count: repo.stargazerCount,
      forks_count: repo.forkCount,
      primaryLanguage: repo.primaryLanguage,
    }));
  } catch (error) {
    console.error("Error fetching repos:", error);
    throw new Error("Failed to fetch pinned repositories");
  }
}
