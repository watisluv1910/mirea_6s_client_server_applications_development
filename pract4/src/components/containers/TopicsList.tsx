import {Link} from "react-router-dom";
import {topics} from "../../types/topic.ts";

export function TopicsList() {
    return (
        <ul>
            {Object.entries(topics).map(([slug, { title }]) => (
                <li key={slug}>
                    <Link to={`/topics/${slug}`}>
                        <h3>{title}</h3>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
