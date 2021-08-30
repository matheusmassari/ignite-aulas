import { RepositoryItem } from "./RepositoryItem";

const repositoryInfo = {
    nome: 'Lorem ipsum',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, eveniet!",
    link: 'https://github.com/'
}

export function RepositoryList() {
    return (
      <section className="repository-list">
        <h1>Lista de repositorios</h1>

        <ul>
          <RepositoryItem repository={repositoryInfo} />
          <RepositoryItem repository={repositoryInfo} />
          <RepositoryItem repository={repositoryInfo} />
          <RepositoryItem repository={repositoryInfo} />
          <RepositoryItem repository={repositoryInfo} />
        </ul>
      </section>
    );
}