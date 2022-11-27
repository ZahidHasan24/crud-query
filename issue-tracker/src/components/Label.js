import useLabelsData from "../hooks/useLabelsData";

export default function Label({ label }) {
  const labelsQuery = useLabelsData();
  if (labelsQuery.isLoading) return <p>Loading...</p>;
  const labelObj = labelsQuery.data.find(
    (queryLabel) => queryLabel.id === label
  );
  if (!labelObj) return <p>There are no labels found</p>;
  return <span className={`label ${labelObj.color}`}>{labelObj.name}</span>;
}
