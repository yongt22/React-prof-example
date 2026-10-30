
import Listing from "./Listing.jsx";

export default function ApartmentListingsList({
  listings,
  query,
  setQuery,
}) {
  function renderListing(listing) {
    return (
      <Listing
        key={listing.id}
        id={listing.id}
        title={listing.title}
        price={listing.price}
      />
    );
  }

  const onQuery = (evt) => {
    console.log("Query changed:", evt.target.value);
    setQuery(evt.target.value);
  };

  return (
    <div>
      <h2>Apartment Listings</h2>
      <input
        value={query}
        onChange={onQuery}
        placeholder="Filter listings..."
      />

      {!listings?.length ? (
        <div>Loading listings...</div>
      ) : (
        listings.map(renderListing)
      )}
    </div>
  );
}
