export interface TopicType {
    title: string;
    description: string;
}

export const topics: {[index: string]:TopicType} = {
    'first-topic': {
        title: 'First Topic Title',
        description: 'First lorem ipsum dolor sit amet, consectetur adip.'
    },
    'second-topic': {
        title: 'Second Topic Title',
        description: 'Second lorem ipsum dolor sit amet, consectetur adip.'
    }
};
