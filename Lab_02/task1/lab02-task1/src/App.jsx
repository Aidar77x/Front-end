import FragmentLayout from "./components/FragmentLayout";
import ItemList from "./components/ItemList";
import CombinedFragmentList from "./components/CombinedFragmentList";

export default function App() {
  return (
    <>
      <FragmentLayout />
      <hr />
      <ItemList />
      <hr />
      <CombinedFragmentList />
    </>
  );
}