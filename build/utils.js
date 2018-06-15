const path = require('path');

/**
 *  创建一个绝对路径
 *  @param {...string} pathname 路径
 *  @return {string} 完整的路径
 */
exports.resolvePath = (...pathname) => path.join(process.cwd(), ...pathname);
