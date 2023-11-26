import logo from "./logo.svg";
import "./App.css";
import {
  InstantSearch,
  Hits,
  Highlight,
  RefinementList,
  SearchBox,
  Pagination,
} from "react-instantsearch";
import algoliasearch from "algoliasearch/lite";
import { Hit as AlgoliaHit } from "instantsearch.js";

const client = algoliasearch("TV0WINJGZU", "ff9e9ae7119e5a8381082aa6fcc757d4");

function Hit({ hit }) {
  return (
    <article>
      <img src={hit.image_url} alt={hit.name} />
      <h1>
        <Highlight attribute="name" hit={hit} />
      </h1>
      <p>{hit.price}</p>
      <button>
        <a href={hit.link}>CLICK TO COP</a>
      </button>
    </article>
  );
}
function App() {
  return (
    <div className="App">
      <InstantSearch searchClient={client} indexName="pandabuy_prod">
        <div className="Container">
          <div className="refinements">
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
