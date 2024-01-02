# charasort
A web based character sorter. Allows users to run through a manual merge sort of their favorite
characters from a set.

**Features**
 * Entirely client side, no backend server required.
 * Filtering out characters based on JSON based filters.
 * Shareable links of sorter results.
 * Versioning of sorter data - you may want to add characters and resources over time. Versioning keeps shareable links valid even if the base character data is changed.
 
The version in this repo is built for characters from the [kiseki series](https://en.wikipedia.org/wiki/Trails_(series))
game series, but the sorter can be easily edited to create any custom sorter desired.

## Related Sorters
Several others have created other sorters based on other concepts and series, see them [here](https://github.com/execfera/charasort/wiki)!

## Known Issues

 * Does not work with CloudFlare's Rocket Loader.
 * Breaks on older versions of IE and mobile Safari, due to various incompatibilities.
