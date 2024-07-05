import type { QueryObject } from '~/interfaces/QueryObjectInterface'
/**
 * Helpers
 * ===
 * ### Decode Query Param
 * Convert Query Params String to Data Object with keys
 * @param {String} queryString -  Query Params String that want to converted to Data object
 * @return {Object} encodedData - Encoded Data Object Query Params
 */
export const useDecodeQuery = (queryString: string): QueryObject => {
  return queryString
    .replace('?', '')
    .split('&')
    .reduce((a: { [key: string]: any }, n: string) => {
      return { ...a, [n.split('=')[0]]: n.split('=')[1] }
    }, {})
}
