//const { default: SearchBar } = require("../components/SearchBar/SearchBar");

const apiKey="J2cTkMzvJv-31HlDbAoTQ75fbUDE8y4H6dnwnfgG4vJS7mmgkhf2GwGtuv4PD6-Y5wrEl4VvZyuzFhk2zjm-U94c967-fVZKmVLDxXXXKalsBjF37S3iRDkw-oS1X3Yx";
const Yelp = {
  search(term, location, sortBy) {
      return fetch(
          `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
          {
              headers: {
                  Authorization: `Bearer ${apiKey}`
              }
          }).then(response => {
              return response.json();
          }).then(jsonResponse => {
              if (jsonResponse.businesses) {
                  return jsonResponse.businesses.map(business => ({
                      /* https://www.yelp.com/developers/documentation/v3/business_search */
                      id: business.id,
                      imageSrc: business.image_url,
                      name: business.name,
                      address: business.location.address1,
                      city: business.location.city,
                      state: business.location.state,
                      zipCode: business.location.zip_code,
                      category: business.categories[0].title,
                      rating: business.rating,
                      reviewCount: business.review_count
                  }));
              }
          })
  }
}

export default Yelp;
