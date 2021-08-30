export function RepositoryItem(props) {
    return (
      <li>
        <strong>{props.repository.nome}</strong>
        <p>{props.repository.description}</p>

        <a href={props.repository.link} target = '_blank'>clique aqui</a>
      </li>
    );
}