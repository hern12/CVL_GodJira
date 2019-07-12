import "../styles/index.css";
import fetch from 'isomorphic-unfetch';

const Index = (props) => (
  <div className="container">
    <header>
      <nav className="flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 mr-6">
          <img className="h-8 w-8 mr-3" src="/static/icon/charmander.png" />
          <span className="font-semibold text-xl tracking-tight">
            CVL GodJira
          </span>
        </div>
      </nav>
    </header>
    <main>
      <div className="flex mb-4">
        <div className="w-1/3">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                #winter
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
);


Index.getInitialProps  = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data}`);

  return {
    shows: data.map(entry => entry.show)
  };
}


export default Index;