import generateMGF from 'mgf-generator';
import parseMGF from 'mgf-parser';

/**
 * Modifies an MGF file.
 * @param {string} rawData input data (MGF)
 * @param {object} [options={}]
 * @param {object} [options.parse={}] MGF parser options
 * @param {string} [options.parse.recordTypes = ''] allows to filter the data entries based on their type
 * @param {boolean} [options.parse.sortX = false] should the MS spectrum be sorted by x values
 * @param {boolean} [options.parse.uniqueX = false] should merge the repeating x values of MS spectrum (summing the y values together). Sets sortX to true if true.
 * @param {boolean} [options.parse.normedY = false] should the MS spectrum be normalized (sum of y values = 1)
 * @param {number} [options.parse.maxY = undefined] if not undefined, rescale MS spectrum so that max Y value equals maxY (must be bigger than 0)
 * @returns {array<object>} Modified MGF
 */
export default function modifyMGF(mgf, options = {}) {
  const { parse } = options;

  let data = parseMGF(mgf, parse);

  return generateMGF(data);
}
