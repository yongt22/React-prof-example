
import { useState, useEffect } from "react";

import Listing from "../Listing.jsx";

export default function ApartmentListingsList() {
  const [listings, setListings] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const reloadListings = async () => {
      setLoading(true);

      try {
        const res = await fetch(
          `/api/listings?q=${encodeURIComponent(query)}`,
          { signal: controller.signal }
        );

        if (!res.ok) {
          console.error("Failed to fetch listings:", res.status);
          setListings([]);
          return;
        }

        const data = await res.json();
        setListings(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Error fetching listings:", error);
          setListings([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    const timeout = setTimeout(reloadListings, 300);

    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [query]);

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

  function onQuery(evt) {
    setQuery(evt.target.value);
  }

  return (
    <div>
      <h2>Apartment Listings</h2>

      <input
        value={query}
        onChange={onQuery}
        placeholder="Filter listings..."
      />

      {loading ? (
        <div>Loading listings...</div>
      ) : listings.length === 0 ? (
        <div>No listings found.</div>
      ) : (
        listings.map(renderListing)
      )}
    </div>
  );
}
