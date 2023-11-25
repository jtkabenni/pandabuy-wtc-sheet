import logo from "./logo.svg";
import "./App.css";
import {
  DynamicWidgets,
  InstantSearch,
  Hits,
  Highlight,
  RefinementList,
  SearchBox,
  InstantSearchServerState,
  InstantSearchSSRProvider,
  getServerState,
  Pagination,
} from "react-instantsearch";
import algoliasearch from "algoliasearch/lite";
import { Hit as AlgoliaHit } from "instantsearch.js";
import "instantsearch.css/themes/algolia.css";

const client = algoliasearch("TV0WINJGZU", "ff9e9ae7119e5a8381082aa6fcc757d4");

function Hit({ hit }) {
  return (
    <article>
      <img src={hit.image_url} alt={hit.name} />
      <h1>
        <Highlight attribute="name" hit={hit} />
      </h1>
      <p>${hit.price}</p>
      <a href={hit.link}>CLICK TO COP</a>
    </article>
  );
}
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <InstantSearch searchClient={client} indexName="pandabuy_prod">
        <div className="Container">
          <div>
            <RefinementList attribute="brand" />
            <RefinementList attribute="name" />
            <RefinementList attribute="price" />
          </div>
          <div>
            {" "}
            <SearchBox />
            <Hits hitComponent={Hit} />
          </div>
        </div>
        <Pagination />
      </InstantSearch>
    </div>
  );
}

export default App;
