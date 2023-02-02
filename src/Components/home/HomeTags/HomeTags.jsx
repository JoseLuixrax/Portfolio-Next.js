const { HomeTagsWrapper, TagsContainer, Tag } = require("./HomeTags.styled");

const TAGS = [
    'React',
    'Next.js',
    'JavaScript',
    'HTML',
    'CSS',
    'SASS',
    'Styled Components',
    'Git',
    'GitHub',
    'Figma',
    'Adobe XD',
];

const HomeTags = () => {
    return (
        <HomeTagsWrapper>
            <TagsContainer>
                {TAGS.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                ))}
            </TagsContainer>
        </HomeTagsWrapper>
    );
};

export default HomeTags;