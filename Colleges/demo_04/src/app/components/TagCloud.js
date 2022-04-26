import TagCloudItem from "./TagCloudItem";

const TagCloud = ({ tags }) => {
  const tagCloudItems =
    tags && tags.map((tag) => <TagCloudItem key={tag.id} tag={tag} />);

  return <div className="tagcloud">{tagCloudItems}</div>;
};

export default TagCloud;
