import {useParams} from "react-router-dom";
import {topics, TopicType} from "../types/topic.ts";

export function Topic() {
    const { slug } = useParams();
    const topic: TopicType = topics[slug!];

    if (!topic) {
        return <span>The topic you've requested doesn't exist.</span>;
    }

    const { title, description } = topic;

    return (
        <div style={{ padding: 20 }}>
            <p>Topic id is <span style={{ fontWeight: 600 }}>{slug}</span></p>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
}
