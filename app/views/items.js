import { escape } from "@std/html/entities";

export function itemsView({ items, errors = { "new-item": {} } }) {

  const { ["new-item"]: newItem } = fragments(errors);

  const listItems = items
  .map((item) => `
    <article class="destination__card">
      <img src="${item.image}" alt="${escape(item.label)}" />

      <div class="destination_card_details">
        <div>
          <h4>${escape(item.title)}</h4>
          <p>${escape(item.label)}</p>
        </div>

        <div class="destination__rating">
          ⭐ ${item.rating}
        </div>
      </div>
    </article>
  `)
  .join("");

  return `
  <main>

    <header>
      <h1>Travel Destinations </h1>
    </header>

    <section aria-labelledby="destinations-heading">

      <h2 id="destinations-heading">Explore Destinations</h2>

      <form method="POST">

        <fieldset>
          <legend>Add a New Destination</legend>

          <label for="new-item">Destination Name:</label>

          <input 
            id="new-item" 
            name="new-item" 
            placeholder="e.g. New York, USA, Paris, France, Bali, Indonesia"
            ${newItem.value || ""}
          >

          ${newItem.message || ""}

          <button type="submit">Add Destination</button>

        </fieldset>

      </form>

      <section aria-label="list of travel destinations">
        ${listItems}
      </section>

    </section>

  </main>
  `;
}