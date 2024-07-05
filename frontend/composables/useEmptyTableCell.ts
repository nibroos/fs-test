import { property } from 'lodash-es'

/**
 * Helpers
 * ===
 * ### Empty Table Cell Data
 * Check if table cell is Empty, if it is, replace String to '-'
 * @param {Object} cellData - Table Cell Data
 * @param {String} itemKey - Item Key from data for the text inside the cell
 * @return {Sting} cellDataValue - Return cell data value or '-' if it is empty
 */
export const useEmptyTableCell = (cellData: any, itemKey: string): string => {
  return (property(itemKey)(cellData) as string) || '-'
}

export default useEmptyTableCell
