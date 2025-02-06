import Pagination from './pagination/Pagination';

const App = () => {
  return (
    <div>
      <Pagination total={50} limit={10} currentPage={1} />
    </div>
  );
};

export default App;
