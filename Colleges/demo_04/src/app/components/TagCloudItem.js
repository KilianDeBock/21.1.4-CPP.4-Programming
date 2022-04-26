const TagCloudItem = ({ tag, key }) => {
  return <li key={key}>{tag.name}</li>;
};

export default TagCloudItem;
