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
  
  interface PinnedReposProps {
    pinnedRepos: Repo[];
  }
  
  export default function PinnedRepos({ pinnedRepos }: PinnedReposProps) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {pinnedRepos.map((repo) => (
          <div key={repo.id} className="border border-primary p-4 rounded-lg shadow-lg bg-accent text-white">
            <h3 className="text-xl font-semibold text-primary mb-2">{repo.name}</h3>  {/* Blue primary color */}
            <p className="text-sm text-grayText mb-4">{repo.description}</p>
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <span className="flex items-center">⭐ {repo.stargazers_count}</span>
                <span className="flex items-center">🍴 {repo.forks_count}</span>
              </div>
              <span className="text-sm text-grayText">{repo.primaryLanguage?.name}</span>
            </div>
            <a
              href={repo.html_url}
              className="text-blue-400 hover:underline mt-2 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Repository
            </a>
          </div>
        ))}
      </div>
    );
  }
  