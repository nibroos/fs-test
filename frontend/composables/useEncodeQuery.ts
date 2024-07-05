import type { QueryObject } from '~/interfaces/QueryObjectInterface'
/**
 * Helpers
 * ===
 * ### Encode Query Param
 * Convert object with keys to query params
 * @param {Object} queryObj - Data object that want to converted to query param string
 * @return {String} encodedData - Encoded Data Object Query Params
 */
export const useEncodeQuery = (queryObj: QueryObject) => {
  const searchParams = new URLSearchParams()
  Object.entries(queryObj).forEach(([key, value]) => {
    if (value) {
      searchParams.set(key, String(value))
    }
  })
  return searchParams.toString()
}
